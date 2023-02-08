$(document).ready(function () {

    $("a").click(function(e){
        e.preventDefault();
    })

    const $nav = $(".header .nav ul");
    const $header = $(".header");
    const $submenu = $(".header .submenu");
    const $navli = $(".header .nav ul li")
    const $left_list = $(".best-content .best-area ul li")
    const $center_content = $(".best-content .best-area .center .center-content")
    const $right_circle = $(".best-content .best-area .right .circle")

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

$event_list.eq(0).addClass("on")

$event_list.click(function(){
    let i = $(this).index()+1;
    $event_img.attr("src", "images/event"+i+".png")
    $event_list.removeClass("on").eq(i-1).addClass("on")
})






//


const $sub_menu_slide = $(".subway-menu-content .menu-content")
const $sub_menu_nav = $(".subway-menu-content ul li")

$sub_menu_slide.eq(0).show()
$sub_menu_nav.eq(0).addClass("on")




const swiper4 = new Swiper(".menu-content",{
    loop: false,
    slidesPerView : 2,
    spaceBetween : 10,
    grid:{
        rows: 2
    },
    breakpoints:{
        767:{
            loop: true,
            slidesPerView : 4,
            spaceBetween : 50,
            grid:{
                rows: 1
            }
        },
        1024:{
            loop: true,
            slidesPerView : 4,
            spaceBetween : 10,
            grid:{
                rows: 1
            }
        }
    },
    navigation:{
        nextEl :".swiper-button-next",
        prevEl :".swiper-button-prev"
    },
    // 슬라이더가 불러올 때마다 새로고침을 해주는 역할 > display:none > block 변경되었을때 먹통되는걸 방지
    observer: true,
    observeParents: true
})


$sub_menu_nav.click(function(){
    let i = $(this).index();
    $sub_menu_nav.removeClass("on").eq(i).addClass("on")
    $sub_menu_slide.hide().eq(i).show();
    swiper4[i].slideTo(0,100)
})








const $tab_nav = $(".subway-sns-content .content-wrap > ul li")
const $tab_list = $(".subway-sns-content .tab-content")

$tab_list.eq(0).show()
$tab_nav.eq(0).addClass("on")

$tab_nav.click(function(){
    let i = $(this).index()
    $tab_nav.removeClass("on").eq(i).addClass("on")
    $tab_list.hide().eq(i).show();
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






$(".hamburger i, .m-nav > i").click(function(){
    $(".m-nav").toggleClass("on")
})

let myswiper = null;
let ww = $(window).width();
// console.log(ww)
function initswiper(){
    if(ww < 751 && myswiper == null){
        myswiper = new Swiper(".event-img", {
            loop: true,
            pagination:{
                el: ".swiper-pagination",
                clickable: true
            },
            autoplay: true
        })
    }else if(ww > 750 && myswiper != null){
        myswiper.destroy();
        myswiper = null;
    }
}

let swiper5 = null;
function initswiper2(){
    if (ww < 751 && swiper5 == null) {
        swiper5 = new Swiper(".tab-content",{
            loop: true,
            navigation:{
                nextEl :".swiper-button-next",
                prevEl :".swiper-button-prev"
            },
            pagination:{
                el: ".swiper-pagination",
                clickable: true
            }
        })
    } else if(ww > 750 && swiper5 != null){
        swiper5[0].destroy();
        swiper5[1].destroy();
        swiper5[2].destroy();
        swiper5 = null;
        $tab_list.eq(idx).show()
    }
}

let swiper6 = null;
function initswiper3(){
    if(ww < 751 && swiper6 == null){
        swiper6 = new Swiper(".right", {
            loop: true,
            pagination:{
                el: ".swiper-pagination",
                clickable: true
            },
            navigation:{
                nextEl :".swiper-button-next",
                prevEl :".swiper-button-prev"
            }
        })
    $right_circle.addClass("on");
    $left_list.removeClass("on").eq(0).addClass("on")
    $center_content.hide().eq(0).show()
    swiper6.slideTo(swiper6.realIndex+1);
        swiper6.on("slideChange", function(){
            $center_content.hide().eq(swiper6.realIndex).show();
            $left_list.removeClass("on").eq(swiper6.realIndex).addClass("on")
        })
    }else if(ww > 750 && swiper6 != null){
    $right_circle.removeClass("on").eq(swiper6.realIndex).addClass("on")
        swiper6.destroy();
        swiper6 = null;
    }
}

initswiper()
initswiper2()
initswiper3()
$(window).resize(function(){
    ww = $(window).width();
    // console.log(ww)
    initswiper()
    initswiper2()
    initswiper3()
})





let prev = -1;
const $m_nav = $(".m-nav .menu > ul > li");

$m_nav.click(function(){
    let i = $(this).index()
    const ul_height = $(this).find("ul li").length * 50+"px";


    $m_nav.removeClass("on")
    if(prev == i){
        $(this).removeClass("on")
        $m_nav.find("ul").css("height", "")
        prev = -1;
    }else{
        $(this).toggleClass("on")
        $m_nav.find("ul").css("height", "")
        $m_nav.eq(i).find("ul").css("height", ul_height)
        prev = i;
    }

})



$right_circle.eq(0).addClass("on")
    $left_list.eq(0).addClass("on")
    $left_list.click(function(e){
        e.preventDefault();
        let i = $(this).index()
        $left_list.removeClass("on").eq(i).addClass("on")
        $center_content.hide().eq(i).show();
    $right_circle.removeClass("on").eq(i).addClass("on")
    })





}); ///jq