var intv;
function ready(){
	tcolor("time_sort","#09c");
	tcolor("grid_view","#09c");
	bind_addbtn();
	bind_itemhover();
	bind_finbtn();
	// ele("time_sort").style.color = "#007ee5";
	// ele("grid_view").style.color = "#007ee5";
	ele("exit_btn").addEventListener("click",hide_add);
	ele("add_btn").addEventListener("click",add_item);
}
function bind_addbtn(){
	var showadd = getByClass(ele("timeview"),"show_add");
	for (var i = showadd.length - 1; i >= 0; i--) {
		showadd[i].addEventListener("click",show_add);
	};
}
function hide_add(){
	// stylenone("add_item");
	ele("add_item").style.opacity = 1;
	fadeout("add_item",2);
}
function show_add(){
	styleblock("add_item");
	ele("add_item").style.opacity = 1;
}
function add_item(){
	hide_add();
}
function fadeout(id,time){
	var percent = 50/(time*1000);		
	intv=self.setInterval("downopacity(\""+id+"\","+percent+")");
	
}
function downopacity(id,percent){
	var obj = ele(id);
	obj.style.opacity = obj.style.opacity-percent;
	if (obj.style.opacity <= 0){
		window.clearInterval(intv);
		stylenone(id);
	}
}
function bind_itemhover(){
	var items = getByClass(ele("timeview"),"item");
	for (var i = items.length - 1; i >= 0; i--) {
		items[i].addEventListener("mouseover",item_hover);
		items[i].addEventListener("mouseout",item_out);
	};
}
function item_hover(e){
	var target = e.currentTarget;
	// target.innerHTML += "<div class='fin_btn'></div>";
	var btn = getByClass(target,"fin_btn");
	if (btn[0]!=null && btn[0].style.display!="block") {
		btn[0].style.display="block";
		// var li = getByClass(target,"item_li");
		// li[0].style.width="236px";
	};
}
function item_out(e){
	var target = e.currentTarget;
	// target.innerHTML += "<div class='fin_btn'></div>";
	var btn = getByClass(target,"fin_btn");
	if (btn[0]!=null && btn[0].style.display=="block"){
		btn[0].style.display="none";
	}
	var li = getByClass(target,"item_li");
}
function bind_finbtn(){
	var fins = getByClass(ele("timeview"),"fin_btn");
	for (var i = fins.length - 1; i >= 0; i--) {
		fins[i].addEventListener("click",finish_item);
	};
}
function finish_item(e){
	var target = e.target.parentElement;
	var cross_l = getByClass(target,"cross_l");
	cross_l[0].style.display="block";
	var fin_btn = e.target;
	target.removeChild(fin_btn);
}
// document.addEventListener("mouseover",mouseplace);
// function mouseplace(e){
// 	var target = e.currentTarget;
// 	console.log(target);
// }

ready();