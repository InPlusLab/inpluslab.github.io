var navbar = document.getElementById("navbar");
var nh = 0;
var ny = navbar;

while(ny) {
	nh += ny.offsetTop;
	ny = ny.offsetParent;
};

window.onscroll = function() {
	var s = document.body.scrollTop || document.documentElement.scrollTop;
	if (s > nh) {
		navbar.className = "navbar navbar-inverse navbar-fixed-top";
	} else {
		navbar.className = "navbar navbar-inverse navbar-static-top";
	};
};