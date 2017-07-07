//BOTTOM MENU APPLIES TO ALL BWDG

var pluginPath = '/wp-content/plugins/imageswitcher/';

jQuery(document).ready(function() {

	var NoHMenu = "<div id=\"BW\" style=\"display: inline-block; text-align: center; margin-right: 3px;\"><a href=\"http://furbishco.com/biowall-vegetated-wall\"><img src=\"http://furbishco.com/wp-content/uploads/2016/10/BioWall_home_menu.png\" alt=\"BioWall Home\" /></a><br><a href=\"http://furbishco.com/biowall-vegetated-wall\">BioWall</a></div>" ;
	NoHMenu += "<div id=\"Checklist\" style=\"display: inline-block; text-align: center; margin-right: 3px;\"><a href=\"http://furbishco.com/biowall-vegetated-wall/biowall-design-guide\"><img src=\"http://furbishco.com/wp-content/uploads/2016/10/Checklist_menu.png\" alt=\"BioWall Design Guide Checklist\" /></a><br><a href=\"http://furbishco.com/biowall-vegetated-wall/biowall-design-guide\">Cklist</a></div>"; 
	NoHMenu += "<div id=\"Configuration\" style=\"display: inline-block; text-align: center; margin-right: 3px;\"><a href=\"http://furbishco.com/biowall-vegetated-wall/configuration\"><img src=\"http://furbishco.com/wp-content/uploads/2016/10/Configuration-menu.png\" alt=\"BioWall Configuration\" /></a><br><a href=\"http://furbishco.com/biowall-vegetated-wall/configuration\">Config</a></div>" ; 
	NoHMenu += "<div id=\"Controls\" style=\"display: inline-block; text-align: center; margin-right: 3px;\"><a href=\"http://furbishco.com/biowall-vegetated-wall/controls\"><img src=\"http://furbishco.com/wp-content/uploads/2016/10/Controls_menu.png\" alt=\"BioWall Controls\" /></a><br><a href=\"http://furbishco.com/biowall-vegetated-wall/controls\">Controls</a></div>" ;
	NoHMenu += "<div id=\"Lighting\" style=\"display: inline-block; text-align: center; margin-right: 3px;\"><a href=\"http://furbishco.com/biowall-vegetated-wall/lighting\"><img src=\"http://furbishco.com/wp-content/uploads/2016/10/Lighting_menu.png\" alt=\"Living Green Wall Lighting\" /></a><br><a href=\"http://furbishco.com/biowall-vegetated-wall/lighting\">Light</a></div>" ;
	NoHMenu += "<div id=\"Plants\" style=\"display: inline-block; text-align: center; margin-right: 3px;\"><a href=\"http://furbishco.com/biowall-vegetated-wall/biowall/plants\"><img src=\"http://furbishco.com/wp-content/uploads/2016/10/Plants_menu.png\" alt=\"Living Green Wall Plants\" /></a><br><a href=\"http://furbishco.com/biowall-vegetated-wall/biowall/plants\">Plants</a></div>" ;
	NoHMenu += "<div id=\"Stewardship\" style=\"display: inline-block; text-align: center;\"><a href=\"http://furbishco.com/biowall-vegetated-wall/stewardship/\"><img src=\"http://furbishco.com/wp-content/uploads/2016/10/Stewardship-menu.png\" alt=\"Living Green Wall Stewardship\" /></a><br><a href=\"http://furbishco.com/biowall-vegetated-wall/stewardship/\">Care</a></div>" ;

	var BotMenu = "&nbsp;<br>";
	BotMenu += NoHMenu ;

	BottomMenu = document.getElementById('BWDGBottomMenu');
	BottomMenu .innerHTML = BotMenu ;
	BottomMenu.style.cssFloat = "right";
	
});