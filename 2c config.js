var pluginPath = '/wp-content/plugins/imageswitcher/';
var configMediaPath = '/wp-content/uploads/2015/12/';
var troughMediaPath = '/wp-content/uploads/2016/11/';
var geoMediaPath = '/wp-content/uploads/2016/11/';

var curveInOut = "out";
var curveRadius = "15";

/*TROUGH IMAGE VARIABLES:
	1st letter	
		D = Dry
		W = Wet
	2nd letter (same as last letter of TroughOptions argument, same as last letter of TroughTreatment divs)
		O = open
		G = grate
		R = rock
		P = plant
		C = composite
		M = membrane
		S = stainless
		V = veneer
	3rd letter (if starts with D or W)
		E = Exposed
		V = Veneer
	Last letter
		I = icon
		no letter = full-sized image
*/

var DOEI = 'living-green-wall-trough';
var DGEI = 'living-green-wall-grating';
var DREI = 'living-green-wall-rock';
var DPEI = 'living-wall-plant-trough';

var DOE = 'green-wall-trough';
var DGE = 'green-wall-grating';
var DRE = 'green-wall-rocks';
var DPE = 'green-living-wall-plant-trough';

var DOVI = 'living-wall-trough-veneer';
var DGVI = 'living-green-wall-grating-veneer';
var DRVI = 'living-green-wall-rocks-veneer';
var DPVI = 'living-green-wall-plant-veneer';

var DOV = 'green-wall-trough-veneer';
var DGV = 'green-wall-grating-veneer';
var DRV = 'green-wall-rock-trough-veneer';
var DPV = 'green-living-wall-plant-trough-veneer';

var WOEI = 'living-wall-trough-water';
var WGEI = 'living-wall-grating';
var WREI = 'living-green-wall-rocks';
var WPEI = 'living-wall-aquatic-plant-trough';

var WOE = 'green-wall-wet-trough';
var WGE = 'green-wall-trough-grate';
var WRE = 'green-wall-grate-rock';
var WPE = 'green-wall-plant-trough';

var WOVI = 'living-green-wall-water';
var WGVI = 'living-wall-grating-veneer';
var WRVI = 'living-green-wall-rock-veneer';
var WPVI = 'living-wall-aquatic-plant-veneer';

var WOV = 'green-wall-water-trough';
var WGV = 'green-wall-trough-veneer-grate';
var WRV = 'green-wall-rock-grate-veneer';
var WPV = 'green-wall-plant-trough-veneer';

var CI = 'composite-icon';
var WI = 'waterproofing-icon';
var SI = 'stainless-icon';
var VI = 'Veneers-icon';

var C = 'composite';
var W = 'waterproofing';
var S = 'stainless';
var V = 'Veneers';
//end trough image variables

//global variables that control visibility on the page through multiple functions
var showPlane = "S";
var showFloor = "O";
var showWet = "D";
var showHydraulics = "O";
var showSurface = "O";
var showVeneer = "E";
var showMaterial = "S";
var showElement = "N";
var showCurve = "S";

/*TROUGH MENU BAR CONVENTIONS
THERE IS ONLY ONE MENU BAR WITH 8 ICONS / 8 LETTERS
	icon_div = div that includes icon and text
	icon_ = argument of TroughOptions
	icon_ = id of icon image
	icon_text = text below icon
	TroughOptions = function that switches trough body

TROUGH MAJOR TREATMENTS:
	O = open
	G = grate
	R = rock
	P = plant
	C = composite
	W = waterproofing
	S = stainless
	V = veneer
	
TROUGH BODY CONVENTIONS:
	TroughGallery = class of all trough galleries
	TroughGallery_ = div, last letter is (O,G,R,P,C,W,S,V)
		[unitegallery trough_] = actual gallery, last letter is (O,G,R,P,C,W,S,V)
		
	TroughTreatment = class of all trough treatment divs
	TroughTreatment_ = div, last letter is (O,G,R,P,C,W,S,V)
		TroughImage = class of all Trough drawings
		TroughImage_ = div, last letter is (O,G,R,P,C,W,S,V)
		TroughTreatmentImage_ = img, last letter is (O,G,R,P,C,W,S,V)

		TroughTreatmentSelector = class of all selectors (change max width and set clear on responsive)
		TroughTreamentSelector_ = div, last letter is (O,G,R,P,C,W,S,V)
			TroughImageConfig = input name, value will be 1st letter (major treatment O,G,R,P), 2nd letter (W,D) for wet or dry
			TroughImageVeneer = input name, value will be 1st letter (major treatment O,G,R,P), 2nd letter (V,E) for veneer or exposed
				changeTroughImage = function with argument from TrougImageConfig or TroughImageVeneer
					This will change the image on the left (only for O,G,R,P)
			
		TroughText = class of all Trough treatment descriptions
		TroughText_ = div, last letter is (O,G,R,P,C,W,S,V)
		
*/
	
jQuery.preloadImages = function() {

	for (var i = 0; i < arguments.length; i++) {
    jQuery('<img />').attr('src', configMediaPath + arguments[i]);
  }
}

jQuery.preloadImages('RADC.png','RADO.png','RAWC.png','RAWO.png','RBDC.png','RBDO.png','RBWC.png','RBWO.png','RODC.png','RODO.png','ROWC.png','ROWO.png','SADC.png','SADO.png','SAWC.png','SAWO.png','SBDC.png','SBDO.png','SBWC.png','SBWO.png','SODC.png','SODO.png','SOWC.png','SOWO.png');


jQuery.preloadTroughImages = function () {
	for (var i = 0; i < arguments.length; i++) {
    jQuery('<img />').attr('src', troughMediaPath + arguments[i] + '.png');
  }
}

jQuery.preloadTroughImages(DOEI, DGEI, DREI, DPEI, DOE, DGE, DRE, DPE, DOVI, DGVI, DRVI, DPVI, DOV, DGV, DRV, DPV, WOEI, WGEI, WREI, WPEI, WOE, WGE, WRE, WPE, WOVI, WGVI, WRVI,WPVI, WOV, WGV, WRV, WPV, CI,WI, SI,VI, C, W, S, V );

var biowallConfigData = null;

jQuery.ajax({
  url: pluginPath + 'biowallConfig.json',
  beforeSend: function(xhr){
    if (xhr.overrideMimeType)
    {
      xhr.overrideMimeType('application/json');
    }
  },
  dataType: 'json',
  success: function( data ) {
	  biowallConfigData = data;
	}
});

//This will format icons for the trough galleries, and for curve galleries.  Formatting is removed by class before adding formatting by ID
function iconFormat (iconName) {
		document.getElementById(iconName).style.color = "#75a405";
		document.getElementById(iconName).style.fontWeight = "bold";
		document.getElementById(iconName).style.textDecoration = "underline";
		document.getElementById(iconName).style.fontSize = "14px";
}

//use global variables to toggle icons in trough treatment menu between wet/dry and veneer/exposed
function updateTroughIcons () {
	        if ( showWet == "W" && showVeneer == "V") {
		document.getElementById('iconO').src = troughMediaPath + WOVI + '.png';
		document.getElementById('iconG').src = troughMediaPath + WGVI + '.png';
		document.getElementById('iconR').src = troughMediaPath + WRVI + '.png';
		document.getElementById('iconP').src = troughMediaPath + WPVI + '.png';
	}  else if ( showWet != "W" && showVeneer != "V") {
		document.getElementById('iconO').src = troughMediaPath + DOEI + '.png';
		document.getElementById('iconG').src = troughMediaPath + DGEI + '.png';
		document.getElementById('iconR').src = troughMediaPath + DREI + '.png';
		document.getElementById('iconP').src = troughMediaPath + DPEI + '.png';
	} else if ( showWet != "W" && showVeneer == "V") {
		document.getElementById('iconO').src = troughMediaPath + DOVI + '.png';
		document.getElementById('iconG').src = troughMediaPath + DGVI + '.png';
		document.getElementById('iconR').src = troughMediaPath + DRVI + '.png';
		document.getElementById('iconP').src = troughMediaPath + DPVI + '.png';
	} else if ( showWet == "W" && showVeneer != "V" ) {
		document.getElementById('iconO').src = troughMediaPath + WOEI + '.png';
		document.getElementById('iconG').src = troughMediaPath + WGEI + '.png';
		document.getElementById('iconR').src = troughMediaPath + WREI + '.png';
		document.getElementById('iconP').src = troughMediaPath + WPEI + '.png';
	} 
}

//use global variables to change the checkboxes for veneer/exposed and wet/dry in all treatments
//reads 2 global variables showWet (W,D) and showVeneer (V,E)
function updateTroughImageSelectors () {
	if ( showWet == "W") {
		document.getElementById("OW").checked = true;
		document.getElementById("GW").checked = true;
		document.getElementById("RW").checked = true;
		document.getElementById("PW").checked = true;
		document.getElementById("ctCWW").checked = true;
		document.getElementById("OD").checked = false;
		document.getElementById("GD").checked = false;
		document.getElementById("RD").checked = false;
		document.getElementById("PD").checked = false;
		document.getElementById("ctCWD").checked = false;
	} else {
		document.getElementById("OW").checked = false;
		document.getElementById("GW").checked = false;
		document.getElementById("RW").checked = false;
		document.getElementById("PW").checked = false;
		document.getElementById("ctCWW").checked = false;
		document.getElementById("OD").checked = true;
		document.getElementById("GD").checked = true;
		document.getElementById("RD").checked = true;
		document.getElementById("PD").checked = true;
		document.getElementById("ctCWD").checked = true;
	}
	
		if ( showVeneer == "V") {
		document.getElementById("OV").checked = true;
		document.getElementById("GV").checked = true;
		document.getElementById("RV").checked = true;
		document.getElementById("PV").checked = true;
		document.getElementById("OE").checked = false;
		document.getElementById("GE").checked = false;
		document.getElementById("RE").checked = false;
		document.getElementById("PE").checked = false;
	} else {
		document.getElementById("OV").checked = false;
		document.getElementById("GV").checked = false;
		document.getElementById("RV").checked = false;
		document.getElementById("PV").checked = false;
		document.getElementById("OE").checked = true;
		document.getElementById("GE").checked = true;
		document.getElementById("RE").checked = true;
		document.getElementById("PE").checked = true;
	}
}

//change image next to selector inside each trough div
//reads 2 global variables showWet (W,D) and showVeneer (V,E)
function updateTroughImages () {
	       if ( showVeneer == "V" && showWet == "W") {
		document.getElementById('TroughTreatmentImageO' ).src = troughMediaPath + WOV + '.png';
		document.getElementById('TroughTreatmentImageG' ).src = troughMediaPath + WGV + '.png';
		document.getElementById('TroughTreatmentImageR' ).src = troughMediaPath + WRV + '.png';
		document.getElementById('TroughTreatmentImageP' ).src = troughMediaPath + WPV + '.png';
	} else if ( showVeneer != "V" && showWet != "W") {
		document.getElementById('TroughTreatmentImageO' ).src = troughMediaPath + DOE + '.png';
		document.getElementById('TroughTreatmentImageG' ).src = troughMediaPath + DGE + '.png';
		document.getElementById('TroughTreatmentImageR' ).src = troughMediaPath + DRE + '.png';
		document.getElementById('TroughTreatmentImageP' ).src = troughMediaPath + DPE + '.png';
	} else if ( showVeneer != "V" && showWet == "W") {
		document.getElementById('TroughTreatmentImageO' ).src = troughMediaPath + WOE + '.png';
		document.getElementById('TroughTreatmentImageG' ).src = troughMediaPath + WGE + '.png';
		document.getElementById('TroughTreatmentImageR' ).src = troughMediaPath + WRE + '.png';
		document.getElementById('TroughTreatmentImageP' ).src = troughMediaPath + WPE + '.png';
	} else if ( showVeneer == "V" && showWet != "W") {
		document.getElementById('TroughTreatmentImageO' ).src = troughMediaPath + DOV + '.png';
		document.getElementById('TroughTreatmentImageG' ).src = troughMediaPath + DGV + '.png';
		document.getElementById('TroughTreatmentImageR' ).src = troughMediaPath + DRV + '.png';
		document.getElementById('TroughTreatmentImageP' ).src = troughMediaPath + DPV + '.png';
	}
}

//this is basically a copy of selectBiowallConfig, but reading from from global variables, skipping the fade-in, and without any downstream script references
//this read from 4 global variables: showPlane (S,R), showFloor (O,A,B), showWet (W,D), showHydraulics (O,C)
function updateConfigurationTool () {
	
	var configName = "";
	
	configName = showPlane + showFloor + showWet + showHydraulics ;
	
	if ( configName.length == 4 ) {
		document.getElementById('configImage').src = configMediaPath + configName + '.png';
		var itemCount = biowallConfigData.length;
		for (var i = 0; i < itemCount; i++) {
			if ( biowallConfigData[i].Name == configName ) {
				document.getElementById('configLegendPane').innerHTML = biowallConfigData[i].Description;
			}//end nested if
		}//end for
	}//end if

	//update radio buttons
	if ( showPlane == "S") { document.getElementById("ctCPS").checked = true;}
	if ( showPlane == "R") { document.getElementById("ctCPR").checked = true;}
	
	if ( showFloor == "A") { document.getElementById("ctCFA").checked = true;}
	if ( showFloor == "O") { document.getElementById("ctCFO").checked = true;}
	if ( showFloor == "B") { document.getElementById("ctCFB").checked = true;}
	
	if ( showWet == "W") { document.getElementById("ctCWW").checked = true;}
	if ( showWet == "D") { document.getElementById("ctCWD").checked = true;}
	
	if ( showHydraulics == "O") { document.getElementById("ctCHO").checked = true;}
	if ( showHydraulics == "C") { document.getElementById("ctCHC").checked = true;}

}

//this is basically a copy of selectSpec, but reading from global variables, and without any downstream references
function updateSpec () {

	var factorPlane = showPlane;
	var factorFloor = showFloor;
	var factorWet = showWet;
	var factorHydraulics = showHydraulics;
	var factorSurface = showSurface;
	var factorMaterial = showMaterial;
	var factorVeneer = showVeneer;
	var factorCurve = showCurve;
	var factorElement = showElement;
	
	//update global variables, applies to all except material, curve, element
	//this doesn't do a straight match, as it corrects to enter values which might be empty
	if 			( factorPlane == "S")		{showPlane = "S";}
		else 								{showPlane = "R";}
	if          ( showFloor == "O")			{showFloor = "O";}
		else if ( showFloor == "A")			{showFloor = "A";}
		else					   			{showFloor = "B";}
	if 			( showWet == "W")			{showWet = "W";}
		else 								{showWet = "D";}
	if 			( factorHydraulics == "O")	{showHydraulics = "O";}
		else 								{showHydraulics ="C";}
	if          ( factorSurface == "O")		{showSurface = "O";}
		else if ( factorSurface == "G")		{showSurface = "G";}
		else if ( factorSurface == "P")		{showSurface = "P";}
		else    					   		{showSurface = "R";}
	if 			( factorMaterial == "S")	{showMaterial = "S";}
		else if ( factorMaterial == "W")	{showMaterial = "W";}
		else								{showMaterial = "C";}
	if 			( factorVeneer == "V")		{showVeneer = "V";}
		else 								{showVeneer = "E";}
	if 			( factorCurve == "C")		{showCurve = "C";} 
		else 								{showCurve = "S";}
	if 			( factorElement == "I")		{showElement = "I";}
		else 								{showElement = "N";}
	
	//update radio buttons
	if ( showPlane == "S") { document.getElementById("spCPS").checked = true;}
	if ( showPlane == "R") { document.getElementById("spCPR").checked = true;}
	
	if ( showFloor == "A") { document.getElementById("spCFA").checked = true;}
	if ( showFloor == "O") { document.getElementById("spCFO").checked = true;}
	if ( showFloor == "B") { document.getElementById("spCFB").checked = true;}
	
	if ( showWet == "W") { document.getElementById("spCWW").checked = true;}
	if ( showWet == "D") { document.getElementById("spCWD").checked = true;}
	
	if ( showHydraulics == "O") { document.getElementById("spCHO").checked = true;}
	if ( showHydraulics == "C") { document.getElementById("spCHC").checked = true;}
	
	if ( showSurface == "O") { document.getElementById("spSO").checked = true;}
	if ( showSurface == "G") { document.getElementById("spSG").checked = true;}
	if ( showSurface == "R") { document.getElementById("spSR").checked = true;}
	if ( showSurface == "P") { document.getElementById("spSP").checked = true;}

	if ( showMaterial == "S") { document.getElementById("spMS").checked = true;}
	if ( showMaterial == "W") { document.getElementById("spMW").checked = true;}
	if ( showMaterial == "C") { document.getElementById("spMC").checked = true;}
			
	if ( showVeneer == "V") { document.getElementById("spVV").checked = true;}
	if ( showVeneer == "E") { document.getElementById("spVE").checked = true;}
	
	if ( showCurve == "C") { document.getElementById("spCC").checked = true;}
	if ( showCurve == "S") { document.getElementById("spCS").checked = true;}
	
	if ( showElement == "I") { document.getElementById("spEI").checked = true;}
	if ( showElement == "N") { document.getElementById("spEN").checked = true;}
	
	var specName = "";
	
	specName = factorPlane + factorFloor + factorWet + factorHydraulics + factorSurface + factorMaterial + factorVeneer + factorCurve + factorElement ;
	
	if ( specName.length == 9 ) {
		document.getElementById('DownloadSpec').innerHTML = "<b>Download your spec!<br>(Coming soon... The letter code below is just a placeholder until we finish this widget.)<br>" + specName + "</b>";
	} else { document.getElementById('DownloadSpec').innerHTML = "Oops! Something went wrong.  Please re-enter your selection, and let us know if this problem persists.<br>" + specName + "</b>";
	}
	
}

//this toggles 4 global variables: showPlane (R,S), showFloor (A,O,B), showWet (W,D), showHydraulics (O,C)
function selectBiowallConfig() {

	var factorPlane = jQuery('input[name="configFactorPlane"]:checked').val();
	var factorFloor = jQuery('input[name="configFactorFloor"]:checked').val();
	var factorWet = jQuery('input[name="configFactorWet"]:checked').val();
	var factorHydraulics = jQuery('input[name="configFactorHydraulics"]:checked').val();
	
	//update global variables
	showPlane = factorPlane;
	showFloor = factorFloor;
	showWet = factorWet;
	showHydraulics = factorHydraulics;
	
	var configName = "";
	
	if ( factorPlane != undefined ) { configName += factorPlane; };
	if ( factorFloor != undefined ) { configName += factorFloor; };
	if ( factorWet != undefined ) { configName += factorWet; };
	if ( factorHydraulics != undefined ) { configName += factorHydraulics; };
	
	if ( configName.length == 4 ) {
		document.getElementById('configImage').src = configMediaPath + configName + '.png';
		var itemCount = biowallConfigData.length;
		for (var i = 0; i < itemCount; i++) {
			if ( biowallConfigData[i].Name == configName ) {
				document.getElementById('configLegendPane').innerHTML = biowallConfigData[i].Description;
				jQuery('#Cad').hide(); //this hide divs with ID CAD
				jQuery('#PDF').hide();
				jQuery('#Cad').fadeIn(6000);
				jQuery('#PDF').fadeIn(6000);
			}//end nested if
		}//end for
	}//end if
	
	//update the rest of the page
	//update the icons at the top of the divs below
	updateTroughIcons ();
	//change the image internal to each of the [mostly  hidden] trough divs
	updateTroughImages ();
	//check the boxes in the divs, all but one of which should be hidden
	updateTroughImageSelectors ();
	//update spec at bottom of page
	updateSpec();
	
}//end function

//page loads with 'O', and this switches which options show in each of the 8 divs
//toggles 3 global variables: showSurface (O,G,R,P), showMaterial (C,W,S), showVeneer (E,V)
//these 3 variables do not affect the configuration tool at the top
function TroughOptions (icon) {
	//hide all treatments
	jQuery('.TroughGallery').hide();
	jQuery('.TroughTreatment').hide();	
	//get single letter icon from argument
	var theTreatment = icon.charAt(4);
	//show only the selected treatment
	jQuery('#TroughGallery' + theTreatment).show(); 
	jQuery('#TroughTreatment' + theTreatment).show(); 
	//scroll to top of gallery
	var new_position = jQuery('#TroughGallery' + theTreatment).offset();
	window.scrollTo(new_position.left, (new_position.top - 140 ));
	
	//update only the selected global variables
	if ( theTreatment == 'O' ) { showSurface = "O"; }
	if ( theTreatment == 'G' ) { showSurface = "G"; }
	if ( theTreatment == 'R' ) { showSurface = "R"; }
	if ( theTreatment == 'P' ) { showSurface = "P"; }
	
	if ( theTreatment == 'C' ) { showMaterial = "C"; }
	if ( theTreatment == 'W' ) { showMaterial = "W"; }
	if ( theTreatment == 'S' ) { showMaterial = "S"; }
	
	if ( theTreatment == 'V' ) { showVeneer = "V"; }

	//update the whole page
	//change the imagein the divs below [even if hidden]
	updateTroughImages ();
	//set selections in all other [hidden] divs to match this div
	updateTroughImageSelectors ();
	//update icons at the top of the divs
	updateTroughIcons ();
	//update spec at bottom of page
	updateSpec();
	jQuery('.troughIconText').removeAttr("style");
	iconFormat (icon + 'text');
}

//deploys from checkboxes inside 4 of the 8 trough treatment divs
//toggles 2 global variables: showWet (W,D), showVeneer (E,V)
function changeTroughImage (imageTreatment) {
	
	//re-set global variables based on argument; this will re-set 1 variable, but the other should already be set
	if ( imageTreatment == 'W' ) {
		showWet = "W";
	} else if ( imageTreatment == 'D' ) {
		showWet = "D";
	} else if ( imageTreatment == 'E' ) {
		showVeneer = "E";
	} else if ( imageTreatment == 'V' ) {
		showVeneer = "V";
	}
	
	//update the image AND the rest of the page
	//change the image next to this (and the rest of the page)
	updateTroughImages ();
	//set selections in all other [hidden] divs to match this div
	updateTroughImageSelectors ();
	//update icons at the top of the divs
	updateTroughIcons ();
	//update the configuration tool at the top of the page
	updateConfigurationTool ();
	//update spec at bottom of page
	updateSpec();

}

/*GEOMETRY MAJOR TREATMENTS:
	C = curves
	E = edging
	I = Elevation Integration
	P = panels
	U = custom
	
GEOMETRY CONVENTIONS:
	geoGallery = class of all geo galleries,
	geoGallery_ = div, last letter is (C,E,I,P,U)
		[unitegallery geo_] = actual gallery, last letter is (O,G,R,P,C,W,S,V)
		
	geoTreatment = class of all geo treatment divs
	geoTreatment_ = div, last letter is (O,G,R,P,C,W,S,V)
*/

//page loads with 'O', and this switches which options show in each of the 5 divs
//toggles 2 global variables, showCurve (C,S) and showElement (I,N)
function geoOptions (icon) {
	//hide all treatments
	jQuery('.geoGallery').hide();
	jQuery('.geoTreatment').hide();	
	//get single letter icon from argument
	var theTreatment = icon.charAt(5);
	//show only the selected treatment
	jQuery('#geoGallery' + theTreatment).show(); 
	jQuery('#geoTreatment' + theTreatment).show(); 
	//format icon
	jQuery('.geometryIconText').removeAttr("style");
	iconFormat(icon + 'text');
	//scroll to top of gallery
	var new_position = jQuery('#geoGallery' + theTreatment).offset();
	window.scrollTo(new_position.left, (new_position.top - 240 ));
	
	//update only the affected global variables, this turns on, but does not turn off (turned off only in spec selector)
	if ( theTreatment == 'C' ) {
		showCurve = "C";
	} else if ( theTreatment == 'I' ) {
		showElement = "I";
	}
	
	//update the rest of the page
	updateSpec();
}

//this is limited in scope to a sub-div of the curves div.  It does not affect any global variables.
function curveOptions (icon) {
	//hide all options
	jQuery('.CurveTreatment').hide();
	//get last two letters of icon from argument
	curveRadius = icon.charAt(4) + icon.charAt(5);
	var theTreatment = curveRadius + curveInOut;
	//show only the selected treatment
	jQuery('#CurveTreatment' + theTreatment).show(); 
	//format icon
	jQuery('.curveIconText').removeAttr("style");
	iconFormat(icon + 'text');
	//alert('icon ' + icon + ' theTreatment ' + theTreatment + ' in/out ' + curveInOut + ' 4: ' + icon.charAt(4) + ' 5: ' + icon.charAt(5) );
		//scroll to top of gallery
	var new_position = jQuery('#CurveTreatment' + theTreatment).offset();
	window.scrollTo(new_position.left, (new_position.top - 150 ));
}

//this is limited in scope to a sub-div of the curves div.  It does not affect any global variables.
function curveInOutOption () {
	if ( curveInOut == "out" ) {curveInOut = "in";}
	else {curveInOut = "out";}
	jQuery('.CurveTreatment').hide();
	jQuery('#CurveTreatment' + curveRadius + curveInOut).show();
	document.getElementById('iconIntext').innerHTML = curveInOut + 'side radius';
	iconFormat('iconIn');
	var new_position = jQuery('#CurveTreatment' + curveRadius + curveInOut).offset();
	window.scrollTo(new_position.left, (new_position.top - 150 ));
}

//this is the only function that affects all 9 global variables
function selectSpec() {

	var factorPlane = jQuery('input[name="specFactorPlane"]:checked').val();
	var factorFloor = jQuery('input[name="specFactorFloor"]:checked').val();
	var factorWet = jQuery('input[name="specFactorWet"]:checked').val();
	var factorHydraulics = jQuery('input[name="specFactorHydraulics"]:checked').val();
	var factorSurface = jQuery('input[name="specFactorSurface"]:checked').val();
	var factorMaterial = jQuery('input[name="specFactorMaterial"]:checked').val();
	var factorVeneer = jQuery('input[name="specFactorVeneer"]:checked').val();
	var factorCurve = jQuery('input[name="specFactorCurve"]:checked').val();
	var factorElement = jQuery('input[name="specFactorElement"]:checked').val();
	
	//update global variables, applies to all except material, curve, element
	//this doesn't do a straight match, as it corrects to enter values which might be empty
	if 			( factorPlane == "S")		{showPlane = "S";}
		else 								{showPlane = "R";}
	if          ( factorFloor == "O")			{showFloor = "O";}
		else if ( factorFloor == "A")			{showFloor = "A";}
		else					   			{showFloor = "B";}
	if 			( factorWet == "W")			{showWet = "W";}
		else 								{showWet = "D";}
	if 			( factorHydraulics == "O")	{showHydraulics = "O";}
		else 								{showHydraulics ="C";}
	if          ( factorSurface == "O")		{showSurface = "O";}
		else if ( factorSurface == "G")		{showSurface = "G";}
		else if ( factorSurface == "P")		{showSurface = "P";}
		else    					   		{showSurface = "R";}
	if 			( factorMaterial == "S")	{showMaterial = "S";}
		else if ( factorMaterial == "W")	{showMaterial = "W";}
		else								{showMaterial = "C";}
	if 			( factorVeneer == "V")		{showVeneer = "V";}
		else 								{showVeneer = "E";}
	if 			( factorCurve == "C")		{showCurve = "C";} 
		else 								{showCurve = "S";}
	if 			( factorElement == "I")		{showElement = "I";}
		else 								{showElement = "N";}

	var specName = "";
	
	specName = factorPlane + factorFloor + factorWet + factorHydraulics + factorSurface + factorMaterial + factorVeneer + factorCurve + factorElement ;
	
	if ( specName.length == 9 ) {
		document.getElementById('DownloadSpec').innerHTML = "<b>Download your spec!<br>(Coming soon... The letter code below is just a placeholder until we finish this widget.)<br>" + specName + "</b>";
	} else { document.getElementById('DownloadSpec').innerHTML = "Oops! Something went wrong.  Please re-enter your selection, and let us know if this problem persists.<br>" + specName + "</b>";
	}
	
	//update the rest of the page
	//update the icons at the top of the divs below
	updateTroughIcons ();
	//change the image internal to each of the [mostly  hidden] trough divs
	updateTroughImages ();
	//check the boxes in the divs, all but one of which should be hidden
	updateTroughImageSelectors ();
	//update configuration tool
	updateConfigurationTool();
	
}//end function


//load page with all trough divs hidden except 'O' and geometry divs except 'C' and curve divs hidden except 15
jQuery(document).ready(function() {
	jQuery('.TroughGallery').hide();
	jQuery('.TroughTreatment').hide();
	jQuery('.CurveTreatment').hide();
	jQuery('#TroughGalleryO').show();
	jQuery('#TroughTreatmentO').show();
	iconFormat('iconO');
	jQuery('.geoGallery').hide();
	jQuery('.geoTreatment').hide();
	jQuery('#geoGalleryC').show();
	jQuery('#geoTreatmentC').show();
	jQuery('.CurveTreatment').hide();
	jQuery('#CurveTreatment03out').show(); 
	iconFormat('iconIn');
}); // end of ready()