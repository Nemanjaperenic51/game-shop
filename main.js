jQuery(document).ready(function($) {

    $('.loader-wrapper').fadeOut();

    $('#search-btn').click(function(e) {
        e.preventDefault();
        $('.serch-wraper').fadeIn();
    });

    $('#close-search').click(function(e) {
        e.preventDefault();
        $('.serch-wraper').fadeOut();
    });


    // $('#hamburger-btn').click(function() {

    //     if($('this').hasClass('opened')) {
    //         $('nav ul').slideUp();
    //     }else {
    //         $('nav ul').slideDown();
    //     }

        
    //     $('this').toggleClass('opened');
        
    // });




    $(window).scroll(function() {
        if($(window).scrollTop() > 200) {
            $('nav').addClass('fixed-nav');
        }else {
            $('nav').removeClass('fixed-nav');
        }
    });

    
});


const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".hamburger-menu-button");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", hide);

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0%";
}

function hide() {
    mainMenu.style.top = "-100%";
}