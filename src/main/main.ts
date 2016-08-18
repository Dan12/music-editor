/**
 * The main file that starts the tests when the document has loaded
 * @class Main
 */

// full jquery import here (not needed elsewhere)
import * as $ from 'jquery';

import './utils/globals';

import { MainContainerFacade } from './gui_modules/main_container/f-main-container';
import { EventManager } from './utils/event-manager';
import { registerEvents } from './events/register-events';
import { Color } from './utils/color';
import { InputEventManager } from './utils/input-event-manager';

const main_area_style = {
'width': '100vw',
'height': '100vh',
};

function setStyles(): void {
  $('body').css({'background-color': Color.primary(), 'color': Color.secondary()});

  $('button').css('background-color', Color.gray2());
  $('button').hover(function(){$(this).css('background-color', Color.ternary()); });
  $('button').mouseleave(function(){$(this).css('background-color', Color.gray2()); });
}

$(document).ready(function(){
  let main_area = $(`<div id="main_area"}"></div>`);
  $('body').append(main_area);
  main_area.css(main_area_style);

  registerEvents();

  let main_container = new MainContainerFacade($('#main_area'));
  EventManager.checkEvents();

  InputEventManager.initialize(main_container);

  setStyles();
});
