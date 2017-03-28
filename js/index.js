/**
 * Created by sunrise on 2017/3/22.
 */
$(function () {
    $(".aui-bar-btn-item").click(function () {
        if(!$(this).hasClass("aui-active")){
            $(".aui-bar-btn-item").removeClass("aui-active");
            $(this).addClass("aui-active");
        }
    });
});