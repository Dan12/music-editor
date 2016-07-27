import javax.sound.sampled.*;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Scanner;

/**
 * Created by Danweb on 5/29/16.
 */
public class Main {

    public String inputFileBaseName = "l";
    public String inputFileFormat = "wav";
    public int numberOfInputFiles = 4;

    public int filenum = 0;
    public int emptyTol = 8; // under this is considered silence
    public int emptyLen = 20;    // have to have tolerated silence for 20 bytes to be considered in the silent section
    public int moveBufferHead = -1000;   // move buffer head back to compensate for immediate start to sound and possible cutoffs
    public int moveBufferLength = -5000;   // move buffer length back due to the amount of empty space afterwards
    public int roundBuffer = 128;    // round output buffer to have nice chunks and get ride of static overlay
    public int chunkSize = 4096; // input read chunk size
    public boolean deleteWav = true;
    public boolean createMP3 = true;
    public String inputFileDir = "input";
    public String outputDir = "mp3Output";
    public Scanner scanner;

    public static void main(String[] args) {
        Main main = new Main();

        main.startSplitting();
    }

    public Main(){}

    public void startSplitting(){
        for(int i = 0; i < numberOfInputFiles; i++)
            splitFile(inputFileBaseName+""+(i+1)+"."+inputFileFormat);
    }

    public void splitFile(String inputFileName){
        // initialize scanner
        scanner = new Scanner(System.in);

        // create input file
        File inputFile = Paths.get(".", inputFileDir, inputFileName).normalize().toFile();

        System.out.println("File exists: "+inputFile.exists());


        // get the data input stream
        AudioInputStream inputStream = null;
        try {
            inputStream = AudioSystem.getAudioInputStream(inputFile);
        } catch (UnsupportedAudioFileException e) {e.printStackTrace();} catch (IOException e) {e.printStackTrace();}

        AudioFormat decodedFormat = getDecodeFormat(inputStream);

        // get number of bytes in input file
        int inputFileByteSize = getInputByteLength(inputFile, decodedFormat);
        System.out.println(inputFileByteSize);

        // created formatted input stream
        AudioInputStream formattedInputStream = AudioSystem.getAudioInputStream(decodedFormat, inputStream);

        // buffer of all audio bytes
        byte[] audioData = new byte[inputFileByteSize];

        getAllAudioData(audioData, formattedInputStream);

        // System.out.println(Arrays.toString(audioData));

        scanForAudioSections(audioData, decodedFormat);

        try {
            inputStream.close();
            formattedInputStream.close();
        } catch (IOException e) {e.printStackTrace();}
    }

    private void scanForAudioSections(byte[] audioData, AudioFormat decodedFormat){
        // scan for silence and find audio start and end points and use those points to split audio
        for(int i = 0; i < audioData.length; i++){
            // scan until no silence for one byte
            if(Math.abs(audioData[i]) > emptyTol){
                int startPos = i;

                // make sure that audio is not silent for at least emptyTol number of bytes
                boolean isValid = true;
                for(i = i; i < startPos+emptyLen; i++){
                    if(Math.abs(audioData[i]) <= emptyTol){
                        isValid = false;
                        break;
                    }
                }

                // valid audio sample determined
                if(isValid){
                    while(i < audioData.length){
                        i++;
                        // scan until one byte of silence detected
                        if(Math.abs(audioData[i]) <= emptyTol){
                            int endPos = i;

                            // make sure that audio is silent for at least emptyTol number of bytes
                            boolean isOver = true;
                            for(i = i; i < endPos+emptyLen; i++){
                                if(Math.abs(audioData[i]) > emptyTol){
                                    isOver = false;
                                    break;
                                }
                            }

                            // if audio section boundary found, make a new file with the data within the boundaries
                            if(isOver){
                                newFile(audioData, startPos, endPos, decodedFormat);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    private void getAllAudioData(byte[] audioData, AudioInputStream inputStream){

        // byte at for full buffer
        int byteAt = 0;
        byte[] audioBytes = new byte[chunkSize];
        // go through input buffer and copy all bytes to allBytes array
        try {
            while (inputStream.read(audioBytes) != -1) {
                if(byteAt < audioData.length){
                    System.arraycopy(audioBytes,0,audioData,byteAt,chunkSize);
                    byteAt+=chunkSize;
                }
            }
        } catch (IOException e) {e.printStackTrace();}
    }

    private AudioFormat getDecodeFormat(AudioInputStream in){
        AudioFormat baseFormat = in.getFormat();
        AudioFormat decodedFormat = new AudioFormat(AudioFormat.Encoding.PCM_SIGNED,
                baseFormat.getSampleRate(),
                16,
                baseFormat.getChannels(),
                baseFormat.getChannels() * 2,
                baseFormat.getSampleRate(),
                false);

        return decodedFormat;
    }

    private int getInputByteLength(File inputFile, AudioFormat decodedFormat){
        // length input
        AudioInputStream inLength= null;
        try {
            inLength = AudioSystem.getAudioInputStream(inputFile);
        } catch (UnsupportedAudioFileException e) {e.printStackTrace();} catch (IOException e) {e.printStackTrace();}

        AudioInputStream inputLengthStream = AudioSystem.getAudioInputStream(decodedFormat, inLength);

        // get the length of the stream
        int numBytesRead = 0;
        byte[] audioBytes = new byte[chunkSize];
        int totalRead = 0;
        try {
            while ((numBytesRead = inputLengthStream.read(audioBytes)) != -1)
                totalRead+=numBytesRead;
        } catch (IOException e) {e.printStackTrace();}

        try {
            inputLengthStream.close();
            inLength.close();
        } catch (IOException e) {e.printStackTrace();}

        // return rounded file size
        return  (totalRead/chunkSize)*chunkSize;
    }

    private void newFile(byte[] source, int start, int stop, AudioFormat targetFormat){
        // a big error has occured, change the thresholds
        if(filenum > 100)
            System.out.println("Too many files");
        else {
            System.out.println("New File" + filenum);
            byte[] temp = new byte[stop - start];
            System.arraycopy(source, ((start+moveBufferHead)/roundBuffer)*roundBuffer, temp, 0, ((stop - start+ moveBufferLength)/roundBuffer)*roundBuffer);

            try {
                filenum++;
                String replayStr = "r";
                String fname = replayStr;
                while(fname.equals(replayStr)) {
                    playSample(temp, targetFormat);
                    System.out.print("Enter name of file number " + filenum + " or "+replayStr+" to replay sample: ");
                    fname = scanner.next();
                    if (!fname.equals(replayStr))
                        writeWavFile(temp, fname);
                }
            } catch (IOException e) {e.printStackTrace();}
        }

    }

    private void playSample(byte[] sampleData, AudioFormat targetFormat){

        SourceDataLine line = null;
        try {
            line = getLine(targetFormat);
        } catch (LineUnavailableException e) {
            e.printStackTrace();
        }
        if (line != null)
        {
            // Start
            line.start();
            for(int i = chunkSize; i < sampleData.length; i+=chunkSize)
            {
                byte[] data = new byte[chunkSize];
                System.arraycopy(sampleData, i-chunkSize, data, 0, chunkSize);
                line.write(data, 0, chunkSize);
            }
            // Stop
            line.drain();
            line.stop();
            line.close();
        }
    }

    private SourceDataLine getLine(AudioFormat audioFormat) throws LineUnavailableException
    {
        SourceDataLine res = null;
        DataLine.Info info = new DataLine.Info(SourceDataLine.class, audioFormat);
        res = (SourceDataLine) AudioSystem.getLine(info);
        res.open(audioFormat);
        return res;
    }

    private void writeWavFile(byte[] resultArray,String name) throws IOException {

        createWaveFile(name, resultArray);

        if(createMP3)
            convertmp3Lame(name);
    }

    private void convertmp3Lame(String name){
        Process p;
        try {
            // call lame executable
            p = Runtime.getRuntime().exec("lame -v --nogap ./"+outputDir+"/"+name+".wav");
            try {
                p.waitFor();
                BufferedReader reader =
                        new BufferedReader(new InputStreamReader(p.getInputStream()));

                String line = "";
                while ((line = reader.readLine())!= null) {
                    System.out.println(line + "\n");
                }
                if(deleteWav)
                    Files.delete(Paths.get(".", outputDir, name+".wav").normalize());
            } catch (InterruptedException e) {e.printStackTrace();}
        } catch (IOException e) {e.printStackTrace();}
    }

    private void createWaveFile(String filename, byte[] data) throws IOException {
        // assumes 44,100 samples per second
        // use 16-bit audio, stereo, signed PCM, little Endian
        AudioFormat format = new AudioFormat(44100, 16, 2, true, false);

        // now save the file
        ByteArrayInputStream bais = new ByteArrayInputStream(data);
        AudioInputStream ais = new AudioInputStream(bais, format, data.length/2);
        AudioSystem.write(ais, AudioFileFormat.Type.WAVE, Paths.get(".", outputDir, filename+".wav").normalize().toFile());
    }
}
