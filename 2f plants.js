var pluginPath = '/wp-content/plugins/imageswitcher/';
var plantMediaPath = "/wp-content/uploads/2016/10/";
var speciesCt = 0;
var speciesLargeImages = [] ;
var speciesThumbImages = [] ;
// initialize filter tags at 'All Plants'
var tagA = 'Y' ;
var tagX = 'N' ;
var tagC = 'N' ;
var tagF = 'N' ;
var tagL = 'N' ;
var tagN = 'N' ;
var tagT = 'N' ;
//initialize gallery counter (global because used in multiple functions)
var currentRowId = 1;
var irows = 0;
var speciesData = null;

//BUILD GALLERY
function iconFormat (iconName) {
		document.getElementById(iconName).style.color = "#75a405";
		document.getElementById(iconName).style.fontWeight = "bold";
		document.getElementById(iconName).style.textDecoration = "underline";
		document.getElementById(iconName).style.fontSize = "14px";
}

function buildGallery (iconId) {
	var gallery = [];
	//GET TAG LETTER AND UPDATE TAGS.
	var iconLetter = iconId.charAt(4); //id of icons should be iconA, iconX, etc.  corresponding text should be iconAtext, iconXtext, etc.
	if   	(iconLetter == 'A' )			    {tagA = 'Y'; tagX = 'N'; tagC = 'N'; tagF = 'N'; tagL = 'N'; tagN = 'N'; tagT = 'N';}
	else if (iconLetter == 'X' && tagX == 'Y' ) {tagX = 'N';}
	else if (iconLetter == 'X' && tagX == 'N' ) {tagX = 'Y';}
	else if (iconLetter == 'C' && tagC == 'Y' ) {tagC = 'N';}
	else if (iconLetter == 'C' && tagC == 'N' ) {tagC = 'Y'; tagF = 'N';}
	else if (iconLetter == 'F' && tagF == 'Y' ) {tagF = 'N';}
	else if (iconLetter == 'F' && tagF == 'N' ) {tagF = 'Y'; tagC = 'N';}
	else if (iconLetter == 'L' && tagL == 'Y' ) {tagL = 'N';}
	else if (iconLetter == 'L' && tagL == 'N' ) {tagL = 'Y';}
	else if (iconLetter == 'N' && tagN == 'Y' ) {tagN = 'N';}
	else if (iconLetter == 'N' && tagN == 'N' ) {tagN = 'Y';}
	else if (iconLetter == 'T' && tagT == 'Y' ) {tagT = 'N';}
	else if (iconLetter == 'T' && tagT == 'N' ) {tagT = 'Y';}
	
	//FILTER SPECIESDATA BASED ON TAGS TO CREATE GALLERY
	for (var i = 0; i < speciesCt ; i++) {
		thePlant = speciesData[i];
		if (
			((tagX != 'Y') || (tagX == 'Y' && thePlant.tagX == 'Y')) &&
			((tagC != 'Y') || (tagC == 'Y' && thePlant.tagC == 'Y')) &&
			((tagF != 'Y') || (tagF == 'Y' && thePlant.tagF == 'Y')) &&
			((tagL != 'Y') || (tagL == 'Y' && thePlant.tagL == 'Y')) &&
			((tagN != 'Y') || (tagN == 'Y' && thePlant.tagN == 'Y')) &&
			((tagT != 'Y') || (tagT == 'Y' && thePlant.tagT == 'Y'))
			) {
				gallery.push(thePlant);
		}
	}
	var galleryCt = gallery.length;

	var ww = jQuery(window).width();
	var wh = jQuery(window).height();
	var margin = 50;
	var thw = 100; //thumbnail width
	var thh = 1 * thw; //thumbnail height
	var ipr = Math.floor((ww-margin)/thw); //images per row
	if ( ipr > 9 ) { ipr = 9 ; };

	irows = Math.ceil(galleryCt/ipr); //image rows

	var galleryHTML = "" ;
	var imagesUsed = 1 ;
	var c = 1 ;
	var r = 1 ;
	
	while ( c <= irows ) {
		galleryHTML += "<div id = \"containerDiv" + c + "\" class=\"containerClass\"> " 
					+ "<div id = \"rowDiv" + c + "\" class=\"rowClass\" style=\"text-align: center; display: block;\"> " ;
		while ( r <= ipr && imagesUsed <= galleryCt ) {
			imageId=imagesUsed-1;
			galleryHTML += "<img src=\"" + plantMediaPath + gallery[imageId].thumbImage + ".gif\" class=\"thumbClass\" id=\"" + (imageId) + "\" onclick=\"openGalleryImage('" + gallery[imageId].largeImage + ".png'," + c + ", '" + gallery[imageId].Caption + "')\" \>" ;
			imagesUsed++ ;
			r++ ;
		} //end r (row) while loop
		r = 1 //reset r for the next run
		galleryHTML += "</div> <div id = \"imageDiv" + c + "\" class=\"imageClass\" style=\"background-color: #999999; text-align: center; display: none;\"> " 
					+ "<img src=\"" + plantMediaPath + gallery[(c*ipr)-ipr].largeImage + ".png\" id=\"theImage" + c + "\" style=\"padding:20px;\"> " 
					+ "<div id=\"captionDiv" + c + "\" class=\"captionClass\" style=\"text-align: center;\">" + gallery[(c*ipr)-ipr].Caption + "</div><!--end captionDiv-->"
					+ "</div><!--end imageDiv--> </div><!--end container-->" ;
		c++ ;
	} //end c (container) while loop
	
	document.getElementById('plantGallery').innerHTML = galleryHTML ;
	
	//FORMAT ICON
	jQuery('.plantIconText').removeAttr("style");
	if ( tagA == 'Y' && tagX == 'N' && tagC == 'N' && tagF == 'N' && tagL == 'N' && tagN == 'N' && tagT == 'N' )
					   {iconFormat('iconAtext');}
	if ( tagX == 'Y' ) {iconFormat('iconXtext');}
	if ( tagC == 'Y' ) {iconFormat('iconCtext');}
	if ( tagF == 'Y' ) {iconFormat('iconFtext');}
	if ( tagL == 'Y' ) {iconFormat('iconLtext');}
	if ( tagN == 'Y' ) {iconFormat('iconNtext');}
	if ( tagT == 'Y' ) {iconFormat('iconTtext');}
}


//PRELOAD IMAGES
function getSpeciesImages () {
	for (var i = 0 ; i < speciesCt ; i++ ) {
		speciesLargeImages.push(speciesData[i].largeImage);
		speciesThumbImages.push(speciesData[i].thumbImage);
	}
}

jQuery.preloadImages = function() {
	for (var i = 0; i < arguments.length; i++ ) {
		jQuery('<img />').attr('src', plantMediaPath + arguments[i]);
  }
}

jQuery.ajax({
  url: pluginPath + 'biowallPlantSpecies.json',
  beforeSend: function(xhr){
    if (xhr.overrideMimeType)
    {
      xhr.overrideMimeType('application/json');
    }
  },
  dataType: 'json',
  success: function( data ) {
	  speciesData = data;
	  speciesCt = speciesData.length;
	  getSpeciesImages();
	  jQuery.preloadImages(speciesLargeImages);
	  jQuery.preloadImages(speciesThumbImages);

	  buildGallery('iconA');
	}
});

function openGalleryImage(imageFile, rowId, caption ){
	
	//check to see if large container is already open
	if ( currentRowId != rowId ) {
		//if not, close all other containers and open current container
		for ( i=0+1; i < irows + 1; i++ ) {
			document.getElementById("imageDiv" + i).style.display = "none";
		}
	}
	
	//container is already open here
	//switch image src
	document.getElementById("theImage" + rowId).src = plantMediaPath + "/" + imageFile;
	document.getElementById("captionDiv" + rowId).innerHTML = caption ;
	document.getElementById("imageDiv" + rowId).style.display = "block";
	jQuery('html, body').animate({
		scrollTop: jQuery("#rowDiv" + rowId).offset().top
	}, 200);
	currentRowId = rowId;	
}