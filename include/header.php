<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="ru"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="ru"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="ru"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="ru"> <!--<![endif]-->
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title><?print $pagetitle ?> :: Авангард авиайшон</title>
	<meta name="description" content="">
	<meta name="author" content="">

	<!--<meta name="viewport" content="width=device-width,initial-scale=.75,maximum-scale=3.0,user-scalable=yes" />-->
	<meta name="viewport" content="target-densitydpi=160dpi, maximum-scale=3.0, initial-scale=.75, user-scalable=yes">
	<meta name="viewport" content="width=device-width">

<!-- 1 -->
	<script src="js/libs/modernizr.js"></script>

<!-- 2 -->
	<!-- Bootstrap -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css">

<!-- 3 -->
	<script src="http://yandex.st/jquery/1.11.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.11.1.min.js">\x3C/script>')</script>

<!-- 4 -->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/libs/bootstrap.min.js"></script>

<!-- 5 -->
	<script src="js/script.js"></script>

</head>
<? if($pagename == 'avangard_index') { ?>
	<body class="avangard_index">
<? } else if($pagename == 'avangard_about') { ?>
	<body class="avangard_about">
<? } else if($pagename == 'avangard_engineering_technical_services') { ?>
	<body class="avangard_engineering_technical_services">
<? } else { ?>
	<body>
<? } ?>

<div class="container-fluid">
	<header id="header" class="color_1">
		<div class="header_shadow"></div>
		<div class="row header_top">
			<nav class="col-xs-4 menu_top">
				<a href="#0" class="menu_top-btn">
					<span class="menu_top-ico"><span></span></span>
					<span class="menu_top-txt">Menu</span>
				</a>
				<ul class="list_item">
					<li><a href="#0"></a></li>
					<li><a href="#0"></a></li>
					<li><a href="#0"></a></li>
					<li><a href="#0"></a></li>
					<li><a href="#0"></a></li>
				</ul>
			</nav>
			<div class="col-xs-4 logo"><a href="#0"><img src="img/logo.png"  alt="logo"></a></div>
			<div class="col-xs-4 lang-b">
				<div class="lang_wrap">
					<a href="#0" class="lang_btn">Leave request</a>
					
					<div class="lang_dropdown dropdown">
						<a class="lang_lnk current" data-toggle="dropdown">Eng</a>
						<ul class="lang_dropdown-menu dropdown-menu">
							<li class="b-lang__lnk">Rus</li>
							<li class="b-lang__lnk">Chi</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>