/**
 * The main file that starts the tests when the document has loaded
 * @class Main
 */

// full jquery import here (not needed elsewhere)
import * as $ from 'jquery';

import { MainContainerFacade } from './gui_modules/main_container/f-main-container';
import { EventManager } from './utils/event-manager';

const main_area_style = '\
width: 100vw; \
height: 100vh; \
';

$(document).ready(function(){
  $('body').append(`<div id="main_area" style="${main_area_style}"></div>`);

  let main_container = new MainContainerFacade($('#main_area'));
  main_container.initializeGui();
  EventManager.checkEvents();
});
