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

  var facadeTemplate =
`import { AbstractFacade } from '../../abstracts/facade';
import { ${all_caps}Logic } from './l-${file_name}';

/**
 * The facade for ${module_name}.
 * --- Some description here ---
 * @class ${all_caps}Facade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class ${all_caps}Facade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('${underscores}', parent);

    let temp_logic = new ${all_caps}Logic(this.container);

    // initialize this facade's enclosed classes
    this.initializeLogic(new ${all_caps}Logic(this.container));
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return ${all_caps}Logic
   * @protected
   */
  protected logicClass(): ${all_caps}Logic { return (this._logic_class as ${all_caps}Logic); }
}
`;

  var logicTemplate =
`import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- optional, some style ---
 * @property ${underscores}_style
 * @for ${all_caps}Logic
 */
const ${underscores}_style = {}

/**
 * --- some description ---
 * @class ${all_caps}Logic
 * @constructor
 */
export class ${all_caps}Logic extends AbstractLogic {

  constructor(container: JQuery) {
    super(container, ${underscores}_style);
  }
}

`;

  var dir = 'src/main/gui_modules/'+underscores;
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  } else {
    console.log('dir exists, exiting');
    process.exit(0);
  }

  fs.writeFileSync(dir+'/f-'+file_name+'.ts', facadeTemplate);

  fs.writeFileSync(dir+'/l-'+file_name+'.ts', logicTemplate);

  // console.log('template:  '+facadeTemplate);

  console.log('done');

  process.exit(0);
}

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Enter the module name with spaces between words: ');
rl.prompt();
rl.on('line', function(line) {
    newModule(line);
}).on('close',function(){
    process.exit(0);
});
