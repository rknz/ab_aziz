// A $( document ).ready() block.
$(document).ready(function () {
    'use strict'
    // =================================================================== Preloader
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(120).css({'overflow':'visible'});
    });
    // =================================================================== Animated on scroll
    AOS.init();
    // =================================================================== Metires_ Bg On Hovar ONE
    $("#ONE").hover(function(){
        $('.Metires_Section').addClass('bg_one');
    }, function() {
        $('.Metires_Section').removeClass('bg_one');
    });
    // =================================================================== Metires_ Bg On Hovar TWO
    $("#TWO").hover(function(){
        $('.Metires_Section').addClass('bg_two');
    }, function() {
        $('.Metires_Section').removeClass('bg_two');
    });
    // =================================================================== Metires_ Bg On Hovar THREE
    $("#THREE").hover(function(){
        $('.Metires_Section').addClass('bg_three');
    }, function() {
        $('.Metires_Section').removeClass('bg_three');
    });
});