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
	

	#outline_height;
	#outlinecolor;
	#optionfont;
	#optionfontscale;
	#option_width;
	#option_background_color;
	

	#scroll;
	#start_idx;
	#scrollabe;
	#option_posx;

	#controls;
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
		this.#heightoffset=15;
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
			this.#height =this.#options.length*(this.#outline_height+this.#heightoffset) +this.#heightoffset+10;
		}
		else{
			this.#height=this.#max_items_in_view*(this.#outline_height+this.#heightoffset)+this.#heightoffset+10;
		}
	}
/**
 * appends a new menu option/item to the menu
 * @param {string} option - can also be an instance of MenuOption
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
	 * @param {Number} height - A float specifing menu height note its better let the menu height be generated automatically
	 */
	setHeight(value){
		this.heigh=value;
	}
	/**
	 * sets the height of the menu option 
	 * @param {} height - height of Menu option
	 */
	setOptionHeight(value){
		this.#heightoffset=value;
		this.calculate_height();
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
	/**
	 * Sets highlight color of the selected item
	 * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
	 */
	setHighlightColor(value) {
		this.#highlight_color = value;
	}
	/**
	 * Sets height of the outline rect that appears after each option
	 * @param {Number} height - Outline height 
	 */
	setOutlineHeight(value){
		this.#outline_height=value
	}
/**
 * Sets the color of the outlinerect
 * 
 *  @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
 */
	setOutlineColor(value){
		this.#outlinecolor=value;
	}
/**
 *  Sets the font for menu options
 * @param {int} FontID - Font id
 */
	setOptionFont(value){
		this.#optionfont=value;
	}
	/**
	 * Sets the option font scale
	 * @param {Number} scale 
	 */

	setOptionFontScale(value){
		this.#optionfontscale=value;
	}
/**
 * Sets the background color for menu options
 * @param {Array<int>} color - A int array of length 4 containing the rgba value for the color 
 */

	setOptionBackgroundColor(value){
		this.#option_background_color=value;
	}
	/**
	 * sets the selected index of menu options
	 * @param {int} idx -
	 */
	setSelectedIndex(value){
		this.#selected_index=value;
	}
	

	//getters
	/**
	 * gets index of selected option
	 * @returns selected menu option index
	 */
	getSelectedIndex(){
		return this.#selected_index
	}
	/**
	 * 
	 * @returns Menu Name/Title
	 */
	getName() {
		return this.#name;
	}
	/**
	 * 
	 * @returns menu color Rgba array
	 */
	getMenuColor() {
		return this.#menucolor;
	}
	/**
	 * 
	 * @returns text color RGBA array
	 */
	getTextColor() {
		return this.#textcolor;
	}
	/**
	 * @returns boolean indicating if the menu is on or off
	 */
	isActive(){
		return this.#active;
	}
	/**
	 * 
	 * @returns menu title font id
	 */
	getTitleFont() {
		return this.#titlefont;
	}
	
/**
 * 
 * @returns the highlighted option color RGBA array
 */
	getHighlightColor() {
		return this.#highlight_color;
	}
	/**
	 * 
	 * @returns menu title font scale 
	 */
	getTitleFontScale() {
		return this.#title_font_scale;
	}
	/**
	 * 
	 * @returns menu option outline height
	 */
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
	getOptionWidth(){
		return this.#option_width;
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
		var strt_offset=10;
		var offset=this.#heightoffset+strt_offset;
	
		//this.createRectangle(-110, 0, 200, 30, 0, 0, 0, 105);
		
		this.drawText(this.#name,this.#posx+(this.#width/2),this.#posy+2,this.#titlefont,this.#title_font_scale,true,this.#textcolor,true);
		
		if(this.#options.length>=1){
			
			for(var i=this.#start_idx;i<this.#scroll;i++){
				var option=this.#options[i];
				this.drawRect(this.#option_posx,offset,this.#option_width,this.#outline_height,this.#outlinecolor)
				
				if(i==this.#selected_index){
					this.drawRect(this.#option_posx,offset+this.#outline_height,this.#option_width,this.#heightoffset,this.#highlight_color);
				}
				else{
					this.drawRect(this.#option_posx,offset+this.#outline_height,this.#option_width,this.#heightoffset,this.#option_background_color);
				}
				if( option instanceof MenuOption){
					option.setPosX(this.#option_posx+3);
					option.setRectHeight(this.#heightoffset);
					option.setPosY(offset+3);
					option.setFont(this.#optionfont);
					option.setFontScale(this.#optionfontscale);
					option.setTextColor(this.#textcolor);
					option.setWidth(this.#option_width);
					option.draw();
				}
				else{
					this.drawText(option,this.#option_posx+3,(offset+3),this.#optionfont,this.#optionfontscale,true,this.#textcolor,false);
				}
				
				offset+=this.#heightoffset;
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
 
class MenuSelector{
	#increment;
	#controls;
	#initalvalue;
	#value;
	#posx;
	#posy;
	#font;
	#fontscale;
	#width;
	#textColor
	constructor(initalvalue,increment){
		this.increment=increment;
		this.#initalvalue=initalvalue
		this.#value=value;
	}
	update(){




	}
	setFont(font){
		this.#font=font;

	}
	setFontScale(scale){
		this.#fontscale=scale;
	}
	setWidth(width){
		this.#width=width;
	}
	setTextColor(color){
		this.#textColor=color;
	}


	setPosX(posx){
		this.#posx=posx;
	}
	setPosY(posY){
		this.#posy=posY
	}



}
/** MenuOption Class.
 * @class A class to create options for menu providing more functionality then default Strings
 * @constructor
 * @public
 * 
 */
class MenuOption {
	#title;
	#menu;
	#value;
	#is_selection;
	#posx;
	#posy;
	#font;
	#fontscale;
	#width;
	#textColor
	#rect_height
	/**
	 * 
	 * @param {String} title - option title 
	 * @param {String|Array<int>} value - the corresponding value whether a color RGBA array or string
	 * @param {Boolean} is_selection - to be implemented in the future
	 */
	constructor(title,value,is_selection){
		this.#title=title;
		this.#value=value;
	
		this.#is_selection=is_selection;
	}


	drawRect(x, y, w, h, color) {
		Hud.DrawRect(x + Math.floor(w/2), y + Math.floor(h/2), w, h, color[0], color[1], color[2],color[3]);
	}
	draw(){
		this.drawText(this.#title,this.#posx,this.#posy,this.#font,this.#fontscale,true,this.#textColor,false);
		if(!Array.isArray(this.#value)){
			this.drawText(this.#value,this.#width-150,this.#posy,this.#font,this.#fontscale,true,this.#textColor,false)
		}
		else if(this.#value.length==4){
		
			this.drawRect(this.#width-130,this.#posy,30,this.#rect_height-5,this.#value);
		}
		
	}
	setRectHeight(height){
		this.#rect_height=height;
	}
	setFont(font){
		this.#font=font;

	}
	setFontScale(scale){
		this.#fontscale=scale;
	}
	setWidth(width){
		this.#width=width;
	}
	setTextColor(color){
		this.#textColor=color;
	}


	setPosX(posx){
		this.#posx=posx;
	}
	setPosY(posY){
		this.#posy=posY
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

//,"trn9","trn21","trn22","trn18","trn7","trn8","trn14","trn15"
FxtStore.insert("gm","God Mode");
FxtStore.insert("gm1","Enabled");
//testing code 
var menu = new Menu("trn1",[],150,-100,0,[0,0,0,150]);


	menu.addOption(new MenuOption("gm","gm1",false));
menu.addOption("trn2");
menu.addOption("trn3");
menu.addOption(new MenuOption("trn20",[0,255,40,255],false));
FxtStore.insert("ky1","example")
// menu.clear();
// for(var i=0;i<cat.length;i++){
// 	menu.addOption(cat[i]);
// }
//createRectangle(-95,100,200,200,0,0,0,1)
//m.draw();
var player=new Player(0);
player.getChar().ad
menu.setTitleFontScale(2)
menu.setTextColor([255, 255,255,255]);

//menu.setMenuColor([0,0,0,200]);
menu.setTitleFont(0);
menu.setOutlineColor([0,0,0,50]);
//menu.setOptionBackgroundColor([255,0,0,120]);
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
	

