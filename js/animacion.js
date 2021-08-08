const loading = document.querySelector("#loading").style.display="none";
const contenido = document.querySelector("#contenido");

contenido.onload=function(){
	loading.style.display="none";
}

(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5124").s().p("AgEgKQAAgEAEgBQAFABAAAEIgFAag");
	this.shape.setTransform(0.5,-28.1,7.07,7.07);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D67B4").s().p("AgLgaQgBgJAMgCIAAAAQANACgBAJIgMBAg");
	this.shape_1.setTransform(0.5,-15.9,7.07,7.07);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0CFFFF").s().p("AgTgtQgBgQAUgDIABAAQAUADAAAQIgVBtg");
	this.shape_2.setTransform(0.5,0.5,7.07,7.07);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-45,29.1,91.2);


(lib.pro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.5,-108.2,2.952,2.952,0,0,0,-0.1,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:0.5,scaleY:3.2,x:-5.7,y:34.5},0).wait(1).to({scaleY:3.45,y:45.6},0).wait(1).to({scaleY:3.14,y:31.7},0).wait(1).to({scaleY:2.83,y:17.9},0).wait(1).to({scaleY:3.01,y:25.8},0).wait(1).to({scaleY:3.18,y:33.7},0).wait(1).to({scaleY:2.82,y:17.4},0).wait(1).to({scaleY:2.45,y:1.2},0).wait(1).to({scaleY:2.6,y:7.8},0).wait(1).to({scaleY:2.75,y:14.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-111,85.7,269.2);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro();
	this.instance.parent = this;
	this.instance.setTransform(51.3,81.5,0.323,0.323,105,0,0,-5.5,23.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F8F8F").s().p("AgOANIgSgZIBBAAIgSAZg");
	this.shape.setTransform(108.4,97.3,7.705,7.705,105);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA1D24").s().p("AgUAOIAFgOQAHgNAIAAQAOAAAHAbg");
	this.shape_1.setTransform(346.1,161.4,7.705,7.705,105);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA1D24").s().p("Agjg5IBVBCIAAAiIhjAPg");
	this.shape_2.setTransform(154.8,180.8,7.705,7.705,105);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA1D24").s().p("AgxArIAAgiIBVhCIANBzg");
	this.shape_3.setTransform(190.3,48.5,7.705,7.705,105);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#27A2DE").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_4.setTransform(263.3,139.8,7.705,7.705,105);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnCcIAAgJIhjgQIAAgiIBWhDIAfidIAGgNQAGgPAJAAIAAAAQAKAAAGAPQAEAGACAHIAeCdIBXBDIAAAiIhkAQIAAAJg");
	this.shape_5.setTransform(238.2,132.3,7.705,7.705,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.3,111.5,350.7,213);
// library properties:
lib.properties = {
	width: 363,
	height: 217,
	fps: 100,
	color: "#000000",
	opacity: 0.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new lib.Untitled2();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(false,'both',false,1);	
	fnStartAnimation();
}