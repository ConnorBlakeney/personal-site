$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750)
    })

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })
})

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    let typed = new Typed(".sub", {
        strings: ["Software Engineer.", "Web Developer.", "Lifelong Learner."],
        typeSpeed: 70,
        loop: true
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })


    let skillsTopOffset = $(".skillsSection").offset().top;
    let statsTopOffset = $(".statsSection").offset().top;
    let countUpFinished = false

    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: 'white',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent))
                    }
                })

        }
    })

    $(window).scroll(function() {
        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

            
            $(".counter").each(function() {
                let element = $(this)
                let endVal = parseInt(element.text())

                element.countup(endVal)
            })
            countUpFinished = true
        }
    })

    $("[data-fancybox]").fancybox()

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current")
        $(this).addClass("current")

        let selector = $(this).attr("data-filter")

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        })
        return false

    })

    const nav = $("#navigation")
    const navTop = nav.offset().top

    $(window).on("scroll", stickyNavigation)

    function stickyNavigation() {
        let body = $("body")

        if ($(window).scrollTop() >= navTop ) {
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav")
        } else {
            body.css("padding-top", 0)
            body.removeClass("fixedNav")
        }
    }
})
