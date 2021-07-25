$(document).ready(function(){
    
    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        margin: 20,
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            1000: {
                items:3
            }
        }
    });
    
    //WOW
    wow = new WOW(
                      {
                      mobile:       true, // Default True
                    }
                    )
                    wow.init();
});