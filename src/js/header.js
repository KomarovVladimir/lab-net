$(function() {
    'use strict'

    if($(window).scrollTop() >= $('.header').outerHeight()) {
        $('.header').addClass('header_scrolled')
    }

    $(window).scroll(function(){
        if($(window).scrollTop() >= $('.header').outerHeight()) {
            $('.header').addClass('header_scrolled')
        } else {
            $('.header').removeClass('header_scrolled')
        }
    });

    $('#header-button').click(function() {
        $('#header-button').toggleClass('header__button_active');
        $('.header').toggleClass('header_mobile_show');
        $('.nav').toggleClass('nav_show');
    });

    $('.nav__item').click(() => {
        $('#header-button').removeClass('header__button_active');
        $('.header').removeClass('header_mobile_show');
        $('.nav').removeClass('nav_show');
    });
})