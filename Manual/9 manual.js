jQuery(document).ready(function() {
	 jQuery('.paragraph').hide(); //this hide divs with class paragraph
	jQuery('.header5').click(function() { //this adds the click function to all questions
		var $paragraph= jQuery(this).next('.paragraph'); //this sets var $paragraph to the div of the next paragraph down the page
		if ($paragraph.is(':hidden')) {
			$paragraph.slideDown();
			jQuery(this).css("color","#75a405");
		} else {
		$paragraph.slideUp();
		jQuery(this).css("color", "#999999");
		}
	}); //end click
}); // end of ready()