function etag(name){
    var elment = document.getElementsByTagName(name);
    return name;
}
function ele(id){
    var element = document.getElementById(id);
    return element;
}
function tcolor(id,color){
    ele(id).style.color = color;
}
//修改某个对象的innerHTML为指定内容
function inner_id(id,text){
    inner(ele(id),text);
}
//修改某个对象的innerHTML为指定内容
function inner(obj,text){
    obj.innerHTML=text;
}
function styleblock(id){
    ele(id).style.display="block";
}
function stylenone(id){
    ele(id).style.display="none";
}
//通过鼠标对触发器做出的操作对制定控件的显示和隐藏进行修改
function mt(status,trigger,hide,show){
    switch (status)
    {
        case "out":
        ele(trigger).onmouseout = function(){
            showhide(hide,show);
        };
        break;
        case "over":
        ele(trigger).onmouseover = function(){
            showhide(hide,show);
        };
        break;
    }
}
function showhide(hide,show){
    if(hide!=null)
    stylenone(hide);
    if(show!=null)
    styleblock(show);
}
function getByClass(oParent,sClass){
    var aResult=[];
    var aEle=oParent.getElementsByClassName(sClass);
    for(var i=0;i<aEle.length;i++){
            aResult.push(aEle[i]);
    }
    return aResult;
};