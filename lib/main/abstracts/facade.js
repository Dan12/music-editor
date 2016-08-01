define(["require", "exports"], function (require, exports) {
    "use strict";
    var AbstractFacade = (function () {
        /**
         * The abstract facade class
         * @class AbstractFacade
         * @constructor
         * @param container {string} the html container id for this gui element
         * @param parent {JQuery} the parent html element for this element
         * @param [html_type='div'] {string} the optional html tag to give this gui element
         */
        function AbstractFacade(container, parent, html_type) {
            /**
             * this facade's draw class
             * @property draw_class
             * @type AbstractDraw
             * @default undefined
             */
            this.draw_class = undefined;
            /**
             * this facade's logic class
             * @property logic_class
             * @type AbstractLogic
             * @default undefined
             */
            this.logic_class = undefined;
            /**
             * this facade's gui children
             * @property gui_children
             * @type AbstractFacade[]
             * @default []
             */
            this.gui_children = [];
            /**
             * this facade's html container id
             * @property container
             * @type string
             * @default undefined
             */
            this.container = undefined;
            /**
             * this facade's parent html element
             * @property parent
             * @type JQuery
             * @default undefined
             */
            this.parent = undefined;
            this.container = container;
            this.parent = parent;
            // appends the container for this gui element to the specified parent
            var type = (html_type === undefined ? 'div' : html_type);
            parent.append("<" + type + " id=\"" + this.container + "\"></" + type + ">");
        }
        /**
         * initialize this element's children and then initialize this element's gui
         * @method initializeGui
         */
        AbstractFacade.prototype.initializeGui = function () {
            // initialize all the children first because then you can prepend and append those elements
            for (var i = 0; i < this.gui_children.length; i++) {
                this.gui_children[i].initializeGui();
            }
            this.draw_class.initialize();
        };
        /**
         * redrawing of custom canvas elements sent down the heirarchy
         * @method redraw
         */
        AbstractFacade.prototype.redraw = function () {
            this.draw_class.redraw();
        };
        /**
         * add a child to this container
         * @method addGuiChild
         * @param facade {AbstractFacade} the gui element to add as a child of this element
         */
        AbstractFacade.prototype.addGuiChild = function (facade) {
            this.gui_children.push(facade);
        };
        return AbstractFacade;
    }());
    exports.AbstractFacade = AbstractFacade;
});
