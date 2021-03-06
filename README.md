# NOTICE:
- I consider this project dead. The implementation got too out of hand and my strict conventions ended up hurting progress more that easing it. The new repo, keyboard-music, is trying to accomplish the same thing as this repo, but using a more functional programming approach.

### Overview
- Music editor with a keyboard
- Create songs and play back sections of the song with the keyboard
- built with typescript

### Getting started
- open terminal, navigate to the root directory, and type the following commands:
	- [sudo] npm install -g tslint typescript yuidocjs
	- python -m SimpleHTTPServer 8080
- go to a web browser and type [localhost:8080](http://localhost:8080/)

### Conventions not in lint
- [something] = optional
- soft tabs 2 spaces
- explicity define public and void
- set all variables to undefined by default
- naming styles:
	- files: dashed-separated-names.ts
	- classes: PascalCase
	- functions/methods: camelCase
	- properties/variables: underscore_separated

### Linting
- [TSLint](http://palantir.github.io/tslint/)
- [Rules](http://palantir.github.io/tslint/rules/)
- Getting started
	- open a new terminal window and type one of the following commands
		- apm install linter-tslint
			- tslint now installed for atom
		- ./lint.sh

### Documentation
- [YUIDoc](http://yui.github.io/yuidoc/)
- Getting started
	- open a new terminal window and type the following command
		- yuidoc --server ./lib/main
	- got to a web brower and type [localhost:3000](http://localhost:3000/)

### Security
- legitimate security concerns about user generated content
- xss
- uploaded zip files contain malicious content?

### Creation Tool
- can either recommend youtube videos with project files or cut them up with tool
- upload long segments
- cut them up, show the waveform (fine tuning), ask to click on launchpad button, client side html and webaudio
- transfer to database
	- database: zip files and transfer zip to database, store in secure way
		- organized like sounds/chain[i]/[section][number].mp3

### Create a new Module
- type node new-module.js when creating a new module

### Creating a new event
- type node new-event.js

### GUI
- Use a canvas/html hybrid application
	- html for navs and menus
	- canvas for waveform rendering
	- no stylesheet, all locally styled, should be fine if oop is implemented correctly

### Autosave songs in case of crash and caputre meta+s key for save

### Tricky this
- [This and intance methods](http://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html)
- use this when declaring functions using `this` that will be called from an event:
	- <function name> = () => {...}

### API methodology
- define default returns that will always be able to be handled by the rest of the application (tests)
- only expose formated data from APIs, have an agreed upon return so that if the api changes, only the method of parsing has to change

### Audio Effects
- effects need to be treated as plugins
- recieve audio buffer and return a new audio buffer with effect modifications
- needs to have a history, undo command needed and needs to be figured out

### Backend
- authenticated through google
- use [Passport](http://passportjs.org/docs/google)
- Nodejs backend
- build frontend app first with simulated backend api communication (i.e. have mock backend api response hard coded into js)

### Data storage
- sounds stored on dropbox
- combine java and js tool to allow users to quickly cut up sound files and integrate into dropbox
- java tool, make in browser tool using js and gui to click on launchpad part (i.e. sound file is for c13, have user click instead of renaming)
- future feature: auto remap from launchpad to keyboard
- file loader, base url to shared dropbox folder, import all files
- song config file (structure to be determined), store in db

### Module system
- Facade container
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
	- optional Draw layer
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
- f_{some_object}.ts
	- init (creator_object)
		- call initializers for objects that this is the container for in the heirarchy
		- initialize Logic layer object
		- initialize Draw layer object if applicable
		- Register all events and
- l_{some_object}.ts
- [d_{some_object}.ts]

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
