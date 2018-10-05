<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Quotes
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<!--FONT-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,300italic,500,700,600,800' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="se-pre-con">
		<div id="spinningTextG"><div id="spinningTextG_1" class="spinningTextG">L</div><div id="spinningTextG_2" class="spinningTextG">o</div><div id="spinningTextG_3" class="spinningTextG">a</div><div id="spinningTextG_4" class="spinningTextG">d</div><div id="spinningTextG_5" class="spinningTextG">i</div><div id="spinningTextG_6" class="spinningTextG">n</div><div id="spinningTextG_7" class="spinningTextG">g</div></div>
	</div>
	<header id="home">
		<div class="container">
			<div class="row">				
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">					
					<div class="logo">
						<a href="#home" data-scroll><img src="<?php bloginfo('template_directory'); ?>/img/logo.png" alt="alt text" /></a>					
					</div>									
					<nav class="nav-collapse"> 
						<ul>     
							<li class="menu-item active"><a href="/wp/quotes" data-scroll>HOME</a></li>    
							<li class="menu-item"><a href="about-us" data-scroll>ABOUT US</a></li>
							<li class="menu-item"><a href="categories" data-scroll>CATEGORIES</a></li>
							<li class="menu-item"><a href="gallery" data-scroll>GALLERY</a></li>
							<li class="menu-item"><a href="event" data-scroll>EVENTS</a></li>
							<li class="menu-item"><a href="blog" data-scroll>BLOG</a></li>
							<li class="menu-item"><a href="contact-us" data-scroll>CONTACT US</a></li>
						</ul>
					</nav> 
				</div>
			</div>			
		</div>
	</header>	