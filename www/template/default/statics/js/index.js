/**
 * Created by Administrator on 2016/12/12.
 */
$(function(){
    //图片展示遮照层和内容
    $('#show li').hover(function(){
        $('.picCon',this).stop().animate({
            height:$(this).height(),
			width:$(this).width()
        });
    },function(){
        $('.picCon',this).stop().animate({
            height:'0'
        });
    });
    /*轮播图*/
    function resize(){
        //获取屏幕宽度
        var windowWidth = $(window).width();
        //判断屏幕属于大还是小
        var isSmallScreen = windowWidth<768;
        //根据大小为界面上的每一张轮播图设置背景
        //$('#main_ad>.carousel-inner>.item')获取到的是一个DOM数组
        $('#main_ad>.carousel-inner>.item').each(function(i,item){
            var $item =$(item);//因为拿到的是DOM对象，需要转换
            //var imgSrc = $item.data(isSmallScreen?'image-xs':'image-lg');
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            //背景图片
            $item.css('backgroundImage','url(" '+ imgSrc +'")');
            //因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
            if(isSmallScreen){
                $item.html('<img src="'+imgSrc+'" alt="" />');
            }else{
                $item.html();
            }
        });
    }
    $(window).on('resize',resize).trigger('resize');

    var $carousels = $('.carousel');
    var startX, endX;
    var offset = 50;
    $carousels.on('touchstart', function(e) {
        startX = e.originalEvent.touches[0].clientX;
    });

    $carousels.on('touchmove', function(e) {
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend', function(e) {
        var distance = Math.abs(startX - endX);
        if (distance > offset) {
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }
    });
});
