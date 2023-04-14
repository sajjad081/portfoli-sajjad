$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    // toggle nav/menu script 
    $('.container').click(function(){
        $('.navbar .menu').toggleClass('active')
    })

    // Typing Animation
    var typed = new Typed('.typing',{
        strings : ['Entreprenur','Graphic Designer','Marketing Advisor', 'Logo Designer'],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    });

    var typed = new Typed('.typing-2',{
        strings : ['Entreprenur','Graphic Designer','Marketing Advisor', 'Logo Designer'],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    });


    //Owl Carouse1 script
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeout:2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },
        }

    });





});

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
  
    $('.scroll-top').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 100);
        return false;
    });
  
  });







function myFunction(x){
    x.classList.toggle('change');}