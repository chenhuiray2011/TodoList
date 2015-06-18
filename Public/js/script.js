
function ready() {
    //调用获取条数的函数
    var day_sel = getByClass(ele("day_choices"),"sel_li");
    for (var i = 0; i < day_sel.length; i++) {
        day_sel[i].addEventListener("click",day_click);
    };
    var pro_sel = getByClass(ele("pro_choices"),"sel_li");
    for (var i = 0; i < pro_sel.length; i++) {
        pro_sel[i].addEventListener("click",pro_click);
    };

    refreshnums();
}
function submit_item(URL){
    var user = 'BayMax';
    var context = ele("input_text").value;
    var catagory = ele('day_choice').innerHTML;
    var group = ele('pro_choice').innerHTML;
    var args= new Array(["user","BayMax"],["context",context],['catagory',catagory],["group",group]);
    ajax(URL,args,additem_callback);

}

function additem_callback(){
    refreshnums();
}
function day_click(e){
    inner_id("day_choice",e.currentTarget.innerHTML);
    stylenone("day_choices");
}
function pro_click(e){
    inner_id("pro_choice",e.currentTarget.innerHTML);
    stylenone("pro_choices");
}

function refreshnums(){
    var url ="/index.php/Home/Index/getCount.html"
    AjaxCall(url,fillin_nums);
}
function fillin_nums(nums){
    inner_id("today_num","今天:"+nums.today);
    inner_id("tomo_num","明天:"+nums.tomorrow);
    inner_id("about_num","即将:"+nums.about);
    inner_id("future_num","以后:"+nums.future);

}
function logconsole(input){
    console.log(input);
}

mt("over","pro_choice",null,"pro_choices");
mt("out","pro_choice","pro_choices",null);
mt("over","pro_choices",null,"pro_choices");
mt("out","pro_choices","pro_choices",null);
mt("over","day_choice",null,"day_choices");
mt("out","day_choice","day_choices",null);
mt("over","day_choices",null,"day_choices");
mt("out","day_choices","day_choices",null);

ready();