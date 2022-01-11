"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

var _name = /*#__PURE__*/_classPrivateFieldLooseKey("name");

var _options = /*#__PURE__*/_classPrivateFieldLooseKey("options");

var _width = /*#__PURE__*/_classPrivateFieldLooseKey("width");

var _height = /*#__PURE__*/_classPrivateFieldLooseKey("height");

var _max_items_in_view = /*#__PURE__*/_classPrivateFieldLooseKey("max_items_in_view");

var _posx = /*#__PURE__*/_classPrivateFieldLooseKey("posx");

var _posy = /*#__PURE__*/_classPrivateFieldLooseKey("posy");

var _menucolor = /*#__PURE__*/_classPrivateFieldLooseKey("menucolor");

var _textcolor = /*#__PURE__*/_classPrivateFieldLooseKey("textcolor");

var _selected_index = /*#__PURE__*/_classPrivateFieldLooseKey("selected_index");

var _heightoffset = /*#__PURE__*/_classPrivateFieldLooseKey("heightoffset");

var _titlefont = /*#__PURE__*/_classPrivateFieldLooseKey("titlefont");

var _highlight_color = /*#__PURE__*/_classPrivateFieldLooseKey("highlight_color");

var _title_font_scale = /*#__PURE__*/_classPrivateFieldLooseKey("title_font_scale");

var _active = /*#__PURE__*/_classPrivateFieldLooseKey("active");

var _option_width = /*#__PURE__*/_classPrivateFieldLooseKey("option_width");

var _outline_height = /*#__PURE__*/_classPrivateFieldLooseKey("outline_height");

var _outlinecolor = /*#__PURE__*/_classPrivateFieldLooseKey("outlinecolor");

var _optionfont = /*#__PURE__*/_classPrivateFieldLooseKey("optionfont");

var _optionfontscale = /*#__PURE__*/_classPrivateFieldLooseKey("optionfontscale");

var _option_background_color = /*#__PURE__*/_classPrivateFieldLooseKey("option_background_color");

var _scroll = /*#__PURE__*/_classPrivateFieldLooseKey("scroll");

var _start_idx = /*#__PURE__*/_classPrivateFieldLooseKey("start_idx");

var _scrollabe = /*#__PURE__*/_classPrivateFieldLooseKey("scrollabe");

var _option_posx = /*#__PURE__*/_classPrivateFieldLooseKey("option_posx");

var _controls = /*#__PURE__*/_classPrivateFieldLooseKey("controls");

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

    Object.defineProperty(this, _name, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _options, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _width, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _height, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _max_items_in_view, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _posx, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _posy, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _menucolor, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _textcolor, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _selected_index, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _heightoffset, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _titlefont, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _highlight_color, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _title_font_scale, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _active, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _option_width, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _outline_height, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _outlinecolor, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _optionfont, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _optionfontscale, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _option_background_color, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _scroll, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _start_idx, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _scrollabe, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _option_posx, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _controls, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _name)[_name] = name;
    _classPrivateFieldLooseBase(this, _options)[_options] = options;
    _classPrivateFieldLooseBase(this, _width)[_width] = width;
    _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view] = 8;
    this.calculate_height();
    _classPrivateFieldLooseBase(this, _controls)[_controls] = {
      "up": 38,
      "down": 40
    };
    _classPrivateFieldLooseBase(this, _posx)[_posx] = posx;
    _classPrivateFieldLooseBase(this, _posy)[_posy] = posy;
    _classPrivateFieldLooseBase(this, _menucolor)[_menucolor] = menucolor;
    _classPrivateFieldLooseBase(this, _textcolor)[_textcolor] = [255, 255, 255, 255];
    _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] = 0;
    _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset] = 30;
    _classPrivateFieldLooseBase(this, _titlefont)[_titlefont] = 0;
    _classPrivateFieldLooseBase(this, _title_font_scale)[_title_font_scale] = 1;
    _classPrivateFieldLooseBase(this, _active)[_active] = false;
    _classPrivateFieldLooseBase(this, _outlinecolor)[_outlinecolor] = [255, 255, 255, 255];
    _classPrivateFieldLooseBase(this, _highlight_color)[_highlight_color] = [110, 239, 51, 1 * 255];
    _classPrivateFieldLooseBase(this, _outline_height)[_outline_height] = 2;
    _classPrivateFieldLooseBase(this, _scroll)[_scroll] = 0;
    _classPrivateFieldLooseBase(this, _start_idx)[_start_idx] = 0;
    _classPrivateFieldLooseBase(this, _optionfont)[_optionfont] = 1;
    _classPrivateFieldLooseBase(this, _optionfontscale)[_optionfontscale] = 0.95 * _classPrivateFieldLooseBase(this, _title_font_scale)[_title_font_scale];
    _classPrivateFieldLooseBase(this, _scrollabe)[_scrollabe] = false;
    _classPrivateFieldLooseBase(this, _option_width)[_option_width] = _classPrivateFieldLooseBase(this, _width)[_width] * 0.95;
    _classPrivateFieldLooseBase(this, _option_posx)[_option_posx] = _classPrivateFieldLooseBase(this, _posx)[_posx] + Math.round(_classPrivateFieldLooseBase(this, _width)[_width] / 2 - _classPrivateFieldLooseBase(this, _option_width)[_option_width] / 2, 0);
    _classPrivateFieldLooseBase(this, _option_background_color)[_option_background_color] = [menucolor[0], menucolor[1], menucolor[2], Math.round(1.05 * menucolor[3])];
    this.generate_scroll();
  }

  _createClass(Menu, [{
    key: "generate_scroll",
    value: function generate_scroll() {
      if (_classPrivateFieldLooseBase(this, _options)[_options].length > _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view]) {
        _classPrivateFieldLooseBase(this, _scrollabe)[_scrollabe] = true;
        _classPrivateFieldLooseBase(this, _scroll)[_scroll] = _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view];
      } else {
        _classPrivateFieldLooseBase(this, _scroll)[_scroll] = _classPrivateFieldLooseBase(this, _options)[_options].length;
        _classPrivateFieldLooseBase(this, _scrollabe)[_scrollabe] = false;
      }
    }
  }, {
    key: "calculate_height",
    value: function calculate_height() {
      if (_classPrivateFieldLooseBase(this, _options)[_options].length <= _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view]) {
        _classPrivateFieldLooseBase(this, _height)[_height] = _classPrivateFieldLooseBase(this, _options)[_options].length * 30 + 30 + 10;
      } else {
        _classPrivateFieldLooseBase(this, _height)[_height] = _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view] * 30 + 30 + 10;
      }
    }
    /**
     * appends a new menu option/item to the menu
     * @param {string} option 
     */

  }, {
    key: "addOption",
    value: function addOption(option) {
      _classPrivateFieldLooseBase(this, _options)[_options].push(option);

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
      _classPrivateFieldLooseBase(this, _width)[_width] = value;
      _classPrivateFieldLooseBase(this, _option_width)[_option_width] = _classPrivateFieldLooseBase(this, _width)[_width] * 0.95;
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
      _classPrivateFieldLooseBase(this, _posx)[_posx] = value;
      _classPrivateFieldLooseBase(this, _option_posx)[_option_posx] = _classPrivateFieldLooseBase(this, _posx)[_posx] + Math.round(_classPrivateFieldLooseBase(this, _width)[_width] / 2 - _classPrivateFieldLooseBase(this, _option_width)[_option_width] / 2, 0);
    }
    /**
     * sets the y position of the menu 
     * @param {float} posy - Yposition 
     */

  }, {
    key: "setPosY",
    value: function setPosY(value) {
      _classPrivateFieldLooseBase(this, _posy)[_posy] = value;
    }
    /**
     * Sets the  menu option width 
     * @param {float} width - Option width
     */

  }, {
    key: "setOptionWidth",
    value: function setOptionWidth(width) {
      _classPrivateFieldLooseBase(this, _option_width)[_option_width] = width;
      _classPrivateFieldLooseBase(this, _option_posx)[_option_posx] = _classPrivateFieldLooseBase(this, _posx)[_posx] + Math.round(_classPrivateFieldLooseBase(this, _width)[_width] / 2 - _classPrivateFieldLooseBase(this, _option_width)[_option_width] / 2, 0);
    }
    /**
     * sets whether the menu is active or disabled
     * @param {Boolean} active - Boolean specifing whether to activate the menu or not
     */

  }, {
    key: "setActive",
    value: function setActive(active) {
      _classPrivateFieldLooseBase(this, _active)[_active] = active;
      _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] = 0;
      _classPrivateFieldLooseBase(this, _start_idx)[_start_idx] = 0;
      this.generate_scroll();
    }
    /**
     * Sets the menu title
     * @param {String} name - menu title 
     */

  }, {
    key: "setName",
    value: function setName(value) {
      _classPrivateFieldLooseBase(this, _name)[_name] = value;
    }
    /**
     * sets the menu background color
     * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
     */

  }, {
    key: "setMenuColor",
    value: function setMenuColor(value) {
      _classPrivateFieldLooseBase(this, _menucolor)[_menucolor] = value;
    }
    /**
     * sets the text color of the menu
     * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
     */

  }, {
    key: "setTextColor",
    value: function setTextColor(value) {
      _classPrivateFieldLooseBase(this, _textcolor)[_textcolor] = value;
    }
    /**
     * Sets the font for the menu title
     * @param {Int} font - Font id check out {@link https://library.sannybuilder.com/#/sa_unreal/enums/Font|Sanny-builder-library} for valid font ids   
     */

  }, {
    key: "setTitleFont",
    value: function setTitleFont(value) {
      _classPrivateFieldLooseBase(this, _titlefont)[_titlefont] = value;
    }
    /**
     * Sets the scale of the menu title font 
     * @param {float} scale-font scale
     */

  }, {
    key: "setTitleFontScale",
    value: function setTitleFontScale(value) {
      _classPrivateFieldLooseBase(this, _title_font_scale)[_title_font_scale] = value;
    }
  }, {
    key: "setHighlightColor",
    value: function setHighlightColor(value) {
      _classPrivateFieldLooseBase(this, _highlight_color)[_highlight_color] = value;
    }
  }, {
    key: "setOutlineHeight",
    value: function setOutlineHeight(value) {
      _classPrivateFieldLooseBase(this, _outline_height)[_outline_height] = value;
    }
  }, {
    key: "setOutlineColor",
    value: function setOutlineColor(value) {
      _classPrivateFieldLooseBase(this, _outlinecolor)[_outlinecolor] = value;
    }
  }, {
    key: "setOptionFont",
    value: function setOptionFont(value) {
      _classPrivateFieldLooseBase(this, _optionfont)[_optionfont] = value;
    }
  }, {
    key: "setOptionFontScale",
    value: function setOptionFontScale(value) {
      _classPrivateFieldLooseBase(this, _optionfontscale)[_optionfontscale] = value;
    }
  }, {
    key: "setOptionBackgroundColor",
    value: function setOptionBackgroundColor(value) {
      _classPrivateFieldLooseBase(this, _option_background_color)[_option_background_color] = value;
    }
  }, {
    key: "setSelectedIndex",
    value: function setSelectedIndex(value) {
      _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] = value;
    } //getters

  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      return _classPrivateFieldLooseBase(this, _selected_index)[_selected_index];
    }
  }, {
    key: "getName",
    value: function getName() {
      return _classPrivateFieldLooseBase(this, _name)[_name];
    }
  }, {
    key: "getMenuColor",
    value: function getMenuColor() {
      return _classPrivateFieldLooseBase(this, _menucolor)[_menucolor];
    }
  }, {
    key: "getTextColor",
    value: function getTextColor() {
      return _classPrivateFieldLooseBase(this, _textcolor)[_textcolor];
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return _classPrivateFieldLooseBase(this, _active)[_active];
    }
  }, {
    key: "getTitleFont",
    value: function getTitleFont() {
      return _classPrivateFieldLooseBase(this, _titlefont)[_titlefont];
    }
  }, {
    key: "getHighlightColor",
    value: function getHighlightColor() {
      return _classPrivateFieldLooseBase(this, _highlight_color)[_highlight_color];
    }
  }, {
    key: "getTitleFontScale",
    value: function getTitleFontScale() {
      return _classPrivateFieldLooseBase(this, _title_font_scale)[_title_font_scale];
    }
  }, {
    key: "getOutlineHeight",
    value: function getOutlineHeight() {
      return _classPrivateFieldLooseBase(this, _outline_height)[_outline_height];
    }
  }, {
    key: "getOutlineColor",
    value: function getOutlineColor() {
      return _classPrivateFieldLooseBase(this, _outlinecolor)[_outlinecolor];
    }
  }, {
    key: "getOptionFont",
    value: function getOptionFont() {
      return _classPrivateFieldLooseBase(this, _optionfont)[_optionfont];
    }
  }, {
    key: "getOptionFontScale",
    value: function getOptionFontScale() {
      return _classPrivateFieldLooseBase(this, _optionfontscale)[_optionfontscale];
    }
  }, {
    key: "getOptionBackgroundColor",
    value: function getOptionBackgroundColor() {
      return _classPrivateFieldLooseBase(this, _option_background_color)[_option_background_color];
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return _classPrivateFieldLooseBase(this, _width)[_width];
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return _classPrivateFieldLooseBase(this, _height)[_height];
    }
  }, {
    key: "getPosX",
    value: function getPosX() {
      return _classPrivateFieldLooseBase(this, _posx)[_posx];
    }
  }, {
    key: "getPosY",
    value: function getPosY() {
      return _classPrivateFieldLooseBase(this, _posy)[_posy];
    }
    /**
     * Clears all the options from the menu
     */

  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldLooseBase(this, _options)[_options] = [];
      _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] = 0;
      _classPrivateFieldLooseBase(this, _start_idx)[_start_idx] = 0;
      this.generate_scroll();
    }
  }, {
    key: "update",
    value: function update() {
      Text.UseCommands(false);
      this.drawRect(_classPrivateFieldLooseBase(this, _posx)[_posx], _classPrivateFieldLooseBase(this, _posy)[_posy], _classPrivateFieldLooseBase(this, _width)[_width], _classPrivateFieldLooseBase(this, _height)[_height], _classPrivateFieldLooseBase(this, _menucolor)[_menucolor]);

      var offset = _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset]; //this.createRectangle(-110, 0, 200, 30, 0, 0, 0, 105);


      this.drawText(_classPrivateFieldLooseBase(this, _name)[_name], _classPrivateFieldLooseBase(this, _posx)[_posx] + 100, _classPrivateFieldLooseBase(this, _posy)[_posy] + 5, _classPrivateFieldLooseBase(this, _titlefont)[_titlefont], _classPrivateFieldLooseBase(this, _title_font_scale)[_title_font_scale], true, _classPrivateFieldLooseBase(this, _textcolor)[_textcolor], true);

      if (_classPrivateFieldLooseBase(this, _options)[_options].length >= 1) {
        for (var i = _classPrivateFieldLooseBase(this, _start_idx)[_start_idx]; i < _classPrivateFieldLooseBase(this, _scroll)[_scroll]; i++) {
          var option = _classPrivateFieldLooseBase(this, _options)[_options][i];

          this.drawRect(_classPrivateFieldLooseBase(this, _option_posx)[_option_posx], offset, _classPrivateFieldLooseBase(this, _option_width)[_option_width], _classPrivateFieldLooseBase(this, _outline_height)[_outline_height], _classPrivateFieldLooseBase(this, _outlinecolor)[_outlinecolor]);

          if (i == _classPrivateFieldLooseBase(this, _selected_index)[_selected_index]) {
            this.drawRect(_classPrivateFieldLooseBase(this, _option_posx)[_option_posx], offset + 2, _classPrivateFieldLooseBase(this, _option_width)[_option_width], 30, _classPrivateFieldLooseBase(this, _highlight_color)[_highlight_color]);
          } else {
            this.drawRect(_classPrivateFieldLooseBase(this, _option_posx)[_option_posx], offset + 2, _classPrivateFieldLooseBase(this, _option_width)[_option_width], 30, _classPrivateFieldLooseBase(this, _option_background_color)[_option_background_color]);
          }

          this.drawText(option, _classPrivateFieldLooseBase(this, _option_posx)[_option_posx] + 10, offset + 5 + _classPrivateFieldLooseBase(this, _outline_height)[_outline_height], _classPrivateFieldLooseBase(this, _optionfont)[_optionfont], _classPrivateFieldLooseBase(this, _optionfontscale)[_optionfontscale], true, _classPrivateFieldLooseBase(this, _textcolor)[_textcolor], false);
          offset += 30;
        }
      }
    }
  }, {
    key: "check_scroll",
    value: function check_scroll() {
      if (_classPrivateFieldLooseBase(this, _options)[_options].length > 8) {
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
      if (Pad.IsKeyPressed(_classPrivateFieldLooseBase(this, _controls)[_controls].down)) {
        while (Pad.IsKeyPressed(_classPrivateFieldLooseBase(this, _controls)[_controls].down)) {
          this.update();
          wait(0);
        }

        if (_classPrivateFieldLooseBase(this, _scrollabe)[_scrollabe]) {
          if (_classPrivateFieldLooseBase(this, _scroll)[_scroll] < _classPrivateFieldLooseBase(this, _options)[_options].length) {
            _classPrivateFieldLooseBase(this, _start_idx)[_start_idx] += 1;
            _classPrivateFieldLooseBase(this, _scroll)[_scroll] += 1;
          }
        }

        _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] += 1;

        if (_classPrivateFieldLooseBase(this, _selected_index)[_selected_index] >= _classPrivateFieldLooseBase(this, _options)[_options].length) {
          _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] = 0;
          _classPrivateFieldLooseBase(this, _start_idx)[_start_idx] = 0;
          _classPrivateFieldLooseBase(this, _scroll)[_scroll] = _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view];
        } //this.update();

      }

      if (Pad.IsKeyPressed(_classPrivateFieldLooseBase(this, _controls)[_controls].up)) {
        while (Pad.IsKeyPressed(_classPrivateFieldLooseBase(this, _controls)[_controls].up)) {
          this.update();
          wait(0);
        }

        if (_classPrivateFieldLooseBase(this, _scrollabe)[_scrollabe]) {
          if (_classPrivateFieldLooseBase(this, _scroll)[_scroll] > 0) {
            if (_classPrivateFieldLooseBase(this, _start_idx)[_start_idx] > 0) {
              _classPrivateFieldLooseBase(this, _start_idx)[_start_idx] -= 1;
              _classPrivateFieldLooseBase(this, _scroll)[_scroll] -= 1;
            }
          }
        }

        _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] -= 1;

        if (_classPrivateFieldLooseBase(this, _selected_index)[_selected_index] < 0) {
          _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] = _classPrivateFieldLooseBase(this, _options)[_options].length - 1;
          _classPrivateFieldLooseBase(this, _start_idx)[_start_idx] = _classPrivateFieldLooseBase(this, _options)[_options].length - _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view];
          _classPrivateFieldLooseBase(this, _scroll)[_scroll] = _classPrivateFieldLooseBase(this, _options)[_options].length;
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
}();