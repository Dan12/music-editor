var readline = require('readline');
var fs = require('fs');

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


function newModule(module_name) {

  var underscores = module_name.replaceAll(' ', '_');

  var all_caps = toTitleCase(module_name).replaceAll(' ', '');

  var file_name = module_name.replaceAll(' ', '-');

  var template =
`import { AbstractEvent } from '../abstracts/event';

/**
 * describes the payload for this event
 * @element NoObject
 * @interface NoObject
 */
// define own payload object here
export interface NoObject {}

export class ${all_caps}Event extends AbstractEvent {

  /**
   * Fired when the toggle file browser button is clicked
   * @class ${all_caps}Event
   * @extends AbstractEvent
   * @constructor
   * @param [callback] {function} The optional callback function which takes an object
   */
  constructor(callback?: (obj: NoObject) => void) {
    // the name of this event is 'testing_send'
    super(callback, 'toggle_file_browser');
  };

  /**
   * Sets the payload for this event, returns this
   * @method setPayload
   * @chainable
   * @returns {${all_caps}Event}
   */
  public setPayload(obj: any): ${all_caps}Event {
    this.obj = obj;
    return this;
  }
}

`;

  var dir = 'src/main/events/'+underscores;
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  } else {
    console.log('dir exists, exiting');
    process.exit(0);
  }

  fs.writeFileSync(dir+'/f-'+file_name+'.ts', template);

  // console.log('template:  '+facadeTemplate);

  console.log('done');

  process.exit(0);
}

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Enter the event name with spaces between words: ');
rl.prompt();
rl.on('line', function(line) {
    newModule(line);
}).on('close',function(){
    process.exit(0);
});
