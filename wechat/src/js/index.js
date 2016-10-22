/**
 * Created by Administrator on 2016/10/17.
 */
//var rot = document.getElementById("rot");
// var ratio = window.devicePixelRatio;
// var width = document.documentElement.clientWidth;
//

var myswiper = new Swiper(".swiper-container",{
    "direction":"horizontal",
    "speed":300,
    "grabCursor":"true",
    scrollbar:".swiper-scrollbar",
    pageination:".swiper-pagination",
    paginationType:"fraction",
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        //循环动画
        // switch (swiper.activeIndex) {
        //     case 1:
        //         setInterval(function(){
        //             rot.style.animation='swing 4s linear infinite';
        //         },500);//定时器时间是上一个动画执行时间
        //         break;
        //     case 2:
        // }
    }
})
var music_c = document.querySelector(".music-c");
var music_p = document.querySelector(".music-p");
var audio = document.querySelector("audio");
music_p.addEventListener("click",function () {
    if(audio.paused){
        audio.play();
        music_c.style.display = "block";
        this.style.animationPlayState = "running";
    }else{
        audio.pause();
        music_c.style.display = "none";
        this.style.animationPlayState = "paused";
    }
})