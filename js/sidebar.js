var Getid = function(id) {
	return document.getElementById(id);
};

var navbar = Getid("navbar")
var sidebar =  Getid("sidebar");
var item1 = Getid("item1");
var item2 = Getid("item2");
var item3 = Getid("item3");
var item4 = Getid("item4");
var item5 = Getid("item5");
var item6 = Getid("item6");
var item7 = Getid("item7");
var item8 = Getid("item8");
var item9 = Getid("item9");
var item10 = Getid("item10");
var item11 = Getid("item11");
var item12 = Getid("item12");
var item13 = Getid("item13");

var H = 0;
var Y = sidebar;
var nh = 0;
var ny = navbar;

while(Y) {
	H += Y.offsetTop;
	Y = Y.offsetParent;
	nh += ny.offsetTop;
	ny = ny.offsetParent;
};

var ItemActive = function(item) {
	item1.className = "list-group-item";
	item2.className = "list-group-item";
	item3.className = "list-group-item";
	item4.className = "list-group-item";
	item5.className = "list-group-item";
	item6.className = "list-group-item";
	item7.className = "list-group-item";
	item8.className = "list-group-item";
	item9.className = "list-group-item";
	item10.className = "list-group-item";
	item11.className = "list-group-item";
	item12.className = "list-group-item";
	item13.className = "list-group-item";

	switch(item) {
		case item1:
			item1.className = "list-group-item active";
			break;
		case item2:
			item2.className = "list-group-item active";
			break;
		case item3:
			item3.className = "list-group-item active";
			break;
		case item4:
			item4.className = "list-group-item active";
			break;
		case item5:
			item5.className = "list-group-item active";
			break;
		case item6:
			item6.className = "list-group-item active";
			break;
		case item7:
			item7.className = "list-group-item active";
			break;
		case item8:
			item8.className = "list-group-item active";
			break;
		case item9:
			item9.className = "list-group-item active";
			break;
		case item10:
			item10.className = "list-group-item active";
			break;
		case item11:
			item11.className = "list-group-item active";
			break;
		case item12:
			item12.className = "list-group-item active";
			break;
		case item13:
			item13.className = "list-group-item active";
			break;
	}
};

window.onscroll = function() {
	var s = document.body.scrollTop || document.documentElement.scrollTop;
	if (s > nh) {
		navbar.className = "navbar navbar-inverse navbar-fixed-top";
	} else {
		navbar.className = "navbar navbar-inverse navbar-static-top";
	};

	if (s > H) {
		sidebar.className = "col-lg-3 col-md-3 col-xs-3 col-sm-3 sidebar-offcanvas";
		sidebar.style.top = (s - H + 120) + "px";
	} else {
		sidebar.className = "col-lg-3 col-md-3 col-xs-3 col-sm-3 sidebar-offcanvas";
		sidebar.style.top = "0px";
	};
	if (s < Getid("title12").offsetTop) {
		ItemActive(item13);
	} else if (s > Getid("title12").offsetTop && s < Getid("title11").offsetTop) {
		ItemActive(item12);
	} else if (s > Getid("title11").offsetTop && s < Getid("title10").offsetTop) {
		ItemActive(item11);
	} else if (s > Getid("title10").offsetTop && s < Getid("title9").offsetTop) {
		ItemActive(item10);
	} else if (s > Getid("title9").offsetTop && s < Getid("title8").offsetTop) {
		ItemActive(item9);
	} else if (s > Getid("title8").offsetTop && s < Getid("title7").offsetTop) {
		ItemActive(item8);
	} else if (s > Getid("title7").offsetTop && s < Getid("title6").offsetTop) {
		ItemActive(item7);
	} else if (s > Getid("title6").offsetTop && s < Getid("title5").offsetTop) {
		ItemActive(item6)
	} else if (s > Getid("title5").offsetTop && s < Getid("title4").offsetTop) {
		ItemActive(item5);
	} else if (s > Getid("title4").offsetTop && s < Getid("title3").offsetTop) {
		ItemActive(item4);
	} else if (s > Getid("title3").offsetTop && s < (Getid("title3").offsetTop + 180)) {
		ItemActive(item3);
	} else if (s >= (Getid("title3").offsetTop + 180) && s < (Getid("title3").offsetTop + 300)) {
		ItemActive(item2);
	} else if (s >= (Getid("title3").offsetTop + 300) && s < Getid("title1").offsetTop) {
		ItemActive(item1);
	};
};

var Goto = function(item) {
	switch(item) {
		case item1:
			window.scrollTo(0, Getid("title1").offsetTop);
			break;
		case item2:
			window.scrollTo(0, Getid("title2").offsetTop);
			break;
		case item3:
			window.scrollTo(0, Getid("title3").offsetTop);
			break;
		case item4:
			window.scrollTo(0, Getid("title4").offsetTop);
			break;
		case item5:
			window.scrollTo(0, Getid("title5").offsetTop);
			break;
		case item6:
			window.scrollTo(0, Getid("title6").offsetTop);
			break;
		case item7:
			window.scrollTo(0, Getid("title7").offsetTop);
			break;
		case item8:
			window.scrollTo(0, Getid("title8").offsetTop);
			break;
		case item9:
			window.scrollTo(0, Getid("title9").offsetTop);
			break;
		case item10:
			window.scrollTo(0, Getid("title10").offsetTop);
			break;
		case item11:
			window.scrollTo(0, Getid("title11").offsetTop);
			break;
		case item12:
			window.scrollTo(0, Getid("title12").offsetTop);
			break;
		case item13:
			window.scrollTo(0, Getid("title13").offsetTop);
			break;
	}
};

var jump = function(obj) {
	ItemActive(Getid(obj.id));
	Goto(Getid(obj.id));
};