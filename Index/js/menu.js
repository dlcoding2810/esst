$(document).ready(function() {
                new WOW().init();
                $(".menu_dropdown li").hover(function() {
                    $(this).find("ul:first").slideDown(500);
                }, function() {
                    $(this).find("ul:first").hide(300);
                })
            })
            // Side Menu
        $(function() {
                $("#cssmenu ul ul li:odd").addClass("odd"), $("#cssmenu ul ul li:even").addClass("even"), $("#cssmenu > ul > li > a").click(function() {
                    $("#cssmenu li").removeClass("active"), $(this).closest("li").addClass("active");
                    var s = $(this).next();
                    return s.is("ul") && s.is(":visible") && ($(this).closest("li").removeClass("active"), s.slideUp("normal")), s.is("ul") && !s.is(":visible") && ($("#cssmenu ul ul:visible").slideUp("normal"), s.slideDown("normal")), 0 == $(this).closest("li").find("ul").children().length
                });
            })
            // Menu
        $(function() {
            $("#pull-right").click(function() {
                $("#css-menu").css({
                    right: "0"
                })
            }), $(".close-menu").click(function() {
                $("#css-menu").css({
                    right: "-150px"
                })
            })
        });

        // Side Menu-pc
        $(function() {
                $("#cssmenupc ul ul li:odd").addClass("odd"), $("#cssmenupc ul ul li:even").addClass("even"), $("#cssmenupc > ul > li > a").click(function() {
                    $("#cssmenupc li").removeClass("active"), $(this).closest("li").addClass("active");
                    var s = $(this).next();
                    return s.is("ul") && s.is(":visible") && ($(this).closest("li").removeClass("active"), s.slideUp("normal")), s.is("ul") && !s.is(":visible") && ($("#cssmenupc ul ul:visible").slideUp("normal"), s.slideDown("normal")), 0 == $(this).closest("li").find("ul").children().length
                });
            })
            // Menu-pc
        $(function() {
            $(".menu").click(function() {
                $("#css-menu-pc").css({
                    right: "0"
                })
            }), $(".close-menu").click(function() {
                $("#css-menu-pc").css({
                    right: "-200px"
                })
            })
        });
        // SHOW-POSTS
        $(function(){
            $(".post a").click(function(){
                $(".date-posts").css({
                    display: "none"
                })
                $(".show-post").css({
                    display: "block"
                })
            })
        })
        // HIDE-POST
        $(function(){
            $(".icon-home span a").click(function(){
                $(".date-posts").css({
                    display: "block"
                })
                $(".show-post").css({
                    display: "none"
                })
            })
        })