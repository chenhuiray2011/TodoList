function btn_click() {
    //创建XMLHttpRequest对象
    var xmlHttp = new XMLHttpRequest();

    //获取值
    var username = document.getElementById("txt_username").value;
    var age = document.getElementById("txt_age").value;

    //配置XMLHttpRequest对象
    xmlHttp.open("get", "Get.aspx?username=" + username
        + "&age=" + age,true);

    //设置回调函数
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            document.getElementById("result").value = xmlHttp.responseText;
        }
    }

    //发送请求
    xmlHttp.send(null);
}
function submit_item(URL){
    var user = 'BayMax';
    
    var context = document.getElementById("input_text").value;
    var url = URL+'?cuser='+user+'&context='+context;
    var xmlHttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
       xmlHttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
       xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.open("post",url,true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            document.getElementById("input_text").value = xmlHttp.responseText;
        }
    }
    xmlHttp.send(null);
}