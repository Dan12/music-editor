import { AbstractDraw } from '../../abstracts/draw';

const main_container_style = '\
width: 99.8%; \
height: 99.5%; \
border: 1px solid black; \
';

export class MainContainerDraw extends AbstractDraw {

  constructor() {
    super();
  }

  public initialize(): void {
    $('#main_area').append(`<div id="main_container" style="${main_container_style}"></div>`);
    $('#main_container').append(`<div>Starting Up</div>`);
    $('#main_container').append(`<footer id="main_footer">Made by Daniel Weber</footer>`);
  }

  public redraw(): void {
    // draw me
  }
}
