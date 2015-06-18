<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<title>Todo Dom</title>
	<link rel="stylesheet" type="text/css" href="/Public/css/effects.css">
	<link rel="stylesheet" type="text/css" href="/Public/css/new_index.css">
</head>
<body>
	<div id="wrap">
		<header>
			<nav id="sort_nav">
				<li title="Sort by Time" id="time_sort" class="nav_btn right_split">T</li>
				<li title="Sort by Project" id="project_sort" class="nav_btn">P</li>
			</nav>
			<nav id="view_nav">
				<li id="list_view" class="nav_btn right_split">L</li>
				<li id="grid_view" class="nav_btn">G</li>
			</nav>
			<div style="clear:both;"></div>	
		</header>
		<!-- <aside></aside> -->
		<article id="board">
			<article id="projectview">
				<section></section>
				<section></section>
			</article>
			<article id="timeview">
				<section id="sec_today" class="sections">
					<h3>Today</h3>
					<div title="Add a new item" class="show_add">+</div>
					<div class="item" draggable="true">
						<li class="item_li">Firt item added into the List.Firt item added into the List.Firt item added into the List.</li>
						<div class="fin_btn" style="display:none"></div>
						<div class="cross_l"></div>
						<div style="clear:both"></div>
					</div>
					<div class="item" draggable="true">				
						<li class="item_li">Firt item added into the List.</li>
						<div class="fin_btn" style="display:none"></div>
						<div class="cross_l" style="display:none"></div>
						<div style="clear:both"></div>
					</div>
					<div class="item">				
						<li class="item_li">Firt item added into the List.</li>
						<div class="fin_btn" style="display:none"></div>
						<div style="clear:both"></div>
					</div>
				</section>
				<section id="sec_tomorrow" class="sections">
					<h3>Tomorrow</h3>
					<div title="Add a new item" class="show_add">+</div>
					<div class="item">				
						<li class="item_li">Firt item added into the List.</li>
						<div class="fin_btn" style="display:none"></div>
						<div style="clear:both"></div>
					</div>
					<div class="item">				
						<li class="item_li">Firt item added into the List.</li>
						<div class="fin_btn" style="display:none"></div>
						<div style="clear:both"></div>
					</div>
				</section>
				<section id="sec_upcoming" class="sections">
					<h3>Upcoming</h3>
					<div title="Add a new item" class="show_add">+</div>
					<div class="item">				
						<li class="item_li">Firt item added into the List.</li>
						<div class="fin_btn" style="display:none"></div>
						<div style="clear:both"></div>
					</div>
					<div class="item">				
						<li class="item_li">Firt item added into the List.</li>
						<div class="fin_btn" style="display:none"></div>
						<div style="clear:both"></div>
					</div>
					<div class="item">				
						<li class="item_li">Firt item added into the List.</li>
						<div class="fin_btn" style="display:none"></div>
						<div style="clear:both"></div>
					</div>
				</section>
				<section id="sec_someday" class="sections">
					<h3>Someday</h3>
					<div title="Add a new item" class="show_add">+</div>
				</section>
				<div style="clear:both;"></div>
			</article>
		</article>
	</div>

	<div id="add_item" style="display:none;">
		<div class="container">
			<div id="cover"></div>
		</div>
		<div id="add_form">
			<div id="exit_btn"></div>
			<div id="item_edit">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div id="add_btn"></div>
			<div id="context"></div>
			<div id="properties"></div>
		</div>
	</div>
	<script type="text/javascript" src="/Public/js/dom.js"></script>
	<script type="text/javascript" src="/Public/js/page.js"></script>
	<!-- <footer></footer> -->
</body>
</html>