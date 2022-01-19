///<reference path='.config/sa.d.ts' />
import {Menu,MenuOption} from "./menu_system/menu";
import peds from "./peds.json";
import control from "./ped_selector_controls.json";
const VK_activate= 114;
var player = new Player(0);
 


FxtStore.insert("pstl","Ped Selector");
var menu = new Menu("pstl",[], 150, -100, 0,[100, 200, 248,Math.round( 255)]);
menu.setControls(control.up,control.down);
menu.setTitleFont(0);
menu.setTitleFontScale(2);
menu.setOptionFont(1);
menu.setOptionBackgroundColor([0,0,0,100]);
menu.setOptionFontScale(1);


function generate_ped_menu(){
    menu.setOptionsPerPage(10);
   
    var ped_k = Object.keys(peds);
    FxtStore.insert("ptl","Ped Model");
    for(var i =0;i<ped_k.length;i++){
       
        var fxt_key= "p_"+i;

        FxtStore.insert(fxt_key,peds[ped_k[i]]);
        var option = new MenuOption("ptl",fxt_key,false);
        menu.addOption(option);

    }
}
generate_ped_menu();
while (true) {
    wait(0);
  
    if (Pad.IsKeyPressed(control.toggle)) {
      while (Pad.IsKeyPressed(control.toggle)) {
        wait(0);
      }
  
      menu.setActive(!menu.isActive());
    }
  
    if (menu.isActive()) {
      menu.draw();
  
      if (Pad.IsKeyPressed(control.select)) {
        while (Pad.IsKeyPressed(control.select)) {
          wait(0);
        }
          var idx=menu.getSelectedIndex();
          var model_id=parseInt(Object.keys(peds)[idx]);
          loadModel(model_id);
		player.setModel(model_id);
		Streaming.MarkModelAsNoLongerNeeded(model_id);

      }
    }
    if( player.getChar().isModel(0) ){
        Pad.SetPlayerDuckButton(0, 1);
    }else{
        Pad.SetPlayerDuckButton(0, 0);
    }
  }
  function loadModel(ModelID) {
	Streaming.RequestModel(ModelID);
	while (!Streaming.HasModelLoaded(ModelID)) {
		wait(125);
	}
}