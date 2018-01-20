<?php
/**
 * Template Name: BWDG Template
 * The template for displaying the BioWall Design Guide pages.
 *
 * lambda framework v 2.1
 * by www.unitedthemes.com
 * since lambda framework v 1.0
 */

$meta_sidebar = lambda_return_meta('page');
$meta_sidebar = (isset($meta_sidebar['sidebar'])) ? $meta_sidebar['sidebar'] : get_option_tree('select_sidebar');

//includes the header.php
get_header('bwdg');
?>

<style>

#content-wrap{
	padding-top:2px;
}

.thumbClass{
	padding-right:2px;
}

@media only screen and (max-width: 960px) {
	
	#checklistImage {
	display:none;
	}
		
	#ConfigMenu {
	max-width:940px !important;
	}
	
	#ConfigSelector {
	max-width:940px !important;
	}

	#ConfigAlso {
	display:none;
	}
	
	#controltopleft {
	max-width:940px !important;
	}
	
	#controltopimage {
	float: none !important;
	}

	#lightingtopleft {
	max-width:940px !important;
	}
	
	#lightingtriplex {
	clear:left;
	}
	
	#planttopleft {
	max-width:940px !important;
	}
	
	#planttopimage {
	float: none !important;
	}
	
	.stewardship.container {
	max-width: 940px !important;
	}
}
</style>

<?php

//includes the template-part-slider.php
get_template_part( 'template-part', 'slider' );

//includes the template-part-teaser.php
get_template_part( 'template-part', 'teaser' );

//set column layout depending if user wants to display a sidebar
if($meta_sidebar != UT_THEME_INITIAL.'sidebar_none') {

	lambda_before_content($columns='');
	
} elseif($meta_sidebar == UT_THEME_INITIAL.'sidebar_none') {
	
	lambda_before_content($columns='sixteen');
	
}

//the content loop
get_template_part( 'loop', 'page' );

//content closer - this function can be found in functions/theme-layout-functions.php line 56-61
lambda_after_content();

//include the sidebar-page.php
if(empty($columns))
get_sidebar();

//includes the footer.php
get_footer();
?>