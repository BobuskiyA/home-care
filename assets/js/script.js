"use strict";


$(".header-menu__button").click(function() {
	$(".header-menu__mob").fadeIn(500);
	$(".body").addClass('overflow');
});
$(".header-menu__close").click(function() {
	$(".header-menu__mob").fadeOut(500);
	$(".body").removeClass('overflow');
});