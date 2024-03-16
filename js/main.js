;(function () {
	
	'use strict';

	var owlCarousel = function(){

        new WOW().init();

        $('.owl-carousel').owlCarousel({
            items : 4,
            loop  : true,
            margin : 170,
            center : true,
            smartSpeed :900,
            nav:true,
            navText: [
                "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                "<i class='fa carousel-right-arrow fa-chevron-right'></i>"
            ],responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true,
                    margin : 120,
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true,
                    autoplay: true,
                    autoplayTimeout: 1500,
                    navText: [
                        "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                        "<i class='fa carousel-right-arrow fa-chevron-right'></i>"
                    ],
                }
            }
        });

	};

    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }

	$(function(){
		owlCarousel();

        // Button hover effect
        $('#demoButton').hover(function() {
            $(this).css({
                backgroundColor: 'blue',
                color: 'white',
                border: '1px solid #132E4F' // border styling
                
            });
        }, function() {
            $(this).css({
                backgroundColor: '',
                color: ''
            });
        });

	});



    // FAQ button plus minus
    const containerItemHeaders = document.querySelectorAll(".faq-container-item-header");

    containerItemHeaders.forEach(containerItemHeader => {
        containerItemHeader.addEventListener("click", event => {
        
        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
        
        const currentlyActiveContainerItemHeader = document.querySelector(".faq-container-item-header.active");
        if(currentlyActiveContainerItemHeader && currentlyActiveContainerItemHeader!==containerItemHeader) {
            currentlyActiveContainerItemHeader.classList.toggle("active");
            currentlyActiveContainerItemHeader.nextElementSibling.style.maxHeight = 0;
            
        }
    
        containerItemHeader.classList.toggle("active");
        const containerItemBody = containerItemHeader.nextElementSibling;
        if(containerItemHeader.classList.contains("active")) {
            containerItemBody.style.maxHeight = containerItemBody.scrollHeight + "px";
        }
        else {
            containerItemBody.style.maxHeight = 0;
            
        }
        
      });
    });


}());

