/**
 * Created by Administrator on 2016/12/8.
 */
$(function(){
    /*导航条*/
    $('.navbar-nav>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    /*分页*/
    $('.pagination_news>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    //获取高度，设置垂直居中
    $('.hc_vertical').css('height',$('.mediaCon').height()+'px');



    // 初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip();

    //导航横向滑动
    var $ulContainer = $('.nav-news');
    var width = 30; // 因为原本ul上有padding-left
    // 遍历子元素
    $ulContainer.children().each(function(index, element) {
        width += element.clientWidth;
    });
    if (width > $(window).width()) {
        $ulContainer
            .css('width', width)
            .parent().css('overflow-x', 'scroll');
    }

    //切换的点
    $('.Conqh .hcDian').click(function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active');
    });

});