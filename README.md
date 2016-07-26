### Overview
- Music editor with a keyboard
- Create songs and play back sections of the song with the keyboard
   
### Documentation
- http://yui.github.io/yuidoc/

### Using Typescript

### Autosave songs in case of crash and caputre meta+s key for save
 
### Module List
- Sound module
    - 1 single mp3/wav/...
    - Depends on howler.js
    - play, stop
- Sound container module
    - contains sound[]
    - looped, quaternize, hold to play
    - pitch change (multiple sounds)
    - reset pitch change?
- Sound manager module
    - contains sound container
    - keycode?, sound container actions
    - grouped sound containers, only play 1 at a time
- Beat manager module
    - keeps time/beat
    - can change beat
    - only 1 in application
- Note module
    - key/action (beat change, soundpack change)
    - length, start time/beat
    - emits events
- Loop module
    - contains ordered note[]
    - length, start time/beat, loop amount
    - activates notes
- Note manager module OR loop manager module
    - contains ordered note[] of all notes in all loops OR loop[]
    - balanced bst? need to find way to efficiently squash for constant time lookup
    - OR handles organization of loop[]
- Keyboard display module
    - draws keyboard
    - key activated/not
    - set key color
- Layout module
    - turns keycode int array index
    - multiple browser support
- Color Effect module
    - color pattern to be executed over a certain number of beats
    - emits events to control module
- Color Effects manager module
    - contains color effect[]
    - start color effect
    - recieve events and pass on to control module
- Midi instrument module
    - contains color effects manager
    - contains keyboard display and handles no color effects on keyboard
    - contains sound manager[]
    - contains layout
    - activates key and color effect
    - assigned soundpack?
- Beat instrument module
    - contains keyboard display and takes care of beat instrument display
    - handles row stop events
    - contains sound manager[]
    - contains layout
    - assigned soundpack?
- Track module
    - contains loop[]
    - only 1 loop at any point in time
    - different loops?
- Soundpack module
    - Contains track[]
    - contains loop/note manager
    - new notes/loops are propegated up controller to managers to compile sequential note ordering
    - contains beat/midi instrument
- Key Event module
    - only 1 in application
    - emit keyboard events
    - emit special/misc key events
- Mouse Event module
    - only 1 in application
    - emit mouse events
- File Browser module
    - load all mp3 files for user
    - folder structure?
    - drag files to sound container


- Editor Container
    - contains soundpack[]
    - contains key event
    - contains mouse event
    - controls playback/record
