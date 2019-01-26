var $pic=$(".middle .back-pic .picture li img");
var $btn=$(".middle .back-pic .btn li");
var $point=$(".middle .back-pic .point li");
var len=$pic.length;
//初始化
$pic.eq(0).addClass("show");
$point.eq(0).addClass("active")

var now_index=0

//圆点操作
$point.click(function () {
    // console.log($(this).index())
    var number=$(this).index();//点击对象的序列
    if(number!=now_index){
        change(number);
    }

});


//point函数
function change(n) {
    $pic.eq(now_index).fadeOut(1000);
    $point.eq(now_index).removeClass("active");
    now_index=n;
    $pic.eq(now_index).fadeIn(1000);
    $point.eq(now_index).addClass("active");
}
//箭头操作
$btn.click(function () {
    var number=now_index; //初始化
    if($(this).index()){
        number++;
        number%=len;
    }else {
        number--;
        if(number<0) {
            number = length;
        }
    }
    change(number);
});

setInterval(f,4000);
function f() {
    var number=now_index;
    number++;
    number%=len;
    change(number);
}