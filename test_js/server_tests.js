// var ndarrayWav = require('ndarray-wav');
// var Speaker = require('speaker');
// var fs = require('fs');
//
// ndarrayWav.open('kickG.wav', function (err, chunkMap, chunkArr) {
//     // var format = chunks.fmt;
//     // var ndSamples = chunks.data; // the wave data as an ndarray
//     // assert(format.channels == ndSamples.shape[0]);
//     // var numSamples = arr.shape[1];
//     console.log(chunkArr)
//
//     var format = chunkArr[0].data;
//     console.log(format)
//     var samples = chunkArr[1].data.shape[1];
//     console.log(samples)
//     var stride = chunkArr[1].data.stride;
//     console.log(stride)
//
//     var data = chunkArr[1].data;
//
//
//     var tempArr = [12,42,1,4,2,1,5,6,1,4,2,1,4]
//     var buff = new Buffer(tempArr);
//     var stream = fs.createReadStream(buff)
//
//     stream.pipe(new Speaker({
//       channels: 2,          // 2 channels
//       bitDepth: 16,         // 16-bit samples
//       sampleRate: 44100     // 44,100 Hz sample rate
//     }));
//
//     ndarrayWav.write('output.wav', data, function (error) {
//       if(error)
//         throw error;
//       console.log('success');
//     });
// });

var fs = require('fs');
var wav = require('wav');
var Speaker = require('speaker');

var file = fs.createReadStream('kickG.wav');
var reader = new wav.Reader();

// the "format" event gets emitted at the end of the WAVE header
reader.on('format', function (format) {

  // the WAVE header is stripped from the output of the reader
  console.log(format)
  reader.pipe(new Speaker(format));
});

reader.once('readable', function () {
  console.log('WaveHeader Size:\t%d', 12);
  console.log('ChunkHeader Size:\t%d', 8);
  console.log('FormatChunk Size:\t%d', reader.subchunk1Size);
  console.log('RIFF ID:\t%s', reader.riffId);
  console.log('Total Size:\t%d', reader.chunkSize);
  console.log('Wave ID:\t%s', reader.waveId);
  console.log('Chunk ID:\t%s', reader.chunkId);
  console.log('Chunk Size:\t%d', reader.subchunk1Size);
  console.log('Compression format is of type: %d', reader.audioFormat);
  console.log('Channels:\t%d', reader.channels);
  console.log('Sample Rate:\t%d', reader.sampleRate);
  console.log('Bytes / Sec:\t%d', reader.byteRate);
  console.log('wBlockAlign:\t%d', reader.blockAlign);
  console.log('Bits Per Sample Point:\t%d', reader.bitDepth);
  // TODO: this should end up being "44" or whatever the total length of the WAV
  //       header is. maybe emit "format" at this point rather than earlier???
  console.log('wavDataPtr: %d', 0);
  console.log('wavDataSize: %d', reader.subchunk2Size);
  console.log();

  console.log(reader);
})

// pipe the WAVE file to the Reader instance
file.pipe(reader);
