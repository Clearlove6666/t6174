/**
 * Created by Jack on 2018/6/28.
 */
$(function () {
    $(".de").hover(function () {
        $(".img-1").stop().animate({"left":"10"},300,function () {
            $(".img-2").show();
        });
    },function () {
        $(".img-2").hide();
        $(".img-1").stop().animate({"left":"90"},300);
    })
    $(".login-tab-r a").hover(function () {
        $(this).css({"color":"red","text-decoration":"none"});
    },function () {
        $(this).css("color","black");
    })
    $(".login-tab-r a").click(function () {
        $(".img-1").stop().animate({"left":"10"},900,function () {
            $(".img-2").show();
        })
        $(".login").show();
        $(".de").hide();
        $(".erw").hide();
    })
    $(".login-tab-l a").click(function () {
        $(".login").hide();
        $(".de").show();

        $(".erw").show();

    })
})
