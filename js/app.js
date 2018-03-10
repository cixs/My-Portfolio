$(document).ready(function () {
   
    $(window).bind("unload", function() {});
    $("body").css("display", "none");
    $("body").hide();
    $("body").fadeIn(2000);

    let c1, c2, c3;

    c1 = $("#color-1");
    c2 = $("#color-2");
    c3 = $("#color-3");

    function changeBkColor(element) {

        if (document.body.style.backgroundColor === element.css("background-color")) {
            //document has already the same color as the one clicked, so the intent is to revert to the initial white background of the body
            document.body.style.backgroundColor = "initial";
            element.css("border", "initial");
            //revert changes of color that was made on some elements related to the chosen background color
            $(".logo").css("filter", "drop-shadow(3px 3px 5px #008cff)");
            $(".header").css("color", "#000");
            $(".site-item h2").css("color", "#000");
            $(".site-item a").css("color", "#000");
            $(".featured-work").css("color", "#939fa7");
            $(".color-wrapper").css("color", "#858585");
            $(".main-content h6").css("color", "#939fa7");

        } else {
            //intent is to change the body background color
            document.body.style.backgroundColor = element.css("background-color");
            element.css("border", "5px solid red");

            //change some elements colors depending of the chosen background color
            if (element === c1 || element === c3) {
                //background color is blue or gray
                $(".logo").css("filter", "drop-shadow(3px 3px 5px #000)");
                $(".header").css("color", "#000");
                $(".site-item h2").css("color", "#000");
                $(".site-item a").css("color", "#000");
                $(".featured-work").css("color", "#000");
                $(".color-wrapper").css("color", "#000");
                $(".main-content h6").css("color", "#000");
            };
            if (element === c2) {
                //background color is dark
                $(".logo").css("filter", "drop-shadow(3px 3px 5px #fff)");
                $(".header").css("color", "#888");
                $(".site-item h2").css("color", "#888");
                $(".site-item a").css("color", "#888");
                $(".color-item h4").css("color", "#888");
                $(".featured-work").css("color", "#888");
                $(".color-wrapper").css("color", "#888");
                $(".main-content h6").css("color", "#888");
            };
            $(".site-item a").hover(
                function () {
                    $(this).css("color", "#f00");
                },
                function () {
                    $(this).css("color", "#000");
                }
            );
        }
    };
    c1.click(function () {
        changeBkColor(c1);
        c2.css("border", "initial");
        c3.css("border", "initial");
    });
    c2.click(function () {
        changeBkColor(c2);
        c1.css("border", "initial");
        c3.css("border", "initial");
    });
    c3.click(function () {
        changeBkColor(c3);
        c1.css("border", "initial");
        c2.css("border", "initial");

    });

});