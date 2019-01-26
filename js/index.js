//banner-start
$(function () {
    var $picli=$(".middle-banner .picture li");
    var $tabli=$(".middle-banner .tab li");
    var $btnli=$(".middle-banner .btn li");
    var len=$picli.length;
    // console.log(len)
    var first=0;
    var timer;
    //初始化
    $picli.eq(0).addClass("show");
    $tabli.eq(0).addClass("on");

    //change函数
    function change(i){
        $tabli.eq(first).removeClass("on");
        $picli.eq(first).fadeOut(1000);
        first=i;
        $tabli.eq(first).addClass("on");
        $picli.eq(first).fadeIn(1000);
    }

    //按键函数
    $tabli.click(function(){
        var x=$(this).index();
        if(x!=first){
           change(x);
        }

    });
            // console.log(x);
    //btn函数
    $btnli.click(function () {
        var x=first;
        // console.log(x)
        if($(this).index()){
            x++;
            if(x>len-1){
              x%=len;
            }
            change(x);
        }else{
            x--;
            if(x<0){
                x=len-1
            }
            change(x);
        }
    });
    //自动轮播
    $(".middle-banner").hover(function () {
        clearInterval(timer)
    },auto);
    auto();
    function auto() {
        timer=setInterval(function () {
            var x=first;
            x++;
            if(x>len-1)x%=len;
            change(x);
        },3000)
    }
});
//banner-end