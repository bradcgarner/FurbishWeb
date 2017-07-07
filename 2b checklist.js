var pluginPath = '/wp-content/plugins/imageswitcher/';

function FAQactivate() {
	jQuery('.answer').hide(); //this hide divs with class answer
	jQuery('.question').click(function() { //this adds the click function to all questions
		var $answer = jQuery(this).next('.answer'); //this sets var $answer to the div of the next answer class down the page
		if ($answer.is(':hidden')) {
			$answer.slideDown();
			jQuery(this).css("color","#75a405");
		} else {
		$answer.slideUp();
		jQuery(this).css("color", "#999999");
		}
	}); //end click
}

jQuery(document).ready (function(){
FAQactivate();
});