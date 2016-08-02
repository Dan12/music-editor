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
import { ${all_caps}Draw } from './d-${file_name}';
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

    // initialize this facade's enclosed classes
    this.initializeClasses(new ${all_caps}Draw(this.container), new ${all_caps}Logic());
  }

  /**
   * the way to access this class's draw_class
   * @method drawClass
   * @return ${all_caps}Draw
   */
  protected drawClass(): ${all_caps}Draw { return (this.draw_class as ${all_caps}Draw); }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return ${all_caps}Logic
   */
  protected logicClass(): ${all_caps}Logic { return (this.logic_class as ${all_caps}Logic); }
}
`;

  var drawTemplate =
`import { AbstractDraw } from '../../abstracts/draw';

/**
 * --- optional, some style ---
 * @property ${underscores}_style
 * @for ${all_caps}Draw
 */
const ${underscores}_style = '\
\
';

/**
 * This class draws the elements for ${module_name}
 * --- some description ---
 * @class ${all_caps}Draw
 * @constructor
 * @param container {string} the container id for this class
 */
export class ${all_caps}Draw extends AbstractDraw {

  constructor(container: JQuery) {
    super(container);
  }

  public initialize(): void {
    this.setStyle(${underscores}_style);
    // this.container.append('--- some element ---');
  }
}

`;

  var logicTemplate =
`import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- some description ---
 * @class ${all_caps}Logic
 * @constructor
 */
export class ${all_caps}Logic extends AbstractLogic {

  constructor() {
    super();
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

  fs.writeFileSync(dir+'/d-'+file_name+'.ts', drawTemplate);

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
