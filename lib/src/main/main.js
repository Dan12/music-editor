/**
 * The main file that starts the tests when the document has loaded
 * @class Main
 */
define(["require", "exports", 'jquery', './gui_modules/main_container/f-main-container'], function (require, exports, $, f_main_container_1) {
    "use strict";
    var main_area_style = '\
width: 100%; \
height: 100%; \
';
    $(document).ready(function () {
        $('body').append("<div id=\"main_area\" style=\"" + main_area_style + "\"></div>");
        var main_container = new f_main_container_1.MainContainerFacade();
        main_container.initialize_gui();
    });
});
