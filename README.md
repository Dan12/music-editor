### Overview
- Music editor with a keyboard
- Create songs and play back sections of the song with the keyboard

### Documentation
- [YUIDoc](http://yui.github.io/yuidoc/)

### Using Typescript

### Autosave songs in case of crash and caputre meta+s key for save

### Tricky this
- [This and intance methods](http://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html)

### API methodology
- define default returns that will always be able to be handled by the rest of the application (tests)
- only expose formated data from APIs, have an agreed upon return so that if the api changes, only the method of parsing has to change

### Audio Effects
- effects need to be treated as plugins
- recieve audio buffer and return a new audio buffer with effect modifications
- needs to have a history, undo command needed and needs to be figured out

### Module system
- Interact container
	- Links to objects above and below it in chain (like doubly(maybe, might only need singly) linked list with multiple possible branches)
	- Heirarchical event flow
		- recieves events from objects higher up the chain
		- does a bit of logic and may or may not pass event down the chain
		- mouse events and key events
		- all draw calls, have visibility logic take place here (access variables from logic layer)
	- Direct event endpoints
		- may do a bit of logic or directly call method in Logic layer
		- like 'play button pressed' event
	- Logic layer
		- All variables
		- Emits events
		- May depend upon utility modules if logic must be split over multiple files
	- Draw layer
		- all draw code
		- accesses logic layer for variables relating to draw code
- Standalone Container
	- Direct event endpoints
	- Logic layer
- Event manager
	- all events get registered/created through this object
	- all events must be registered prior to first render
	- throws error if event is created and that event name already exists
	- throws error if event is registered that is not created
	- throws error if event is fired during application runtime that is not registered
	- throw warning if event is created but never registered

### Files
- [some_object]_interact.ts
	- init (creator_object)
		- call initializers for objects that this is the container for in the heirarchy
		- initialize Draw layer object
		- initialize Logic layer object
		- Register all events and
- [some_object]_draw.ts
- [some_object]_logic.ts

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
- Chat system
    - users can chat with each other
