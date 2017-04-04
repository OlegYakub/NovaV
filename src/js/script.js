
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
      breakpoint: 480,
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

$(document).ready(function() {
$('.main-search__select').styler();


function truncate(str, maxlength){
  var l = str.length;

  //console.log(l);
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
})



/*===============slimScroll=====================*/

 $('.main-search__drop--wrapper').slimScroll({
        height: '450px'
});


/*================modal=====================*/
	
	$('.btn').click(function(){
		$('.header').modal({
		  fadeDuration: 250,
		  fadeDelay: 0.80
		});
	});




});