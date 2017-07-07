<?php

/*
Plugin Name: RemoteITS Image Switcher
Description: For Biowall Config Script
Version: 1.0
Author: Remote IT Solutions, LLC
Author URI: http://www.remoteits.com
*/

/*
Checklist = 4401     Config = 1313     Mini = 4639      Controls = 4311     Lighting = 4440     Plants = 1315     Stewardship = 1320     Manual = 5520     Test = 5454
*/

function biowallDG_JS(){
   
       global $post;
		if( $post->ID=="4401" ) {
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDGchecklist.js\" type=\"text/javascript\"></script>";
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDG.js\" type=\"text/javascript\"></script>";
	   }
	   
		elseif ( $post->ID=="1313"){ 
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDGconfig.js\" type=\"text/javascript\"></script>";
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDG.js\" type=\"text/javascript\"></script>";
	   }
	
			elseif ( $post->ID=="4639"){ 
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDG.js\" type=\"text/javascript\"></script>";
	   }

			elseif ($post->ID=="4311") {
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDGcontrol.js\" type=\"text/javascript\"></script>";
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDG.js\" type=\"text/javascript\"></script>";
	   }
	   
			elseif ($post->ID=="4440" ) {
 			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDGlight.js\" type=\"text/javascript\"></script>";
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDG.js\" type=\"text/javascript\"></script>";
	   }

			elseif ( $post->ID=="1315") {
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDGplant.js\" type=\"text/javascript\"></script>";
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDG.js\" type=\"text/javascript\"></script>";
	   }

			elseif ($post->ID=="1320" ) {
			echo "<script src=\"" . plugins_url() . "/imageswitcher/BWDG.js\" type=\"text/javascript\"></script>";
	   }

			elseif ($post->ID=="5520" ) {
			echo "<script src=\"" . plugins_url() . "/imageswitcher/manual.js\" type=\"text/javascript\"></script>";
	   }

			elseif ($post->ID=="5454" ) {
			echo "<script src=\"" . plugins_url() . "/imageswitcher/test.js\" type=\"text/javascript\"></script>";
	   }
}

add_action( 'wp_head', 'biowallDG_JS' );

?>