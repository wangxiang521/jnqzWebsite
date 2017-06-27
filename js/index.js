/**
 * Created by Administrator on 2016/11/18 0018.
 */
/*console.log(243)*/

$(function(){
   /* if($(window).width()>765){
        $('#m-menu>li a[href="page1"]').html().addClass('active').siblings().removeClass('active')
    }*/
    $('.m-btn').on('click',function(){
        /*console.log(1)*/
        if( $(' #m-menu').css('display')=='none'){
            $(' #m-menu').css('display','block')
            $('.m-btn').addClass('active')
        }else{
            $(' #m-menu').css('display','none')
            $('.m-btn').removeClass('active');
        }
    })
    $('#dowebok').fullpage(
        {
        'scrollingSpeed':1000,
        'navigation': true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu:'#menu',
        afterLoad: function(anchorLink, index){
            /*if(index==1){
                $('#m-menu a[href="#page1"]').parent().addClass('active').siblings().removeClass('active')
            }*/
            var menu=document.getElementById('m-menu');
            var pagea=menu.getElementsByTagName("a")
            for(var i=0;i<pagea.length;i++){
               var num=pagea[i].href[pagea[i].href.length-1];
                if(num==index){
                    $(pagea[i]).parent().addClass('active').siblings().removeClass('active')
                }
            }
            if(index == 2){
               /* $('#m-menu a[href="#page2"]').parent().addClass('active').siblings().removeClass('active')*/
                $('.section2').find('.modal').animate({
                    'left':'50%'
                }, 800, 'easeOutExpo');
            }
            if(index == 3){
               /* $('#m-menu a[href="#page3"]').parent().addClass('active').siblings().removeClass('active')*/
                $('.section3').find('p').delay(500).animate({
                    bottom: '0'
                }, 1500, 'easeOutExpo');
                $('.section3-container-header').animate({
                    'left':'0px'
                },700)
                $('.section3-container-img img').animate({
                    'left':'50%'
                },700)
            }
            if(index == 4){
                /*$('#m-menu a[href="#page4"]').parent().addClass('active').siblings().removeClass('active')*/
               $('.section4-c-img').on('click',function(){
                    $(this).siblings('.modall').animate({
                        'top':'0px',
                    } ,500)

                })
                $('.modall').on('mouseleave',function(e){

                    $(this).animate({
                        'top':'500px'
                    },500)
                })
                $('.section4-txt>span').on('click',function(){
                    $('.modalll').css('display','block')
                })

                $('.modalll').on('click',function(){
                    $('.modalll').css('display','none')
                })
                $('.section4').on('click','.slide img',function(){
                    $('.m-modal').css('display','block')
                })
                $('.section4').on('click','.m-modal',function(){
                    $('.m-modal').css('display','none')
                })

            }
            if(index==5){
               /* $('#m-menu a[href="#page5"]').parent().addClass('active').siblings().removeClass('active')*/
                $('.section5-img').slideDown(800);
                $('.section5-img>div>img').on('mouseover',function(){
                    $(this).siblings('.section5-img-modal').css('display','block')
                })

                $('.section5-img-modal').on('mouseleave',function(){
                    $(this).fadeOut(1000)
                })
            }
            if(index==6){
                /*$('#m-menu a[href="#page6"]').parent().addClass('active').siblings().removeClass('active')*/
                if($(window).width()>500){
                    $('.section6-container').fadeIn(1000)
                }else{
                    $('.section6-container').css('display','none')
                }

            }
            if(index==7){
               /* $('#m-menu a[href="#page7"]').parent().addClass('active').siblings().removeClass('active')*/
                $('.img2').animate({
                    'right':'0px',
                    'bottom':'0px'
                },1000)
                $('.img1').delay(1000).animate({
                    'margin-left':'25%'
                },1000)
                $('footer>img').addClass('up')
            }

        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('.modal').delay(100).animate({
                    left: '-1000px'
                }, 1000, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('p').delay(500).animate({
                    bottom: '-120%'
                }, 1500, 'easeOutExpo');
               $('.section3-container-header').animate({
                    'left':'-2000px'
                },700)
                $('.section3-container-img img').animate({

                    'left':'150%'
                },700)
            }
            if(index == '4'){
                    $('.modalll').css('display','none')
            }
            if(index==5) {
                $('.section5-img').slideUp(800);
            }
            if(index==6){
                $('.section6-container').fadeOut(500)
            }
            if(index==7){

                $('.img2').animate({
                    'right':'-1000px',
                    'bottom':'-1000px'
                },1000)
                $('.img1').animate({
                    'margin-left':'-100%'
                },1000)
                $('footer>img').removeClass('up')
            }

        }
    });
    $('footer img').on('click',function(){
        $.fn.fullpage.moveSectionDown();
        
    })
});

