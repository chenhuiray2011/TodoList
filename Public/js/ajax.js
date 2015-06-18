function AjaxCall(url,callback){
     var xmlHttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
       xmlHttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
       xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.open("GET",url,true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(eval ("(" +xmlHttp.responseText+ ")"));
        }
    }
    xmlHttp.send(null);
}
function formurl(ori,arr){
    var url= ori;
    url = url+ "?"+arr[0][0]+"="+arr[0][1];
    for (var i = 1; i < arr.length; i++) {
        url = url+"&"+arr[i][0]+"="+arr[i][1];
    };
    return url;
}
function ajax(url,args,callback){
    var vl = formurl(url,args);
    AjaxCall(vl,callback);
}