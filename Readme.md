# GTA SA DE Menu System For Cleo Redux
This is a library/plugin for [Cleo Redux](https://github.com/cleolibrary/CLEO-Redux) to create menus for script mods for the definitive editon of Grand theft Auto San Andreas. Its in early stages of development but still usable

## Setup 
    1) Install [Cleo Redux](https://github.com/cleolibrary/CLEO-Redux)
    2) Place the menu_system folder inside the CLEO folder which should be located inside win64 folder of game directory
---
## Getting Started




The basics of creating a menu in your script is as follows.
```javascript
import {Menu,MenuOption} from "./menu_system/menu"
//new Menu(name,options,width,posx,posy,menucolor)
//Initalizes the menu
let menu = new Menu("Simple Menu",["option1"], 150, -100, 0,[100, 200, 248,Math.round( 255)]);
//keycode for f4 key
const f4_key=115;
//game loop
while(true){
    wait(0);
    //menu toggle on press of f4 key
    if (Pad.IsKeyPressed(f4_key)) {
      while (Pad.IsKeyPressed(f4_key)) {
        wait(0);
      }
  
      menu.setActive(!menu.isActive());
    }
    //if the menu is active, it draws the menu to screen
    if(menu.isActive()){
        menu.draw();
    }
}
```
For more detailed example see examples.
The documentation can be viewed at [Docs](https://github.com/yushaer/GTA-SA-Menu-System/tree/main/docs)

---

## Features 
- Menu Background Color customization
- Setting Fonts for menu title and options
- Setting menu position width
- Setting max items in view
- Automatic height calculation based on number of options
- Setting highlight/hover color
- Setting option outline color and height
- Setting menu option background color
- Automatic scrolling generation
- Much more

---
## Credits 
### Seemann - For  [Cleo Redux](https://github.com/cleolibrary/CLEO-Redux)

### borsuk - For drawing rect/text functions

---





