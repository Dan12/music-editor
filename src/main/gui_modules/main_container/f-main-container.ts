/// <reference path="d-main-container.ts" />
/// <reference path="./l-main-container.ts" />

import { AbstractFacade } from '../../abstracts/facade'

namespace MainContainer {

  const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
  // create class
  export class Facade extends AbstractFacade {

    constructor() {
      super();

      this.draw_class = new Draw();
    }

  }

}
