// const images = [
// 	"https://data.whicdn.com/images/251238216/original.gif",
// 	"https://i.pinimg.com/originals/3d/22/45/3d224511a5e13317e46e37bee1d249dd.gif",
// 	"https://i.pinimg.com/originals/b0/10/e9/b010e954f94acbd034917b2d6931bd79.gif",
// 	"https://64.media.tumblr.com/5f4c0252b15dda55028536c5a8923c7d/b691a90722d7bbb5-c8/s500x750/34aac55dfd7302e41fec400ba9636edeadb1890a.gif",
// 	"https://64.media.tumblr.com/746e848c8b0cf90bc7938599421e6b4e/tumblr_pbhfk0rEth1txe8seo1_500.gif",
// 	"https://media2.giphy.com/media/Wm9XlKG2xIMiVcH4CP/giphy.gif"
// ];

// $(document).ready(function () {
// 	let current = 0;
// 	$("#mirror-content").on("click", function () {
// 		$(this).css({
// 			"background-image": `url(${images[++current % images.length]})`
// 		});
// 	});
// });
// -----------------------------------------------------------------------------------------------------------------
$(document).ready(function () {
    console.log("ready!");

    $(".house-4").click(function () {
        $('.rain, #cloud-sun').fadeIn('slow', function () {
            $(this).delay(2000).fadeOut('slow');
        });
    });

    $(".house-3-container").click(function () {
        $(".house-3-window-shades").slideToggle();
        $(".smoke").fadeToggle();
    });

    $(".house-2").click(function () {
        $(".bike-container").addClass('bike-animation');
        $(".bike-container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (event) {
            $(".bike-container").removeClass('bike-animation')
        });
    });


    $(".house-1").click(function () {
        $(".mailtruck").addClass('mailtruck-animation');
        $(".mailtruck").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (event) {
            $(".mailtruck").removeClass('mailtruck-animation')
        });
    });


    $(".streetlamp").hover(function () {
        $(".scene").toggleClass("grayscale");
    });

    $(".house-5").click(function () {
        $(".scene").toggleClass("night");
        $(".window").toggleClass("window-night");
        $(".skyscrapers").toggleClass("skyscraper-night");
        $(".cloud").toggleClass("cloud-night");
        $(".moon").toggle();
        $("h1").toggleClass("title-night");
    });

});