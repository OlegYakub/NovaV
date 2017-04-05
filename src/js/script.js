
/*==============slick=============*/

$('.maker-sl__slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
/*  autoplaySpeed: 2000,*/
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '.maker-sl__left',
  nextArrow: '.maker-sl__right',
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.together').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
/*  autoplaySpeed: 2000,*/
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function() {

$('.main-search__select').click(function(e){
  e.preventDefault();
  $('#category-list').toggle();
})

/*$('.header__shop, .trash-modal').hover(function(){
  $('.trash-modal').toggle();
});*/

/*$('.header__balance, .balance-modal').hover(function(){
  $('.balance-modal').toggle();
});*/

$('#open-phones').click(function(){
  $('.phones').show();
})

$('#close-phones').click(function(e){
  console.log(1);
  e.preventDefault();
  $('.phones').hide();
});


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