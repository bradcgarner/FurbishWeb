var pluginPath = '/wp-content/plugins/imageswitcher/';
var HelpTopic = 'Pdf';
var HelpPlatformBrowser = 'Chrome';
var HelpPlatformDevice='Win';


jQuery(document).ready(function() {
	jQuery('.ContentContainer').hide();
	jQuery('.HelpContent').hide();
	jQuery('.UseBrowserArrows').hide();  
	jQuery('.UseDeviceArrows').hide();  
	jQuery('.HelpTopicArrows').hide();  
	jQuery('.HelpPlatformUseBrowserArrows').hide();  
	jQuery('.HelpPlatformUseDeviceArrows').hide();  
	jQuery('.UseBrowser').hide();  
			jQuery('#IntroContent.ContentContainer').show();
			document.getElementById('introtitle').style.color = "#AA3F00";
			document.getElementById('IntroTop').style.backgroundColor = "#aaaaaa";

}); // end of ready()


function UpdateHelpContent(){
	
	jQuery('.HelpContent').hide();
	jQuery('#'+ 'Help' + HelpTopic + HelpPlatformBrowser + HelpPlatformDevice + 'Wrap').show();
	jQuery('#'+ 'Help' + HelpTopic + HelpPlatformBrowser + HelpPlatformDevice + 'Wrap').show();
	
}

function ContentSwitcher (ContentDivId) {
    jQuery('.ContentContainer').hide();
	jQuery('#' + ContentDivId).show(); 
	if (ContentDivId == 'HelpContentContainer') {
		UpdateHelpContent();
		jQuery ('#' + 'HelpTopic' + HelpTopic + 'Arrow').show();
		jQuery ('#' + 'HelpPlatformUseBrowser' + HelpPlatformBrowser + 'Arrow').show();
		jQuery ('#' + 'HelpPlatformUseDevice' + HelpPlatformDevice + 'Arrow').show();
		
		
		document.getElementById('IntroTop').style.backgroundColor = "#dddddd";
		document.getElementById('UseTop').style.backgroundColor = "#dddddd";
		document.getElementById('HelpTop').style.backgroundColor = "#aaaaaa";
		document.getElementById('helptitle').style.color = "#AA3F00";
		document.getElementById('usetitle').style.color = "#333333";
		document.getElementById('introtitle').style.color = "#333333";

		}
				
		if (ContentDivId == 'UseContent') {
		
		document.getElementById('IntroTop').style.backgroundColor = "#dddddd";
		document.getElementById('UseTop').style.backgroundColor = "#aaaaaa";
		document.getElementById('HelpTop').style.backgroundColor = "#dddddd";
		document.getElementById('helptitle').style.color = "#333333";
		document.getElementById('usetitle').style.color = "#AA3F00";
		document.getElementById('introtitle').style.color = "#333333";
		
		jQuery ('#' + 'UseBrowserChromeArrow').show();
		var defaultbrowsercaption = 'Chrome 48 or higher on desktops and laptops or Android 5.x and Android 6.x';
		document.getElementById('UseBrowserText').innerHTML = defaultbrowsercaption ;
		
		}
		
		if (ContentDivId == 'IntroContent') {
		document.getElementById('IntroTop').style.backgroundColor = "#aaaaaa";
		document.getElementById('UseTop').style.backgroundColor = "#dddddd";
		document.getElementById('HelpTop').style.backgroundColor = "#dddddd";
		document.getElementById('helptitle').style.color = "#333333";
		document.getElementById('usetitle').style.color = "#333333";
		document.getElementById('introtitle').style.color = "#AA3F00";
		

		}
	var new_position = jQuery('#' + ContentDivId).offset();
		window.scrollTo(new_position.left, (new_position.top - 200 ));
}

//function DeviceSwitcher (DeviceDivId) {
	//     if(DeviceDivId == 'Phone')    {var caption = 'Mobile Phone - Not recommended due to screen size';}
	//else if(DeviceDivId == 'Tablet')   {var caption = 'Tablet - Recommended with WiFi';}
	//else if(DeviceDivId == 'Desk')  {var caption = 'Desktop or Laptop - Recommended with high speed internet';}
	//else if(DeviceDivId == '3G')       {var caption = '3G or Lower - Not recommended due to speed';}
	//else if(DeviceDivId == 'Wifi')     {var caption = 'WiFi - Recommended with tablet or laptop';}
	//else if(DeviceDivId == 'HiSpeed')  {var caption = 'High Speed Internet - Recommended with desktop or laptop computer';}
	//document.getElementById('UseDeviceText').innerHTML = caption ;
	//jQuery('.UseDeviceArrows').hide();  
 //	jQuery( '#' + 'UseDevice' + DeviceDivId +  'Arrow').show(); }

function BrowserSwitcher (BrowserDivId) {
	    if(BrowserDivId == 'Chrome')    {var caption = 'Chrome 48 or higher on desktops and laptops or Android 5.x and Android 6.x';}
	else if(BrowserDivId == 'Ie')   {var caption = 'Internet Explorer 11.x on desktops and laptops.';}
	else if(BrowserDivId == 'Edge')  {var caption = 'Microsoft Edge 25 or higher on desktops and laptops.';}
	else if(BrowserDivId == 'Safari')       {var caption = 'Safari 9.x or higher on desktops and laptops or iOS 9.x';}
	
	document.getElementById('UseBrowserText').innerHTML = caption ;
	jQuery('.UseBrowserArrows').hide();  
 	jQuery( '#' + 'UseBrowser' + BrowserDivId +  'Arrow').show(); 
}



function HelpSwitcher (HelpSelector, Type){
	
	// HelpSelector will be 'Topic', 'PlatformUseBrowser', or 'PlatformUseDevice'
	// Type will be 'Pdf', 'Web', 'General', 'Chrome', 'Ie', 'Edge', 'Safari', 'Win', 'Mobile', or 'Mac'
	
	jQuery ('.'+'Help' + HelpSelector + 'Arrows').hide();
	jQuery ('#' + 'Help' + HelpSelector + Type + 'Arrow').show();
	
		if (HelpSelector == 'Topic') {HelpTopic = Type;}
		else if (HelpSelector == 'PlatformUseBrowser') {HelpPlatformBrowser = Type;}
		else if (HelpSelector == 'PlatformUseDevice') {HelpPlatformDevice = Type;}
			
	if (Type=='General'){
			jQuery('#HelpPlatformWrap').hide();
			jQuery('#HelpDeviceWrap').hide();
			jQuery('.HelpContent').hide();
			jQuery('#'+ 'HelpGeneralWrap').show();
	}
		else {
			UpdateHelpContent();
			jQuery('#HelpPlatformWrap').show();
			jQuery('#HelpDeviceWrap').show();
		}
				
}