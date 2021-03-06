"use strict"

var windowWidth = $(window).width();
var windowHeight = $(window).height();
/*==============slick=============*/

$('#maker-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '#maker-left-arr',
  nextArrow: '#maker-right-arr',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.card-m__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  dots: true,
  infinite: true,
  arrows: false
});

$('#client-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '#client-left-arr',
  nextArrow: '#client-right-arr',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('#c-consum-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  infinite: false,
  arrows: true,
  prevArrow: '#c-main2-left-arr',
  nextArrow: '#c-main2-right-arr',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('#c-searched-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  infinite: false,
  arrows: true,
  prevArrow: '#c-searched-left-arr',
  nextArrow: '#c-searched-right-arr',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});


$('.together').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  dots: true,
  infinite: false,
  arrows: true,
  prevArrow: '.maker-sl__left',
  nextArrow: '.maker-sl__right',
  responsive: [
    
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
});
$('.card__slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.card__slider-nav'
});

$('.card__slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.card__slider-for',
  autoplay: false,
  dots: false,
  infinite: true,
  arrows: false,
});

if(windowWidth < 743){
  $('.shares__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false
  });

  $('.m-recomend__body').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false
  });
}

 $('.card__slider-nav').on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
      $('.slick-slider').slick('slickGoTo', index);
    }
});

$(document).ready(function() {


$('#form-city').styler();
$("#order-delivery").styler();
/*====================all==================*/




$('.filter__box').each(function(i, el){
  var btn = $(el).find("a.filter__title");
  var drop = $(el).find(".filter__drop");
  $(btn).click(function(e){
    e.preventDefault();
    $(drop).animate({ height: "toggle"}, 300);
  })
});

$('.o-comment__btn').click(function(e){
  e.preventDefault();
  $('.o-comment__area').toggle();
  $(".o-comment__btn").toggle();
})

$('.o-submit__promo-link').click(function(e){
  e.preventDefault();
  $('.o-submit__inp').toggle();
})

/*==========================================*/
/*====================POPUP==================*/
/*==========================================*/


$('.m-reasons__banner a').click(function(e){
  e.preventDefault();
  $('.overlay__pop').show();
  $('.btn-popup').show();

});

$('.btn-popup__btn').click(function(e){
  e.preventDefault();
   $('.overlay__pop').hide();
   $('.btn-popup').hide();
});

/*============================================*/
/*=================basketInput================*/

function countgood() {
  var minus = $('.step1__prev');
  var plus = $('.step1__next');
  var value = $('.step1__input input').val();
  //console.log(value + ' - input value');

  $(plus).click(function(){
    value = +value + 1;
    $('.step1__input input').val(value);
  });

  $(minus).click(function(){
    value = +value - 1;

    if(value < 0){
      value = 0;
    }else{
      $('.step1__input input').val(value);
    }
    
  });
}

countgood();

/*============================================*/
/*====================Header==================*/
/*============================================*/

/*====бургер который только на мобайле*/
$('#burger-btn-mob').click(function(e){
  e.preventDefault();
  $('#burger-menu-mob').animate({ height: "toggle"}, 500);
   $(this).toggleClass('burger--active');
});


/*====бургер который на прилипающем меню до мобайла*/
$('#burger-btn-mini').click(function(e){
  e.preventDefault();
  $('#burger-menu-mini').animate({ height: "toggle"}, 250);
   $(this).toggleClass('burger--active');
});


/*====бургер который в главном хедере на 940-740*/
$("#burger-btn-top").click(function(e){
  e.preventDefault();
  $('#burger-menu-top').animate({ height: "toggle"}, 250);
   $(this).toggleClass('burger--active');
});
  
/*===== закрывание при клике вне зоны меню*/
$(document).mouseup(function (e) {

    /*====бургер который на прилипающем меню до мобайла*/
    if(windowWidth < 1170){
    var container = $(".mini-head");
    if (container.has(e.target).length === 0){
        $('#burger-menu-mini').animate({ height: "hide"}, 250);
        $('#burger-btn-mini').removeClass('burger--active');
    };
    }

    /*====бургер который в главном хедере на 940-740*/
    var container2 = $(".header-top");
    if (container2.has(e.target).length === 0){
        $('#burger-menu-top').animate({ height: "hide"}, 250);
        $('#burger-btn-top').removeClass('burger--active');
    }

    /*====бургер находиться на мобайле 320*/
    var container3 = $(".header");
    if (container3.has(e.target).length === 0){
        $('#burger-menu-mob').animate({ height: "hide"}, 500);
        $('#burger-btn-mob').removeClass('burger--active');
    }
    
});


/*=======список телефонов на главном хедере*/
$('#open-phones').click(function(){
  $('#phones').show();
});

$('#close-phones').click(function(e){
  e.preventDefault();
  $('#phones').hide();

});

/*=======список телефонов на прилипающем хедере*/
$('#open-phones-mini').click(function(e){
  e.preventDefault();
  $('#phones-mini').show();
});

$('#close-phones-mini').click(function(e){
  e.preventDefault();
  $('#phones-mini').hide();

});


/*=======список телефонов на хедере тоглько мобайл*/
$('#open-phones-mob').click(function(e){
   e.preventDefault();
  $('#phones-mob').animate({ height: "toggle"}, 500);
});

$('#mob-search-open').click(function(e){
   e.preventDefault();
  $('.mob-search').animate({ height: "toggle"}, 200);
});

if(windowWidth > 744){
  $(window).scroll(function(){
    var top = $(window).scrollTop();

    if(top > 130){
      $('.mini-head').show();
    }else{
      $('.mini-head').hide();
    }
  });
}

/*================нижнее меню===============*/

$('#water-for').click(function(e){
  e.preventDefault();
  /*$('.header__bot').toggleClass('header__bot--open');*/
  $('#water-for-list').toggle();
  $('#drink-water').hide();
  $('#prom-water').hide();
  $('#cartr-list').hide();
  if(windowWidth < 960){
    $('#water-type-list').hide();
    
  }
});

$('#water-type').click(function(e){
  e.preventDefault();
  /*$('.header__bot').toggleClass('header__bot--open');*/
  $('#water-type-list').toggle();
  
  if(windowWidth < 960){
    $('#water-for-list').hide();
    $('#cartr-list').hide();
  }
});

if(windowWidth < 1170){
  $('#drink-water-item').click(function(e){
    e.preventDefault();
    $('#drink-water').toggle();

    $('#prom-water').hide();
    $('#for-float').hide();
    $('#for-home').hide();
    $('#for-company').hide();
    $('#water-for-list').hide();
    $('#cartr-list').hide();

  });
  $('#prom-water-item').click(function(e){
    e.preventDefault();
    $('#prom-water').toggle();

    $('#drink-water').hide();
    $('#for-float').hide();
    $('#for-home').hide();
    $('#for-company').hide();
    $('#water-for-list').hide();
    $('#cartr-list').hide();

  });
  $('#for-float-item').click(function(e){
    e.preventDefault();
    $('#for-float').toggle();

    $('#drink-water').hide();
    $('#prom-water').hide();
    $('#for-home').hide();
    $('#for-company').hide();
    $('#cartr-list').hide();

    if(windowWidth < 960){
      $('#water-type-list').hide();
    }
  });
  $('#for-home-item').click(function(e){
    e.preventDefault();
    $('#for-home').toggle();

    $('#drink-water').hide();
    $('#prom-water').hide();
    $('#for-float').hide();
    $('#for-company').hide();
    $('#cartr-list').hide();

    if(windowWidth < 960){
      $('#water-type-list').hide();
    }
  });
   $('#for-company-item').click(function(e){
    e.preventDefault();
    $('#for-company').toggle();

    $('#drink-water').hide();
    $('#prom-water').hide();
    $('#for-float').hide();
    $('#for-home').hide();
    $('#cartr-list').hide();

    if(windowWidth < 960){
      $('#water-type-list').hide();
    }
  });

  $('.header__cartr').click(function(e){
    e.preventDefault();
    /*$('.header__bot').removeClass('header__bot--open');*/
    $('#water-for-list').hide();
    $('#drink-water').hide();
    $('#prom-water').hide();

    $('#cartr-list').toggle();

  });
}

$('.b-aside__li').each(function(i, el){
  var btn = $(el).find($('.b-aside__year'));
  var list = $(el).find($('.b-aside__list'));

  $(btn).click(function(){
    $(list).animate({ height: "toggle"}, 200);
    $(this).toggleClass('b-aside__year--active')
  });
});

/*============================================*/
/*====================FOOTER==================*/
/*============================================*/

$('.footer__col').each(function(i, el){
  var btn = $(el).find($('.footer__title'));
  var list = $(el).find($('.footer__list'));

  $(btn).click(function(){
    $(list).animate({ height: "toggle"}, 200);
    $(this).toggleClass('footer__title--active')
  })
})

/*==============================================================*/
/*====================Добавить отзыв на странице товара==================*/



/*====================коментарии к товару==================*/

/*$('.c-reviews__item').each(function(i, el){

  var answersBtn = $(el).find("#review-answers");
  var answersDrop = $(el).find(".answers");
  var answersClose = $(el).find(".answers__close a");
  
  var replyBtn = $(el).find("#review-reply");
  var replyDrop = $(el).find(".reply");
  var replyClose = $(el).find(".reply__cancel");

  //посмотреть коментарии
  $(answersBtn).click(function(e){
    e.preventDefault();
    $(answersDrop).animate({ height: "toggle"}, 500);
    $(this).toggleClass("c-reviews__link--active");
  });

  $(answersClose).click(function(e){
    e.preventDefault();
    $(answersDrop).animate({ height: "hide"}, 500);
    $(answersBtn).removeClass("c-reviews__link--active");
  });

  //ответить на коментарий
  $(replyBtn).click(function(e){
    e.preventDefault();
    $(replyDrop).animate({ height: "toggle"}, 500);
    $(this).toggleClass("c-reviews__link--active");
  });

  $(replyClose).click(function(e){
    e.preventDefault();
    $(replyDrop).animate({ height: "hide"}, 500);
    $(replyBtn).removeClass("c-reviews__link--active");
  });

});*/

$('.b-message').each(function(i, el){
  var replyBtn = $(el).find(".c-reviews__link");
  var replyDrop = $(el).find(".reply");
  var replyClose = $(el).find(".reply__cancel");

  //ответить на коментарий
  $(replyBtn).click(function(e){
    e.preventDefault();
    $(replyDrop).animate({ height: "toggle"}, 500);
    $(this).toggleClass("c-reviews__link--active");
  });

  $(replyClose).click(function(e){
    e.preventDefault();
    $(replyDrop).animate({ height: "hide"}, 500);
    $(replyBtn).removeClass("c-reviews__link--active");
  });
});

/*=========================filter range==============*/

  $(".filter__range").slider({
      min: 0,
      max: 1000,
      values: [0,1000],
      range: true,
      stop: function(event, ui) {
          $(".filter__inputs input#minCost").val($(".filter__range").slider("values",0));
          $('.filter__range--text1').text($(".filter__range").slider("values",0));
          $(".filter__inputs input#maxCost").val($(".filter__range").slider("values",1));
          $('.filter__range--text2').text($(".filter__range").slider("values",1));
      },

      slide: function(event, ui){
          $(".filter__inputs input#minCost").val($(".filter__range").slider("values",0));
          $('.filter__range--text1').text($(".filter__range").slider("values",0));
          $(".filter__inputs input#maxCost").val($(".filter__range").slider("values",1));
          $('.filter__range--text2').text($(".filter__range").slider("values",1));
      }
      
  });

  $('.filter__range--text1').text($(".filter__inputs input#minCost").val());
  $('.filter__range--text2').text($(".filter__inputs input#maxCost").val());

  $(" input#minCost").change(function(){

      var value1=$(".filter__inputs input#minCost").val();
      var value2=$(".filter__inputs input#maxCost").val();
      $('.filter__range--text1').text($(".filter__inputs input#minCost").val());
      $('.filter__range--text2').text($(".filter__inputs input#maxCost").val());
      if(parseInt(value1) > parseInt(value2)){
          value1 = value2;
          $(".filter__inputs input#minCost").val(value1);
      }
      $(".filter__range").slider("values",0,value1);    
  });
   
  $("input#maxCost").change(function(){
      var value1=$(".filter__inputs input#minCost").val();
      var value2=$(".filter__inputs input#maxCost").val();
      $('.filter__range--text1').text($(".filter__inputs input#minCost").val());
      $('.filter__range--text2').text($(".filter__inputs input#maxCost").val());
      if (value2 > 1000) { value2 = 1000; $(".filter__inputs input#maxCost").val(1000)}
   
      if(parseInt(value1) > parseInt(value2)){
          value2 = value1;
          $(".filter__inputs input#maxCost").val(value2);
      }
      $(".filter__range").slider("values",1,value2);
  });

  if(windowWidth < 743){
    $('#list-paginator').pagination({
        items: 100,
        itemsOnPage: 20,
        cssStyle: 'light-theme'
    });
  }else{
    $('#list-paginator').pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
  }

if(windowWidth < 743){
    $('#news-paginator').pagination({
        items: 100,
        itemsOnPage: 20,
        cssStyle: 'light-theme'
    });
  }else{
    $('#news-paginator').pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
  }

if(windowWidth < 743){
  $('#blog-paginator').pagination({
      items: 100,
      itemsOnPage: 20,
      cssStyle: 'light-theme'
  });
}else{
  $('#blog-paginator').pagination({
      items: 100,
      itemsOnPage: 10,
      cssStyle: 'light-theme'
  });
}
  
/*======================================================*/

$('#open-category').click(function(e){
  e.preventDefault();
  $('#category-list').toggle();
});

$('#open-category-mini').click(function(e){
  e.preventDefault();
  $('#category-list-mini').toggle();
})





$('#list-top-filter').click(function(e){
  e.preventDefault();
  $('.list__option').toggle();
  $("#list-top-filter").toggleClass('list__switch--active');
});

$('.list__option a').click(function(e){
  e.preventDefault();
   $('.list__option').hide();
   $("#list-top-filter").removeClass('list__switch--active');
   
});


$('.blog__archiv a').click(function(e){
  e.preventDefault();
  $('.blog__aside').show();
  $('.overlay').show();
  $('body').addClass("overflowHd");
});


$('.b-aside__close, .overlay').click(function(e){
  e.preventDefault();
  $('.blog__aside').hide();
  $('.overlay').hide();
  $('body').removeClass("overflowHd");
});

/*======================compare=============*/
/*============================================*/

var compareMargin = (windowWidth - $('.comparing__title').width())/2;

//console.log($('.comparing__title').width());
//console.log(compareMargin);
$('.comparing').css("marginLeft", compareMargin);
if(windowWidth > 1170){

  window.onscroll = function() {
    var scrolled = window.pageXOffset || document.documentElement.scrollLeft;
     //console.log(scrolled);
     $('.comparing__header, .comparing__title, .comparing__footer').css("left", scrolled);
  }
}
/*==========================truncate============================*/


function truncate(str, maxlength){
  var l = str.length;

  if( l > maxlength){
    str = str.slice(0, maxlength - 3) + "...";
    return str;
    
  }else{
    return str;
  }
}


$('.m-overwv__desc').each(function(i, el){
  var r = $(el).text();
  $(el).text(truncate(r, 132));
});

$(' .rate_row ').starwarsjs();


if(windowWidth < 1170 && windowWidth > 960){
  $('.shares__desc').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 580));
  })
} else if(windowWidth < 960 && windowWidth > 744){
  $('.shares__desc').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 250));
  })
}else{
  $('.shares__desc').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 178));
  })
}



if(windowWidth > 960){
  $('.news__text').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 580));
  })
} else if(windowWidth < 960 && windowWidth > 744){
  $('.news__text').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 280));
  })
}else{
  $('.news__text').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 178));
  })
}



/*==================tabs======================*/

$( ".c-tabs" ).tabs();

/*===========filter-aside==============*/

$('.list__btn-f').click(function(){
  $('.filter__aside').toggleClass('filter__aside--show');
  $('.overlay').toggle();
  $('body').addClass('overflowHd');
});

$('.filter__click').click(function(){
  $('.overlay').hide();
  $('.filter__aside').removeClass('filter__aside--show');
  $('body').removeClass('overflowHd');
});

/*=====================================================*/
/*==========================handleTouch functions===================*/
/*=====================================================*/

if(windowWidth < 1170){

  $('.filter__wrap').slimScroll({
    height: "100vh"
  });

  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', handleTouchMove, false);
 
  var xDown = null;                                                        
  var yDown = null;     
  var counter = 0;

  function showFilter() {
    $('.overlay__swipe').show();
    $('.filter__aside').addClass('filter__aside--show');
    $('body').addClass('overflowHd');
  }

  function hideFilter() {
    $('.filter__aside').removeClass('filter__aside--show');
    $('.overlay__swipe').hide();
    $('body').removeClass('overflowHd');
  }

  function moveReasonBoxIn() {
    var boxWidth = 1140;
    var boxDiff = 1140 - windowWidth; 
    //console.log(boxDiff);
    $('.m-reasons__box').css("transform", 'translateX(-'+ boxDiff +'px)')
  }

  function moveReasonBoxOut() {
    var boxWidth = 1140;
    var boxDiff = 1140 - windowWidth; 
    //console.log(boxDiff);
    $('.m-reasons__box').css("transform", 'translateX(0px)')
  }

  function moveReasonMob(counter) {
    var pdSlides = (windowWidth - 285) / 2;
    var lengthOfMove = (285 - pdSlides);
    var lengthOfMoveNext = (lengthOfMove * counter) + pdSlides;

    /*console.log(counter + "- counter");
    console.log(lengthOfMove + "- lengthOfMove");
    console.log(pdSlides + "- pdSlides");*/
    if(counter == 4){
      return
    }else if(counter == 1 ){
      $('.m-reasons__box').css("transform", 'translateX(-'+ lengthOfMove +'px)')
    }else if(counter == 2 || counter == 3){
      $('.m-reasons__box').css("transform", 'translateX(-'+ lengthOfMoveNext +'px)');
    }else{
      $('.m-reasons__box').css("transform", 'translateX(0px)');
    }
  }

  function handleTouchStart(evt) {                                         
      xDown = evt.touches[0].clientX;                                      
      yDown = evt.touches[0].clientY;                                      
  };                                                
  function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }


    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if(Math.abs( xDiff )+Math.abs( yDiff )>150){ //to deal with to short swipes

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {/ left swipe / 
           //alert('left!');
          hideFilter();
          
          if(windowWidth < 744){        
            counter = counter + 1;
            //console.log(counter);
            if(counter > 3){
              counter = 4;
            }  
            moveReasonMob(counter);
          }else if(windowWidth < 960){
            moveReasonBoxIn();
          }

        } else {/ right swipe /
           //alert('right!');
          showFilter();

          if(windowWidth < 744){        
            counter = counter - 1;
            //console.log(counter);
            if(counter < 1){
              counter = 0;
            }  
            moveReasonMob(counter);
          }else if(windowWidth < 960){
            moveReasonBoxOut();
          }

        }                       
    } else {
        if ( yDiff > 0 ) {/ up swipe /
           // alert('Up!'); 
        } else { / down swipe /
           // alert('Down!');
        }                                                               
    }
    / reset values /
    xDown = null;
    yDown = null;
    }
  };

}

/*==========================end of handleTouch functions======*/
/*===============slimScroll=====================*/

$('#category-drop').slimScroll({
        height: '450px'
});
/*$('.trash-modal__list').slimScroll({
        height: '345px'
});*/

/*=====================================*/
	
});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});