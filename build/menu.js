"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/// <reference path="../GTA San Andreas - Definitive Edition/Gameface/Binaries/Win64/CLEO/.config/sa.d.ts" />

/**
 * @fileOverview  A library to create Menus for Cleo Redux
 * @author Yushae Raza
 * @version 0.4
 */

/** Menu Class.
 * @class
 * @constructor
 * @public
 */
var Menu = /*#__PURE__*/function () {
  /**
   * Creates a menu 
   * @param {string} name - the title of the menu
   * @param {Array<String>} options - A string array containing all the menu items/option
   * @param {float} width  - Menu width
   * @param {float} posx - The X position of the menu
   * @param {float} posy - The Y postion of the menu
   * @param {Array<int>} menucolor - A array of size 4 containing the RGBA value for the Menu Color
   */
  function Menu(name, options, width, posx, posy, menucolor) {
    _classCallCheck(this, Menu);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "width", void 0);

    _defineProperty(this, "height", void 0);

    _defineProperty(this, "max_items_in_view", void 0);

    _defineProperty(this, "posx", void 0);

    _defineProperty(this, "posy", void 0);

    _defineProperty(this, "menucolor", void 0);

    _defineProperty(this, "textcolor", void 0);

    _defineProperty(this, "selected_index", void 0);

    _defineProperty(this, "heightoffset", void 0);

    _defineProperty(this, "titlefont", void 0);

    _defineProperty(this, "highlight_color", void 0);

    _defineProperty(this, "title_font_scale", void 0);

    _defineProperty(this, "active", void 0);

    _defineProperty(this, "option_width", void 0);

    _defineProperty(this, "outline_height", void 0);

    _defineProperty(this, "outlinecolor", void 0);

    _defineProperty(this, "optionfont", void 0);

    _defineProperty(this, "optionfontscale", void 0);

    _defineProperty(this, "option_background_color", void 0);

    _defineProperty(this, "scroll", void 0);

    _defineProperty(this, "start_idx", void 0);

    _defineProperty(this, "scrollabe", void 0);

    _defineProperty(this, "option_posx", void 0);

    _defineProperty(this, "controls", void 0);

    this.name = name;
    this.options = options;
    this.width = width;
    this.max_items_in_view = 8;
    this.calculate_height();
    this.controls = {
      "up": 38,
      "down": 40
    };
    this.posx = posx;
    this.posy = posy;
    this.menucolor = menucolor;
    this.textcolor = [255, 255, 255, 255];
    this.selected_index = 0;
    this.heightoffset = 30;
    this.titlefont = 0;
    this.title_font_scale = 1;
    this.active = false;
    this.outlinecolor = [255, 255, 255, 255];
    this.highlight_color = [110, 239, 51, 1 * 255];
    this.outline_height = 2;
    this.scroll = 0;
    this.start_idx = 0;
    this.optionfont = 1;
    this.optionfontscale = 0.95 * this.title_font_scale;
    this.scrollabe = false;
    this.option_width = this.width * 0.95;
    this.option_posx = this.posx + Math.round(this.width / 2 - this.option_width / 2, 0);
    this.option_background_color = [menucolor[0], menucolor[1], menucolor[2], Math.round(1.05 * menucolor[3])];
    this.generate_scroll();
  }

  _createClass(Menu, [{
    key: "generate_scroll",
    value: function generate_scroll() {
      if (this.options.length > this.max_items_in_view) {
        this.scrollabe = true;
        this.scroll = this.max_items_in_view;
      } else {
        this.scroll = this.options.length;
        this.scrollabe = false;
      }
    }
  }, {
    key: "calculate_height",
    value: function calculate_height() {
      if (this.options.length <= this.max_items_in_view) {
        this.height = this.options.length * 30 + 30 + 10;
      } else {
        this.height = this.max_items_in_view * 30 + 30 + 10;
      }
    }
    /**
     * appends a new menu option/item to the menu
     * @param {string} option 
     */

  }, {
    key: "addOption",
    value: function addOption(option) {
      this.options.push(option);
      this.calculate_height();
      this.generate_scroll();
    } //setters

    /**
     * Sets the menu width
     * @param {float} width - A float specifing menu width  
     */

  }, {
    key: "setWidth",
    value: function setWidth(value) {
      this.width = value;
      this.option_width = this.width * 0.95;
    }
    /**
     * Sets the menu height
     * @param {float} height - A float specifing menu height 
     */

  }, {
    key: "setHeight",
    value: function setHeight(value) {
      this.heigh = value;
    }
    /**
     * sets the X position of the menu 
     * @param {float} posx - Xposition 
     */

  }, {
    key: "setPosX",
    value: function setPosX(value) {
      this.posx = value;
      this.option_posx = this.posx + Math.round(this.width / 2 - this.option_width / 2, 0);
    }
    /**
     * sets the y position of the menu 
     * @param {float} posy - Yposition 
     */

  }, {
    key: "setPosY",
    value: function setPosY(value) {
      this.posy = value;
    }
    /**
     * Sets the  menu option width 
     * @param {float} width - Option width
     */

  }, {
    key: "setOptionWidth",
    value: function setOptionWidth(width) {
      this.option_width = width;
      this.option_posx = this.posx + Math.round(this.width / 2 - this.option_width / 2, 0);
    }
    /**
     * sets whether the menu is active or disabled
     * @param {Boolean} active - Boolean specifing whether to activate the menu or not
     */

  }, {
    key: "setActive",
    value: function setActive(active) {
      this.active = active;
      this.selected_index = 0;
      this.start_idx = 0;
      this.generate_scroll();
    }
    /**
     * Sets the menu title
     * @param {String} name - menu title 
     */

  }, {
    key: "setName",
    value: function setName(value) {
      this.name = value;
    }
    /**
     * sets the menu background color
     * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
     */

  }, {
    key: "setMenuColor",
    value: function setMenuColor(value) {
      this.menucolor = value;
    }
    /**
     * sets the text color of the menu
     * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
     */

  }, {
    key: "setTextColor",
    value: function setTextColor(value) {
      this.textcolor = value;
    }
    /**
     * Sets the font for the menu title
     * @param {Int} font - Font id check out {@link https://library.sannybuilder.com/#/sa_unreal/enums/Font|Sanny-builder-library} for valid font ids   
     */

  }, {
    key: "setTitleFont",
    value: function setTitleFont(value) {
      this.titlefont = value;
    }
    /**
     * Sets the scale of the menu title font 
     * @param {float} scale-font scale
     */

  }, {
    key: "setTitleFontScale",
    value: function setTitleFontScale(value) {
      this.title_font_scale = value;
    }
  }, {
    key: "setHighlightColor",
    value: function setHighlightColor(value) {
      this.highlight_color = value;
    }
  }, {
    key: "setOutlineHeight",
    value: function setOutlineHeight(value) {
      this.outline_height = value;
    }
  }, {
    key: "setOutlineColor",
    value: function setOutlineColor(value) {
      this.outlinecolor = value;
    }
  }, {
    key: "setOptionFont",
    value: function setOptionFont(value) {
      this.optionfont = value;
    }
  }, {
    key: "setOptionFontScale",
    value: function setOptionFontScale(value) {
      this.optionfontscale = value;
    }
  }, {
    key: "setOptionBackgroundColor",
    value: function setOptionBackgroundColor(value) {
      this.option_background_color = value;
    }
  }, {
    key: "setSelectedIndex",
    value: function setSelectedIndex(value) {
      this.selected_index = value;
    } //getters

  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      return this.selected_index;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getMenuColor",
    value: function getMenuColor() {
      return this.menucolor;
    }
  }, {
    key: "getTextColor",
    value: function getTextColor() {
      return this.textcolor;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getTitleFont",
    value: function getTitleFont() {
      return this.titlefont;
    }
  }, {
    key: "getHighlightColor",
    value: function getHighlightColor() {
      return this.highlight_color;
    }
  }, {
    key: "getTitleFontScale",
    value: function getTitleFontScale() {
      return this.title_font_scale;
    }
  }, {
    key: "getOutlineHeight",
    value: function getOutlineHeight() {
      return this.outline_height;
    }
  }, {
    key: "getOutlineColor",
    value: function getOutlineColor() {
      return this.outlinecolor;
    }
  }, {
    key: "getOptionFont",
    value: function getOptionFont() {
      return this.optionfont;
    }
  }, {
    key: "getOptionFontScale",
    value: function getOptionFontScale() {
      return this.optionfontscale;
    }
  }, {
    key: "getOptionBackgroundColor",
    value: function getOptionBackgroundColor() {
      return this.option_background_color;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "getPosX",
    value: function getPosX() {
      return this.posx;
    }
  }, {
    key: "getPosY",
    value: function getPosY() {
      return this.posy;
    }
    /**
     * Clears all the options from the menu
     */

  }, {
    key: "clear",
    value: function clear() {
      this.options = [];
      this.selected_index = 0;
      this.start_idx = 0;
      this.generate_scroll();
    }
  }, {
    key: "update",
    value: function update() {
      Text.UseCommands(false);
      this.drawRect(this.posx, this.posy, this.width, this.height, this.menucolor);
      var offset = this.heightoffset; //this.createRectangle(-110, 0, 200, 30, 0, 0, 0, 105);

      this.drawText(this.name, this.posx + 100, this.posy + 5, this.titlefont, this.title_font_scale, true, this.textcolor, true);

      if (this.options.length >= 1) {
        for (var i = this.start_idx; i < this.scroll; i++) {
          var option = this.options[i];
          this.drawRect(this.option_posx, offset, this.option_width, this.outline_height, this.outlinecolor);

          if (i == this.selected_index) {
            this.drawRect(this.option_posx, offset + 2, this.option_width, 30, this.highlight_color);
          } else {
            this.drawRect(this.option_posx, offset + 2, this.option_width, 30, this.option_background_color);
          }

          this.drawText(option, this.option_posx + 10, offset + 5 + this.outline_height, this.optionfont, this.optionfontscale, true, this.textcolor, false);
          offset += 30;
        }
      }
    }
  }, {
    key: "check_scroll",
    value: function check_scroll() {
      if (this.options.length > 8) {
        return true;
      }

      return false;
    }
    /**
     * draws the menu to the screen must be called inside game loop
     */

  }, {
    key: "draw",
    value: function draw() {
      //this.createRectangle(260, 408, 150, 16, 0, 0, 0, 150)
      if (Pad.IsKeyPressed(this.controls.down)) {
        while (Pad.IsKeyPressed(this.controls.down)) {
          this.update();
          wait(0);
        }

        if (this.scrollabe) {
          if (this.scroll < this.options.length) {
            this.start_idx += 1;
            this.scroll += 1;
          }
        }

        this.selected_index += 1;

        if (this.selected_index >= this.options.length) {
          this.selected_index = 0;
          this.start_idx = 0;
          this.scroll = this.max_items_in_view;
        } //this.update();

      }

      if (Pad.IsKeyPressed(this.controls.up)) {
        while (Pad.IsKeyPressed(this.controls.up)) {
          this.update();
          wait(0);
        }

        if (this.scrollabe) {
          if (this.scroll > 0) {
            if (this.start_idx > 0) {
              this.start_idx -= 1;
              this.scroll -= 1;
            }
          }
        }

        this.selected_index -= 1;

        if (this.selected_index < 0) {
          this.selected_index = this.options.length - 1;
          this.start_idx = this.options.length - this.max_items_in_view;
          this.scroll = this.options.length;
        } //this.update();

      }

      this.update(); //this.createTextDraw("test menu", -10, 5, 0, 1.7, true, 255, 255, 255, 255, true)
    }
  }, {
    key: "clear_text",
    value: function clear_text() {}
  }, {
    key: "drawRect",
    value: function drawRect(x, y, w, h, color) {
      Hud.DrawRect(x + Math.floor(w / 2), y + Math.floor(h / 2), w, h, color[0], color[1], color[2], color[3]);
    }
  }, {
    key: "drawText",
    value: function drawText(text, x, y, font, scale, shadow, color, center) {
      Text.SetFont(font);
      Text.SetScale(3000, scale);
      Text.SetEdge(shadow ? 5 : 0, 0, 0, 0, 255);
      Text.SetColor(color[0], color[1], color[2], color[3]);
      Text.SetWrapX(3000);

      if (center) {
        Text.SetCenter(center);
      } //FxtStore.insert("MH" + TextID, text);


      Text.DisplayWithNumber(x, y, text, 3);
    }
  }]);

  return Menu;
}(); //testing code 


