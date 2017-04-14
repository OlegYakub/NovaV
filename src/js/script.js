
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
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
        slidesToShow: 1,
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
        slidesToShow: 1,
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
        dots: false
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



 $('.card__slider-nav').on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
      $('.slick-slider').slick('slickGoTo', index);
    }
});

$(document).ready(function() {


/*====================all==================*/

$('.filter__box').each(function(i, el){
  var btn = $(el).find("a.filter__title");
  var drop = $(el).find(".filter__drop");
  $(btn).click(function(e){
    e.preventDefault();
    $(drop).animate({ height: "toggle"}, 300);
  })
});

/*====================Добавить отзыв на странице товара==================*/

$('.c-reviews').each(function(i, el){

  var btn = $(el).find("a.c-reviews__creat");
  var drop = $(el).find(".create");
  var close =  $(el).find(".create .create__cancel");

  $(btn).click(function(e){
    e.preventDefault();
    $(drop).animate({ height: "toggle"}, 500);
    $(this).toggleClass("c-reviews__creat--active");
  });

  $(close).click(function(e){
    e.preventDefault();
    $(drop).animate({ height: "hide"}, 500);
    $(btn).removeClass("c-reviews__creat--active");
  });
});

/*====================коментарии к товару==================*/

$('.c-reviews__item').each(function(i, el){

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
      console.log(1);
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

  $('.list__paginator').pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
/*======================================================*/

$('.main-search__select').click(function(e){
  e.preventDefault();
  $('#category-list').toggle();
})

$('#open-phones').click(function(){
  $('.phones').show();
})

$('#close-phones').click(function(e){
  console.log(1);
  e.preventDefault();
  $('.phones').hide();
});

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

$('.shares__desc').each(function(i, el){
  var r = $(el).text();
  $(el).text(truncate(r, 178));
})

$('.m-overwv__desc').each(function(i, el){
  var r = $(el).text();
  $(el).text(truncate(r, 132));
});

$(' .rate_row ').starwarsjs();


/*==================tabs======================*/

$( ".c-tabs" ).tabs();



/*===============slimScroll=====================*/

 $('#category-drop').slimScroll({
        height: '450px'
});
 $('.trash-modal__list').slimScroll({
        height: '345px'
});

/*================modal=====================*/
	
	$('.btn').click(function(){
		$('.header').modal({
		  fadeDuration: 250,
		  fadeDelay: 0.80
		});
	});




});