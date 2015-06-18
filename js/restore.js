window.onload = function(){
	var objs = document.getElementsByTagName("a");
	for(var i = 0; i < objs.length; i++) {
		var text = objs[i].innerHTML;
		text = text.replace(/艾特/g, "@");
		text = text.replace(/点/g, ".");
		objs[i].innerHTML = text;
	}
};