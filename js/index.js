$(document).ready(function () {


    const $nav = $(".header .nav ul");
    const $header = $(".header");
    const $submenu = $(".header .submenu");
    const $navli = $(".header .nav ul li")

$("a").click(function(e){
    e.preventDefault
})


    $nav.mouseover(function(){
        $submenu.addClass("on")
        $header.addClass("on")
    }).mouseout(function(){
        $submenu.removeClass("on")
        $header.removeClass("on")
        $navli.removeClass("on")
    })

    $submenu.mouseover(function(){
        $submenu.addClass("on")
        $header.addClass("on")
    }).mouseout(function(){
        $submenu.removeClass("on")
        $header.removeClass("on")
        $navli.removeClass("on")
    })







    const swiper = new Swiper(".main-slide",{
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            type: "progressbar"
        },
        autoplay: true
    })

    if (swiper.slides.length -2 > 9) {
        $(".swiper-index span").eq(1).text((swiper.slides.length - 2));
    }else{
        $(".swiper-index span").eq(1).text("0"+(swiper.slides.length - 2));
    }


    swiper.on("slideChange", function(){
        console.log(swiper.realIndex)

        if (swiper.realIndex + 1 > 9) {
            $(".swiper-index span").eq(0).text((swiper.realIndex + 1));
        }else{
            $(".swiper-index span").eq(0).text("0"+(swiper.realIndex + 1));
        }
    })


    const swiper2 = new Swiper(".notice-swiper",{
        loop: true,
        navigation:{
            nextEl : ".btn-next",
            prevEl : ".btn-prev"
        },
        autoplay:{
            delay: 3000
        },
        effect: 'fade',
        fadeEffect: {
        crossFade: true
        },
    })
    
    const swiper3 = new Swiper(".popular-area",{
        loop: true,
        direction: "vertical",
        autoplay: true
    })
    


    const $event_list = $(".event-list ul li");
    const $event_img = $(".event-img img");

$("a").click(function(e){
    e.preventDefault();
})

$event_list.eq(0).addClass("on")

$event_list.click(function(){
    let i = $(this).index()+1;
    $event_img.attr("src", "images/event"+i+".png")
    $event_list.removeClass("on").eq(i-1).addClass("on")
})






let floating_top = parseInt($(".floating").css("top"))

$(window).scroll(function () {
    let pos = $(window).scrollTop()

    $(".floating").stop().animate({
        top: pos + floating_top 
    })

}); 

$(".floating .top").click(function(){
    $("html, body").stop().animate({
        scrollTop:0
    }, 800)
})


$(window).scroll(function () {
    let pos = $(window).scrollTop()
    if(pos >= 80){
        $(".floating").show()
    }else{
        $(".floating").hide()
    }
})


}); ///jq