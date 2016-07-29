import { AbstractDraw } from '../../abstracts/draw'

namespace MainContainer {
  export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

  // create class
  export class Draw extends AbstractDraw{

    constructor() {
      super();
    }

    public draw(): void {
      // draw me
    }
  }
}
