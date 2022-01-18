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

var _outline_height = /*#__PURE__*/_classPrivateFieldLooseKey("outline_height");

var _outlinecolor = /*#__PURE__*/_classPrivateFieldLooseKey("outlinecolor");

var _optionfont = /*#__PURE__*/_classPrivateFieldLooseKey("optionfont");

var _optionfontscale = /*#__PURE__*/_classPrivateFieldLooseKey("optionfontscale");

var _option_width = /*#__PURE__*/_classPrivateFieldLooseKey("option_width");

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
 * @class A class to create Menu's for GTA SA DE
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
    Object.defineProperty(this, _option_width, {
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
    _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset] = 15;
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
  }, {
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
        _classPrivateFieldLooseBase(this, _height)[_height] = _classPrivateFieldLooseBase(this, _options)[_options].length * (_classPrivateFieldLooseBase(this, _outline_height)[_outline_height] + _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset]) + _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset] + 10;
      } else {
        _classPrivateFieldLooseBase(this, _height)[_height] = _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view] * (_classPrivateFieldLooseBase(this, _outline_height)[_outline_height] + _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset]) + _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset] + 10;
      }
    }
    /**
     * appends a new menu option/item to the menu
     * @param {string} option - can also be an instance of MenuOption
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
     * @param {Number} height - A float specifing menu height note its better let the menu height be generated automatically
     */

  }, {
    key: "setHeight",
    value: function setHeight(value) {
      this.heigh = value;
    }
    /**
     * sets the height of the menu option 
     * @param {} height - height of Menu option
     */

  }, {
    key: "setOptionHeight",
    value: function setOptionHeight(value) {
      _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset] = value;
      this.calculate_height();
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
    /**
     * Sets highlight color of the selected item
     * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
     */

  }, {
    key: "setHighlightColor",
    value: function setHighlightColor(value) {
      _classPrivateFieldLooseBase(this, _highlight_color)[_highlight_color] = value;
    }
    /**
     * Sets height of the outline rect that appears after each option
     * @param {Number} height - Outline height 
     */

  }, {
    key: "setOutlineHeight",
    value: function setOutlineHeight(value) {
      _classPrivateFieldLooseBase(this, _outline_height)[_outline_height] = value;
    }
    /**
     * Sets the color of the outlinerect
     * 
     *  @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
     */

  }, {
    key: "setOutlineColor",
    value: function setOutlineColor(value) {
      _classPrivateFieldLooseBase(this, _outlinecolor)[_outlinecolor] = value;
    }
    /**
     *  Sets the font for menu options
     * @param {int} FontID - Font id
     */

  }, {
    key: "setOptionFont",
    value: function setOptionFont(value) {
      _classPrivateFieldLooseBase(this, _optionfont)[_optionfont] = value;
    }
    /**
     * Sets the option font scale
     * @param {Number} scale 
     */

  }, {
    key: "setOptionFontScale",
    value: function setOptionFontScale(value) {
      _classPrivateFieldLooseBase(this, _optionfontscale)[_optionfontscale] = value;
    }
    /**
     * Sets the background color for menu options
     * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
     */

  }, {
    key: "setOptionBackgroundColor",
    value: function setOptionBackgroundColor(value) {
      _classPrivateFieldLooseBase(this, _option_background_color)[_option_background_color] = value;
    }
    /**
     * sets the selected index of menu options
     * @param {int} idx -
     */

  }, {
    key: "setSelectedIndex",
    value: function setSelectedIndex(value) {
      _classPrivateFieldLooseBase(this, _selected_index)[_selected_index] = value;
    } //getters

    /**
     * gets index of selected option
     * @returns selected menu option index
     */

  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      return _classPrivateFieldLooseBase(this, _selected_index)[_selected_index];
    }
    /**
     * 
     * @returns Menu Name/Title
     */

  }, {
    key: "getName",
    value: function getName() {
      return _classPrivateFieldLooseBase(this, _name)[_name];
    }
    /**
     * 
     * @returns menu color Rgba array
     */

  }, {
    key: "getMenuColor",
    value: function getMenuColor() {
      return _classPrivateFieldLooseBase(this, _menucolor)[_menucolor];
    }
    /**
     * 
     * @returns text color RGBA array
     */

  }, {
    key: "getTextColor",
    value: function getTextColor() {
      return _classPrivateFieldLooseBase(this, _textcolor)[_textcolor];
    }
    /**
     * @returns boolean indicating if the menu is on or off
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return _classPrivateFieldLooseBase(this, _active)[_active];
    }
    /**
     * 
     * @returns menu title font id
     */

  }, {
    key: "getTitleFont",
    value: function getTitleFont() {
      return _classPrivateFieldLooseBase(this, _titlefont)[_titlefont];
    }
    /**
     * 
     * @returns the highlighted option color RGBA array
     */

  }, {
    key: "getHighlightColor",
    value: function getHighlightColor() {
      return _classPrivateFieldLooseBase(this, _highlight_color)[_highlight_color];
    }
    /**
     * 
     * @returns menu title font scale 
     */

  }, {
    key: "getTitleFontScale",
    value: function getTitleFontScale() {
      return _classPrivateFieldLooseBase(this, _title_font_scale)[_title_font_scale];
    }
    /**
     * 
     * @returns menu option outline height
     */

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
    key: "getOptionWidth",
    value: function getOptionWidth() {
      return _classPrivateFieldLooseBase(this, _option_width)[_option_width];
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
      var strt_offset = 10;
      var offset = _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset] + strt_offset; //this.createRectangle(-110, 0, 200, 30, 0, 0, 0, 105);

      this.drawText(_classPrivateFieldLooseBase(this, _name)[_name], _classPrivateFieldLooseBase(this, _posx)[_posx] + _classPrivateFieldLooseBase(this, _width)[_width] / 2, _classPrivateFieldLooseBase(this, _posy)[_posy] + 2, _classPrivateFieldLooseBase(this, _titlefont)[_titlefont], _classPrivateFieldLooseBase(this, _title_font_scale)[_title_font_scale], true, _classPrivateFieldLooseBase(this, _textcolor)[_textcolor], true);

      if (_classPrivateFieldLooseBase(this, _options)[_options].length >= 1) {
        for (var i = _classPrivateFieldLooseBase(this, _start_idx)[_start_idx]; i < _classPrivateFieldLooseBase(this, _scroll)[_scroll]; i++) {
          var option = _classPrivateFieldLooseBase(this, _options)[_options][i];

          this.drawRect(_classPrivateFieldLooseBase(this, _option_posx)[_option_posx], offset, _classPrivateFieldLooseBase(this, _option_width)[_option_width], _classPrivateFieldLooseBase(this, _outline_height)[_outline_height], _classPrivateFieldLooseBase(this, _outlinecolor)[_outlinecolor]);

          if (i == _classPrivateFieldLooseBase(this, _selected_index)[_selected_index]) {
            this.drawRect(_classPrivateFieldLooseBase(this, _option_posx)[_option_posx], offset + _classPrivateFieldLooseBase(this, _outline_height)[_outline_height], _classPrivateFieldLooseBase(this, _option_width)[_option_width], _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset], _classPrivateFieldLooseBase(this, _highlight_color)[_highlight_color]);
          } else {
            this.drawRect(_classPrivateFieldLooseBase(this, _option_posx)[_option_posx], offset + _classPrivateFieldLooseBase(this, _outline_height)[_outline_height], _classPrivateFieldLooseBase(this, _option_width)[_option_width], _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset], _classPrivateFieldLooseBase(this, _option_background_color)[_option_background_color]);
          }

          if (option instanceof MenuOption) {
            option.setPosX(_classPrivateFieldLooseBase(this, _option_posx)[_option_posx] + 3);
            option.setRectHeight(_classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset]);
            option.setPosY(offset + 3);
            option.setFont(_classPrivateFieldLooseBase(this, _optionfont)[_optionfont]);
            option.setFontScale(_classPrivateFieldLooseBase(this, _optionfontscale)[_optionfontscale]);
            option.setTextColor(_classPrivateFieldLooseBase(this, _textcolor)[_textcolor]);
            option.setWidth(_classPrivateFieldLooseBase(this, _option_width)[_option_width]);
            option.draw();
          } else {
            this.drawText(option, _classPrivateFieldLooseBase(this, _option_posx)[_option_posx] + 3, offset + 3, _classPrivateFieldLooseBase(this, _optionfont)[_optionfont], _classPrivateFieldLooseBase(this, _optionfontscale)[_optionfontscale], true, _classPrivateFieldLooseBase(this, _textcolor)[_textcolor], false);
          }

          offset += _classPrivateFieldLooseBase(this, _heightoffset)[_heightoffset];
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

          if (_classPrivateFieldLooseBase(this, _scrollabe)[_scrollabe]) {
            _classPrivateFieldLooseBase(this, _scroll)[_scroll] = _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view];
          }
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

          if (this.scrollabe) {
            _classPrivateFieldLooseBase(this, _start_idx)[_start_idx] = _classPrivateFieldLooseBase(this, _options)[_options].length - _classPrivateFieldLooseBase(this, _max_items_in_view)[_max_items_in_view];
            _classPrivateFieldLooseBase(this, _scroll)[_scroll] = _classPrivateFieldLooseBase(this, _options)[_options].length;
          }
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
  }]);

  return Menu;
}();

var _increment = /*#__PURE__*/_classPrivateFieldLooseKey("increment");

var _controls2 = /*#__PURE__*/_classPrivateFieldLooseKey("controls");

var _initalvalue = /*#__PURE__*/_classPrivateFieldLooseKey("initalvalue");

var _value = /*#__PURE__*/_classPrivateFieldLooseKey("value");

var _posx2 = /*#__PURE__*/_classPrivateFieldLooseKey("posx");

var _posy2 = /*#__PURE__*/_classPrivateFieldLooseKey("posy");

var _font = /*#__PURE__*/_classPrivateFieldLooseKey("font");

var _fontscale = /*#__PURE__*/_classPrivateFieldLooseKey("fontscale");

var _width2 = /*#__PURE__*/_classPrivateFieldLooseKey("width");

var _textColor = /*#__PURE__*/_classPrivateFieldLooseKey("textColor");

var MenuSelector = /*#__PURE__*/function () {
  function MenuSelector(initalvalue, increment) {
    _classCallCheck(this, MenuSelector);

    Object.defineProperty(this, _increment, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _controls2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _initalvalue, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _value, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _posx2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _posy2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _font, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _fontscale, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _width2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _textColor, {
      writable: true,
      value: void 0
    });
    this.increment = increment;
    _classPrivateFieldLooseBase(this, _initalvalue)[_initalvalue] = initalvalue;
    _classPrivateFieldLooseBase(this, _value)[_value] = value;
  }

  _createClass(MenuSelector, [{
    key: "update",
    value: function update() {}
  }, {
    key: "setFont",
    value: function setFont(font) {
      _classPrivateFieldLooseBase(this, _font)[_font] = font;
    }
  }, {
    key: "setFontScale",
    value: function setFontScale(scale) {
      _classPrivateFieldLooseBase(this, _fontscale)[_fontscale] = scale;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      _classPrivateFieldLooseBase(this, _width2)[_width2] = width;
    }
  }, {
    key: "setTextColor",
    value: function setTextColor(color) {
      _classPrivateFieldLooseBase(this, _textColor)[_textColor] = color;
    }
  }, {
    key: "setPosX",
    value: function setPosX(posx) {
      _classPrivateFieldLooseBase(this, _posx2)[_posx2] = posx;
    }
  }, {
    key: "setPosY",
    value: function setPosY(posY) {
      _classPrivateFieldLooseBase(this, _posy2)[_posy2] = posY;
    }
  }]);

  return MenuSelector;
}();
/** MenuOption Class.
 * @class A class to create options for menu providing more functionality then default Strings
 * @constructor
 * @public
 * 
 */


var _title = /*#__PURE__*/_classPrivateFieldLooseKey("title");

var _menu = /*#__PURE__*/_classPrivateFieldLooseKey("menu");

var _value2 = /*#__PURE__*/_classPrivateFieldLooseKey("value");

var _is_selection = /*#__PURE__*/_classPrivateFieldLooseKey("is_selection");

var _posx3 = /*#__PURE__*/_classPrivateFieldLooseKey("posx");

var _posy3 = /*#__PURE__*/_classPrivateFieldLooseKey("posy");

var _font2 = /*#__PURE__*/_classPrivateFieldLooseKey("font");

var _fontscale2 = /*#__PURE__*/_classPrivateFieldLooseKey("fontscale");

var _width3 = /*#__PURE__*/_classPrivateFieldLooseKey("width");

var _textColor2 = /*#__PURE__*/_classPrivateFieldLooseKey("textColor");

var _rect_height = /*#__PURE__*/_classPrivateFieldLooseKey("rect_height");

var MenuOption = /*#__PURE__*/function () {
  /**
   * 
   * @param {String} title - option title 
   * @param {String|Array<int>} value - the corresponding value whether a color RGBA array or string
   * @param {Boolean} is_selection - to be implemented in the future
   */
  function MenuOption(title, value, is_selection) {
    _classCallCheck(this, MenuOption);

    Object.defineProperty(this, _title, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _menu, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _value2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _is_selection, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _posx3, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _posy3, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _font2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _fontscale2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _width3, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _textColor2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _rect_height, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _title)[_title] = title;
    _classPrivateFieldLooseBase(this, _value2)[_value2] = value;
    _classPrivateFieldLooseBase(this, _is_selection)[_is_selection] = is_selection;
  }

  _createClass(MenuOption, [{
    key: "drawRect",
    value: function drawRect(x, y, w, h, color) {
      Hud.DrawRect(x + Math.floor(w / 2), y + Math.floor(h / 2), w, h, color[0], color[1], color[2], color[3]);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.drawText(_classPrivateFieldLooseBase(this, _title)[_title], _classPrivateFieldLooseBase(this, _posx3)[_posx3], _classPrivateFieldLooseBase(this, _posy3)[_posy3], _classPrivateFieldLooseBase(this, _font2)[_font2], _classPrivateFieldLooseBase(this, _fontscale2)[_fontscale2], true, _classPrivateFieldLooseBase(this, _textColor2)[_textColor2], false);

      if (!Array.isArray(_classPrivateFieldLooseBase(this, _value2)[_value2])) {
        this.drawText(_classPrivateFieldLooseBase(this, _value2)[_value2], _classPrivateFieldLooseBase(this, _width3)[_width3] - 150, _classPrivateFieldLooseBase(this, _posy3)[_posy3], _classPrivateFieldLooseBase(this, _font2)[_font2], _classPrivateFieldLooseBase(this, _fontscale2)[_fontscale2], true, _classPrivateFieldLooseBase(this, _textColor2)[_textColor2], false);
      } else if (_classPrivateFieldLooseBase(this, _value2)[_value2].length == 4) {
        this.drawRect(_classPrivateFieldLooseBase(this, _width3)[_width3] - 130, _classPrivateFieldLooseBase(this, _posy3)[_posy3], 30, _classPrivateFieldLooseBase(this, _rect_height)[_rect_height] - 5, _classPrivateFieldLooseBase(this, _value2)[_value2]);
      }
    }
  }, {
    key: "setRectHeight",
    value: function setRectHeight(height) {
      _classPrivateFieldLooseBase(this, _rect_height)[_rect_height] = height;
    }
  }, {
    key: "setFont",
    value: function setFont(font) {
      _classPrivateFieldLooseBase(this, _font2)[_font2] = font;
    }
  }, {
    key: "setFontScale",
    value: function setFontScale(scale) {
      _classPrivateFieldLooseBase(this, _fontscale2)[_fontscale2] = scale;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      _classPrivateFieldLooseBase(this, _width3)[_width3] = width;
    }
  }, {
    key: "setTextColor",
    value: function setTextColor(color) {
      _classPrivateFieldLooseBase(this, _textColor2)[_textColor2] = color;
    }
  }, {
    key: "setPosX",
    value: function setPosX(posx) {
      _classPrivateFieldLooseBase(this, _posx3)[_posx3] = posx;
    }
  }, {
    key: "setPosY",
    value: function setPosY(posY) {
      _classPrivateFieldLooseBase(this, _posy3)[_posy3] = posY;
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

  return MenuOption;
}(); //,"trn9","trn21","trn22","trn18","trn7","trn8","trn14","trn15"


FxtStore.insert("gm", "God Mode");
FxtStore.insert("gm1", "Enabled"); //testing code 

var menu = new Menu("trn1", [], 150, -100, 0, [0, 0, 0, 150]);
menu.addOption(new MenuOption("gm", "gm1", false));
menu.addOption("trn2");
menu.addOption("trn3");
menu.addOption(new MenuOption("trn20", [0, 255, 40, 255], false));
FxtStore.insert("ky1", "example"); // menu.clear();
// for(var i=0;i<cat.length;i++){
// 	menu.addOption(cat[i]);
// }
//createRectangle(-95,100,200,200,0,0,0,1)
//m.draw();

var player = new Player(0);
player.getChar().ad;
menu.setTitleFontScale(2);
menu.setTextColor([255, 255, 255, 255]); //menu.setMenuColor([0,0,0,200]);

menu.setTitleFont(0);
menu.setOutlineColor([0, 0, 0, 50]); //menu.setOptionBackgroundColor([255,0,0,120]);

menu.setOptionFont(2);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (true) {
  wait(0);

  if (Pad.IsKeyPressed(115)) {
    while (Pad.IsKeyPressed(115)) {
      wait(0);
    }

    menu.setActive(!menu.isActive());
  }

  if (menu.isActive()) {
    menu.draw();

    if (Pad.IsKeyPressed(13)) {
      while (Pad.IsKeyPressed(13)) {
        wait(0);
      }

      log("selected-index " + menu.getSelectedIndex());
    }
  }
}