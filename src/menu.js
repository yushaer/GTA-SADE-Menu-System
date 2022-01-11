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
class Menu{
    
    
	#name;
	#options;
	#width;
	
	
	#height;
	#max_items_in_view;
	#posx;
	#posy;
	#menucolor;
	#textcolor;
	#selected_index;
	
	#heightoffset;
	#titlefont;
	#highlight_color;
	#title_font_scale;
	#active;
	#option_width;

	#outline_height;
	#outlinecolor;
	#optionfont;
	#optionfontscale;
	#option_background_color;
	

	#scroll;
	#start_idx;
	#scrollabe;
	#option_posx;

	#controls;


/**
 * Creates a menu 
 * @param {string} name - the title of the menu
 * @param {Array<String>} options - A string array containing all the menu items/option
 * @param {float} width  - Menu width
 * @param {float} posx - The X position of the menu
 * @param {float} posy - The Y postion of the menu
 * @param {Array<int>} menucolor - A array of size 4 containing the RGBA value for the Menu Color
 */
	constructor(name,options,width,posx,posy,menucolor){
		this.#name=name;
		this.#options=options;
		this.#width=width;
		this.#max_items_in_view=8;
		this.calculate_height();
		this.#controls={"up":38,"down":40}
		this.#posx=posx;
		this.#posy=posy;
		this.#menucolor=menucolor;
		this.#textcolor=[255,255,255,255];
		this.#selected_index=0;
		this.#heightoffset=30;
		this.#titlefont=0;
		this.#title_font_scale=1;
		this.#active=false;
		this.#outlinecolor=[255,255,255,255];
		this.#highlight_color=[110, 239, 51, 1*255];
		this.#outline_height=2;
		this.#scroll=0;
		this.#start_idx=0;
		this.#optionfont=1;
		this.#optionfontscale=0.95*this.#title_font_scale;
		this.#scrollabe=false;
		this.#option_width=this.#width*0.95;
		this.#option_posx= this.#posx + (Math.round(((this.#width / 2) - (this.#option_width / 2)), 0));
		this.#option_background_color=[menucolor[0],menucolor[1],menucolor[2],Math.round(1.05*menucolor[3])]
		this.generate_scroll();
	

	}
	generate_scroll(){
		if(this.#options.length>this.#max_items_in_view){
			this.#scrollabe=true;
			this.#scroll=this.#max_items_in_view;

		}
		else{
			this.#scroll=this.#options.length;
			this.#scrollabe=false;

		}
	}
	calculate_height(){
		if(this.#options.length<=this.#max_items_in_view){
			this.#height =this.#options.length*30 +30+10;
		}
		else{
			this.#height=this.#max_items_in_view*30+30+10;
		}
	}
/**
 * appends a new menu option/item to the menu
 * @param {string} option 
 */
	addOption(option){
		this.#options.push(option);
		
		this.calculate_height();
		this.generate_scroll();
	}
		//setters
	/**
	 * Sets the menu width
	 * @param {float} width - A float specifing menu width  
	 */

	setWidth(value){
		this.#width=value;
		this.#option_width=this.#width*0.95;
	}
	/**
	 * Sets the menu height
	 * @param {float} height - A float specifing menu height 
	 */
	setHeight(value){
		this.heigh=value;
	}
	/**
	 * sets the X position of the menu 
	 * @param {float} posx - Xposition 
	 */
	setPosX(value){
		this.#posx=value;
		this.#option_posx= this.#posx + (Math.round(((this.#width / 2) - (this.#option_width / 2)), 0));

	}
	/**
	 * sets the y position of the menu 
	 * @param {float} posy - Yposition 
	 */
	setPosY(value){
		this.#posy=value;
	}
	/**
	 * Sets the  menu option width 
	 * @param {float} width - Option width
	 */
	setOptionWidth(width){
		this.#option_width=width;
		this.#option_posx= this.#posx + (Math.round(((this.#width / 2) - (this.#option_width / 2)), 0));
	}

	/**
	 * sets whether the menu is active or disabled
	 * @param {Boolean} active - Boolean specifing whether to activate the menu or not
	 */
	setActive(active){
		this.#active=active;
		this.#selected_index=0;
		this.#start_idx=0;
		this.generate_scroll();
	}
/**
 * Sets the menu title
 * @param {String} name - menu title 
 */
	
	setName(value) {
		this.#name = value;
	}
	
	/**
	 * sets the menu background color
	 * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
	 */
	setMenuColor(value) {
		this.#menucolor = value;
	}

	/**
	 * sets the text color of the menu
	 * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
	 */
	setTextColor(value) {
		this.#textcolor = value;
	}
	/**
	 * Sets the font for the menu title
	 * @param {Int} font - Font id check out {@link https://library.sannybuilder.com/#/sa_unreal/enums/Font|Sanny-builder-library} for valid font ids   
	 */
	setTitleFont(value) {
		this.#titlefont = value;
	}
	/**
	 * Sets the scale of the menu title font 
	 * @param {float} scale-font scale
	 */
	setTitleFontScale(value) {
		this.#title_font_scale = value;
	}
	
	setHighlightColor(value) {
		this.#highlight_color = value;
	}
	setOutlineHeight(value){
		this.#outline_height=value
	}

	setOutlineColor(value){
		this.#outlinecolor=value;
	}

	setOptionFont(value){
		this.#optionfont=value;
	}

	setOptionFontScale(value){
		this.#optionfontscale=value;
	}


	setOptionBackgroundColor(value){
		this.#option_background_color=value;
	}
	setSelectedIndex(value){
		this.#selected_index=value;
	}
	

	//getters
	getSelectedIndex(){
		return this.#selected_index
	}
	getName() {
		return this.#name;
	}
	getMenuColor() {
		return this.#menucolor;
	}
	getTextColor() {
		return this.#textcolor;
	}
	isActive(){
		return this.#active;
	}
	
	getTitleFont() {
		return this.#titlefont;
	}
	

	getHighlightColor() {
		return this.#highlight_color;
	}
	getTitleFontScale() {
		return this.#title_font_scale;
	}
	
	getOutlineHeight(){
		return this.#outline_height;

	}
	getOutlineColor(){
		return this.#outlinecolor
	}
	getOptionFont(){
		return this.#optionfont;
	}
	getOptionFontScale(){
		return this.#optionfontscale;
	}


	getOptionBackgroundColor(){
		return this.#option_background_color;
	}
	getWidth(){
		return this.#width;
	}
	getHeight(){
		return this.#height;
	}
	getPosX(){
		return this.#posx
	}
	getPosY(){
		return this.#posy
	}
	/**
	 * Clears all the options from the menu
	 */
	clear(){
		this.#options =[];
		this.#selected_index=0;
		this.#start_idx=0;
		this.generate_scroll();
	}
	update(){
		Text.UseCommands(false);
		this.drawRect(this.#posx,this.#posy,this.#width,this.#height,this.#menucolor);
		var offset=this.#heightoffset;
	
		//this.createRectangle(-110, 0, 200, 30, 0, 0, 0, 105);
		
		this.drawText(this.#name,this.#posx+100,this.#posy+5,this.#titlefont,this.#title_font_scale,true,this.#textcolor,true);
		
		if(this.#options.length>=1){
			
			for(var i=this.#start_idx;i<this.#scroll;i++){
				var option=this.#options[i];
				this.drawRect(this.#option_posx,offset,this.#option_width,this.#outline_height,this.#outlinecolor)
				
				if(i==this.#selected_index){
					this.drawRect(this.#option_posx,offset+2,this.#option_width,30,this.#highlight_color);
				}
				else{
					this.drawRect(this.#option_posx,offset+2,this.#option_width,30,this.#option_background_color);
				}
				this.drawText(option,this.#option_posx+10,offset+5+this.#outline_height,this.#optionfont,this.#optionfontscale,true,this.#textcolor,false);
				offset+=30;
			}

		}
	}
	check_scroll(){
		if(this.#options.length>8){
			return true;
		}
		return false;
	}
	/**
	 * draws the menu to the screen must be called inside game loop
	 */
	draw(){
		
		
		//this.createRectangle(260, 408, 150, 16, 0, 0, 0, 150)
		
		if(Pad.IsKeyPressed(this.#controls.down)){
			while(Pad.IsKeyPressed(this.#controls.down)){
				this.update()
				wait(0);

			}
			if(this.#scrollabe){
			
				

				if(this.#scroll<this.#options.length){
					this.#start_idx+=1;
					this.#scroll+=1;
				}
				
			}
			this.#selected_index+=1;
			if(this.#selected_index>=this.#options.length){
				this.#selected_index=0;
				this.#start_idx=0;
				if(this.#scrollabe){
					this.#scroll=this.#max_items_in_view;
				}
				
			}
			//this.update();
		}
		if(Pad.IsKeyPressed(this.#controls.up)){
			while(Pad.IsKeyPressed(this.#controls.up)){
				this.update()
				wait(0);

			}
			if(this.#scrollabe){
				
				

				if(this.#scroll>0){
					if(this.#start_idx>0){
						this.#start_idx-=1;
						this.#scroll-=1;
					}
					
				
				}
				
			}

			this.#selected_index-=1;
			if(this.#selected_index<0){
				this.#selected_index=this.#options.length-1;
				if(this.scrollabe){
					this.#start_idx=(this.#options.length)-this.#max_items_in_view;
					this.#scroll=this.#options.length;
				}
				
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
var menu = new Menu("trn1",["trn10","trn9","trn21","trn22","trn18","trn7","trn8","trn14","trn15"],200,-100,0,[0,0,0,150]);
// menu.clear();
// for(var i=0;i<cat.length;i++){
// 	menu.addOption(cat[i]);
// }
//createRectangle(-95,100,200,200,0,0,0,1)
//m.draw();
var player=new Player(0);
menu.setTitleFontScale(2)
menu.setTextColor([255, 255,255,255]);

//menu.setMenuColor([0,0,0,200]);
menu.setTitleFont(0);
menu.setOutlineColor([255,255,255,255]);
menu.setOptionBackgroundColor([255,0,0,120]);
menu.setOptionFont(2);
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
		if(Pad.IsKeyPressed(13)){
			while(Pad.IsKeyPressed(13)){
			wait(0);
			}
			log("selected-index " + menu.getSelectedIndex())

		}
	}
	

}
	

