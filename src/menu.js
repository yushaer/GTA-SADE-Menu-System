/// <reference path="../GTA San Andreas - Definitive Edition/Gameface/Binaries/Win64/CLEO/.config/sa.d.ts" />

/*
	Scripted by Yushae Raza
	Free to use/redistribute but mention me in the credits.
	
	Only tested in 14388 build.
	
	Usage:
		press f4 to access the  trainer menu
		press f3 to access the vehicle spawner
		press up/down arrow key to cycle through each option
		press enter to select 
*/


const Trainer_Key = 115;
const Spawner_Key=114;
const Shortcut_key=17;
const VK_UP=38;
const VK_DOWN=40;






var world_cheats_var={
	lockdown:false,
	riot:false,
	menu_state:0

}

var vehicle_submenu={
	mainmenu:0,
	primaryColour:1,
	secondaryColour:2,
	vehiclemods:{
		catagory:3,
		selection:4
	}
}

var player = new Player(0);
var index = 0;
var current_vehicle = false;
var spawner_active=false;
var state=0;
var selected_car;
var player_cheats_var={
	enable_god:false,
	never_wanted:false,
	menu_state:0,
	weapon_catagory:null,
	infinite_sprint:false,
	super_jump:false,
	glide:false
	

};
var vehicle_cheat_var={
	state:0,
	god:false,
	mod_catagory:null
}




var trainer_active=false;
var spawner_state=0;
var teleporter={
	state:0,
	catagory_idx:-1
}
const K_UP=38;
const K_DOWN=40;

class Menu{
    
    

	
	constructor(name,options,pages,width,height,posx,posy,colors){
		this.name=name;
		this.options=options;
		this.pages=pages;
		this.width=width;
		this.height =this.options.length*30 +30+10;
		this.controls={"up":38,"down":40}
		this.posx=posx;
		this.posy=posy;
		this.menucolor=colors;
		this.textcolor=[255,255,255,255];
		this.selected_index=0;
		this.currentpage=0;
		this.heightoffset=30;
		this.titlefont=0;
		this.title_font_scale=1;
		this.active=false;
		this.outlinecolor=[255,255,255,255];
		this.highlight_color=[110, 239, 51, 1*255];
		this.outline_height=2;
		this.scroll=0;
		this.optionfont=1;
		this.optionfontscale=0.95*this.title_font_scale;
		this.addscroll=false;
		this.option_width=this.width*0.95;
		this.option_posx= this.posx + (Math.round(((this.width / 2) - (this.option_width / 2)), 0));
		this.option_background_color=[colors[0],colors[1],colors[2],Math.round(1.05*colors[3])]
		if(this.options.length*30>this.height){
			this.addscroll=true;

		}

	}

	addOption(option){
		this.options.push(option)
	}
	//setters
	setName(name) {
		 this.name =name;
		
	}
	setOptionBackgroundColor(color){
		this.option_background_color=color;
	}
	setOptionFont(font){
		this.optionfont=font;
	}
	setOptionFontScale(scale){
		this.optionfontscale=scale;
	}
	setOptionWidth(width){
		this.option_width=width;
		this.option_posx= this.posx + (Math.round(((this.width / 2) - (this.option_width / 2)), 0));
	}
	setMenuColor(color){
		this.menucolor=color;
	}
	setTitleFont(font){
		this.titlefont=font;
	}
	setTitleFontScale(scale){
		this.title_font_scale=scale;
	}
	setTextColor(color){
		this.textcolor=color;
	}
	setActive(active){
		this.active=active
	}
	setHighlightColor(color){
		this.highlight_color=color;
	}
	setOutlineColor(color){
		this.outlinecolor=color;
	}
	setOutlineHeight(height){
		this.setOutlineHeight=this.outline_height;
	}
	
	//getters
	getCurrentPage(){
		return this.currentpage;
	}
	getSelectedIndex(){
		return this.selected_index;

	}
	isActive(){
		return this.active;
	}

	update(){
		Text.UseCommands(false);
		this.drawRect(this.posx,this.posy,this.width,this.height,this.menucolor);
		var offset=this.heightoffset;
	
		//this.createRectangle(-110, 0, 200, 30, 0, 0, 0, 105);
		
		this.drawText(this.name,this.posx+100,this.posy+5,this.titlefont,this.title_font_scale,true,this.textcolor,true);
		
		if(this.options.length>=1){
			
			for(var i=0;i<this.options.length;i++){
				var option=this.options[i];
				this.drawRect(this.option_posx,offset,this.option_width,this.outline_height,this.outlinecolor)
				
				if(i==this.selected_index){
					this.drawRect(this.option_posx,offset+2,this.option_width,30,this.highlight_color);
				}
				else{
					this.drawRect(this.option_posx,offset+2,this.option_width,30,this.option_background_color);
				}
				this.drawText(option,this.option_posx+10,offset+5+this.outline_height,this.optionfont,this.optionfontscale,true,this.textcolor,false);
				offset+=30;
			}

		}
	}
	
	draw(){
		
		
		//this.createRectangle(260, 408, 150, 16, 0, 0, 0, 150)
		
		if(Pad.IsKeyPressed(this.controls.down)){
			while(Pad.IsKeyPressed(this.controls.down)){
				this.update()
				wait(0);

			}
			this.selected_index+=1;
			if(this.selected_index>=this.options.length){
				this.selected_index=0;
			}
			//this.update();
		}
		if(Pad.IsKeyPressed(this.controls.up)){
			while(Pad.IsKeyPressed(this.controls.up)){
				this.update()
				wait(0);

			}
			this.selected_index-=1;
			if(this.selected_index<0){
				this.selected_index=this.options.length-1;
			}
			//this.update();
		}
		this.update();
	
		//this.createTextDraw("test menu", -10, 5, 0, 1.7, true, 255, 255, 255, 255, true)
	
	}
	clear_text(){
		
	}
	
	drawRect(x, y, w, h, color) {
		Hud.DrawRect(x + Math.floor(w/2), y + Math.floor(h/2), w, h, color[0], color[1], color[2],color[3]);
	}
	drawText(text, x, y, font, scale, shadow,color, center) {
		Text.SetFont(font);
		Text.SetScale(3000, scale);
	
		Text.SetEdge(shadow ? 5 : 0, 0, 0, 0, 255);
		
		Text.SetColor(color[0], color[1], color[2], color[3]);
		Text.SetWrapX(3000);
		if(center) {
			Text.SetCenter(center);
		}
	
		//FxtStore.insert("MH" + TextID, text);
		Text.DisplayWithNumber(x, y, text, 3);
		
	}
}



//testing code 
var menu = new Menu("trn1",["trn10","trn9","trn21","trn22","trn18","trn7","trn8"],1,200,400,-100,0,[0,0,0,150]);

//createRectangle(-95,100,200,200,0,0,0,1)
//m.draw();
var player=new Player(0);
menu.setTitleFontScale(2)
menu.setTextColor([255, 255,255,255]);
//menu.setMenuColor([0,0,0,200]);
menu.setTitleFont(0);
menu.setOutlineColor(menu.menucolor)
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
while(true){
	wait(0);
	
	
	if(Pad.IsKeyPressed(115)){

		while(Pad.IsKeyPressed(115)){
			wait(0);
		}
		menu.setActive(!menu.isActive());
	}

	if(menu.isActive()){
		
		menu.draw();
	}
	

}
	

