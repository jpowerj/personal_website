function writeHeader(curPage) {
	document.write("<div id=\"header\"><div id=\"header-content\">");
	document.write("<h1 id=\"logo\"><a href=\"index.php\" title=\"\">Jeffrey<span class=\"gray\">Power</span>Jacobs</a></h1>");
	document.write("<h2 id=\"slogan\">Political Science PhD Student, Columbia University</h2>");
	document.write("<!-- Menu Tabs -->");
	document.write("<ul>");
	document.write("<li><a href=\"./\"" + ((curPage == "home") ? "id=\"current\"" : "") + ">Home</a></li>");
	document.write("<li><a href=\"./JeffJacobsCV_2018-03-22.pdf\">CV</a></li>");
	document.write("<li><a href=\"./research.html\"" + ((curPage == "research") ? "id=\"current\"" : "") + ">Research</a></li>");
	document.write("<li><a href=\"./teaching.html\"" + ((curPage == "teaching") ? "id=\"current\"" : "") + ">Teaching</a></li>");
	document.write("<li><a href=\"http://jpowerj.wordpress.com/\">Blog</a></li>");
	document.write("</ul>");
	document.write("</div></div>");
}

function writeFooter() {
	document.write("<div id=\"footer\"><div id=\"footer-content\">");
	document.write("<p>");
	document.write("&copy; 2018 Jeff Jacobs, template by <a href=\"http://www.styleshout.com/\">styleshout</a>");
	document.write("</p>");
	document.write("</div></div>");
}