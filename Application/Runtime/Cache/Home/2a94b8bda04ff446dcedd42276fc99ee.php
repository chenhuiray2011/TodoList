<?php if (!defined('THINK_PATH')) exit();?> <!DOCTYPE html>
 <html>
 <head>
 	<title>Todo Dom</title>
 	<link rel="stylesheet" type="text/css" href="/Public/css/index2.css">
 	<link rel="stylesheet" type="text/css" href="/Public/css/style.css">
 	<script type="text/javascript" src="/Public/js/script.js"></script>
 </head>
 <body>
 <div id="wrap">
	<nav id="head-nav" class="navblue"></nav>
 <div id="middle">
 	<div id="left-sel" class="f-left">
 		<div id="per-info">
 		<p>HI</p>
 		<P>BayMax</P>
 		</div>
 		<div id="Projects">
 			<li>Project intial</li>
 			<li>Project tomo</li>
 			<li>Project Baymax</li>
 			<li>Project Future</li>
 		</div>
 	</div>
 	<div id="item-context" class="f-left">
 		<div id="add_item">
 			<div id="item_inputs">
 				<textarea id="input_text"></textarea>
 				<div style="clear:both;"></div>
	 			<div class="item_selector">
	 				Day
	 			</div>
	 			<div class="item_selector">
	 				Projects
	 			</div>
 			</div>
 			<div id="submit_btn" onclick="submit_item('<?php echo U('Index/ajaxadd');?>')">
 			</div>

 		</div>
 		<div id="item_list">
 		Item_list	
 		</div>
 	</div>
 	<div id="overview" class="f-left">
 		<div id="calendar">
 			Collect By Calendar
 		</div>
 		<div id="projects">
 			Collect By Projects
 		</div>
 	</div>
 </div>
 </div>
 
 </body>
 </html>
 <!--<style type="text/css">*{ padding: 0; margin: 0; } body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px } a,a:hover,{color:blue;}</style><div style="padding: 24px 48px;"> <p>Hello World! </p><br/></div><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_55e75dfae343f5a1"></thinkad><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>-->