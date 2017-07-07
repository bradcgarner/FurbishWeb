var pluginPath = '/wp-content/plugins/imageswitcher/';

jQuery(document).ready(function() {
	jQuery('.light3Divs').hide();
}); // end of ready()

function iconFormat (iconName) {
		document.getElementById(iconName).style.color = "#75a405";
		document.getElementById(iconName).style.fontWeight = "bold";
		document.getElementById(iconName).style.textDecoration = "underline";
		document.getElementById(iconName).style.fontSize = "14px";
}

function lightSwitcher (lightDivId) {
	jQuery('.light3Divs').hide();  
	jQuery('#' + lightDivId).show(); 
	jQuery('.lightIconText').removeAttr("style");
	iconFormat ( lightDivId + 'icon' )
	var new_position = jQuery('#' + lightDivId).offset();
	window.scrollTo(new_position.left, (new_position.top - 30 ));
}