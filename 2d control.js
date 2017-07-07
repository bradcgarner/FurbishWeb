var pluginPath = '/wp-content/plugins/imageswitcher/';

jQuery.preloadImages = function() {
	var controlMediaPath = '/wp-content/uploads/2016/10/BioWall-Controller-';
	for (var i = 0; i < arguments.length; i++) {
    jQuery('<img />').attr('src', controlMediaPath + arguments[i]);
  }
}

jQuery.preloadImages('3048-e.png', '3048-i.png', '2460-e.png', '2460-i.png', '2460-p.png', '3527-e.png', '3527-i.png', '3527-co.png', '3527-cf.png', '4872-e.png', '4872-i.png');

var biowallControlData = null;

jQuery.ajax({
  url: pluginPath + 'biowallControl.json',
  beforeSend: function(xhr){
    if (xhr.overrideMimeType)
    {
      xhr.overrideMimeType('application/json');
    }
  },
  dataType: 'json',
  success: function( data ) {
	  biowallControlData = data;
	}
});

function selectControl() {

	var factorControl = jQuery('input[name="factorControl"]:checked').val();

	var configName = "";
	
	if ( factorControl != undefined ) { configName += factorControl; };
	
	if ( configName.length == 4 ) {
		var itemCount = biowallControlData.length;
		for (var i = 0; i < itemCount; i++) {
			if ( biowallControlData[i].Name == configName ) {
				document.getElementById('ControlPane').innerHTML = biowallControlData[i].Description;
				var new_position = jQuery('#Selector').offset();
				window.scrollTo(new_position.left, (new_position.top - 100 ));
			}
		}
	}
}