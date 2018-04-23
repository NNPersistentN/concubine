var width = document.documentElement.clientWidth;
var height =  document.documentElement.clientHeight;
if( width < height ){
    $print =  $('.content');
    $print.width(height);
    $print.height(width);
    $print.css('top',  (height-width)/2 );
    $print.css('left',  0-(height-width)/2 );
    $print.css('transform' , 'rotate(90deg)');
    $print.css('transform-origin' , '50% 50%');
}
$(function(){
    var text1="当时的西安只有86平方千米"
    var text2 = "2006年，西安地铁2号线开始修建，沿途发现140多座古墓，发掘出的文物建一个博物馆都绰绰有余。当时的西安城市面积达到9983平方米"
    var text3 = "2010年，曲江二次扩区后面积增加一倍"
    Appen(".item.subway",text2)
    Appen(".item.City",text1)
    Appen(".item.Birdseye",text3)
    function Appen(obj,text){
        console.log(text)
        $(obj).html("");
        if(obj == ".item.subway"){
            $(obj).append("<div class='subwayImg'></div>")
        }
        $(obj).append("<p></p>")
        $(text.split('')).each(function(e,v){
            $(""+obj+">p").append("<span class='text'>"+v+"</span>")
        })
    }


    var num=1;
    var t;
    setTimeout(function(){
        var s = setInterval(function(){
            $(".item.one").removeClass("active")
            $(".item.one").eq(num).addClass("active")
            num++;
            if(num == $(".item.one").length){
                clearInterval(s);
            }
        },1000)
        setTimeout(function(){
            $(".item.s").addClass("active");

        },4000)
        setTimeout(function(){
            $(".item.City").addClass("active");
            num=0;
            t =setInterval(function(){text(".item.City span")},200);

        },4700)
        setTimeout(function(){
            $(".item.City").addClass("actives");
            $(".item.subway").addClass("active");
            num=0;
            t =setInterval(function(){text(".item.subway span")},150);
        },9000)
        setTimeout(function(){
            $(".item.subway").addClass("actives");
            $(".item.Birdseye").addClass("active");
            num=0;
            t =setInterval(function(){text(".item.Birdseye span")},150);
        },21000)
    },2000)

    function text(obj) {
        console.log(num)
        console.log($(obj).length-1+"*******");
        $(obj).eq(num).addClass("active");
        if(num >=  $(obj).length-1){
            clearInterval(t);
        }
        num++;
    }



    // $(".loading").eq(0).addClass("active");
    // var t;
    // var num = 0;
    // setTimeout(function(){
    //     $(".loading").eq(0).removeClass("active");
    //     $(".loading").eq(1).addClass("active");
    // },1500)
    // setTimeout(function(){
    //     $(".loading").eq(1).removeClass("active");
    //     $(".item.p1").addClass("active");
    // },3000)
    // setTimeout(function(){
    //     $(".item.p1").removeClass("active");
    //     $(".item.p2").addClass("active");
    //
    // },4000)
    // setTimeout(function(){
    //     $(".item.p2").addClass("actives");
    //     $(".loading.b7").addClass("actives");
    //
    // },5500)
    // setTimeout(function(){
    //     $(".item.p3").addClass("active");
    //     $(".loading.b7").removeClass("actives");
    // },6000)
    // setTimeout(function(){
    //     $(".item.p3").addClass("active");
    //     $(".item.p4").addClass("active");
    // },7500)
    // setTimeout(function(){
    //     $(".item.p3").addClass("act");
    //     $(".item.p4").addClass("act");
    //     $(".loading.b9s").addClass("act");
    // },8500)
    // setTimeout(function(){
    //     $(".loading.b9s").addClass("acs");
    //     $(".item.p6").addClass("active");
    // },10000)
    // setTimeout(function(){
    //     $(".item.p6").addClass("act");
    //     $(".item.p8").addClass("active");
    //     num = 0;
    //
    //     t =setInterval(function(){text("p8")},200);
    //     setTimeout(function(){
    //         var nub = $(".active.p8 .text").length;
    //         t =setInterval(function(){textTwo("p8",nub)},10);
    //     },7500)
    //
    // },12500)
    // setTimeout(function(){
    //     num = 0;
    //     $(".item.p8").addClass("act");
    //     $(".item.p9").addClass("active");
    //
    //     t =setInterval(function(){text("p9")},10);
    //
    // },18000)
    //
    //
    // function text(obj) {
    //     $(".active."+obj+" .text").eq(num).addClass("active");
    //     console.log(num)
    //     console.log($(".active."+obj+" .text").length-1+"***")
    //     if(num == $(".active."+obj+" .text").length-1){
    //         clearInterval(t);
    //     }
    //     num++;
    // }
    // function textTwo(obj,nub) {
    //     nub--
    //     $(".active."+obj+" .text").eq(nub).addClass("active");
    //     if(nub==0){
    //         clearInterval(t);
    //     }
    //
    // }

    // timer = setInterval(function(){abc()},2000)


})