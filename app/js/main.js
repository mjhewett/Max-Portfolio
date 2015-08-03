
$('.button').on('click', function (){
  $('#p1').removeClass('p1');
  $('#p1').addClass('change');


  console.log('clicked');
});

$('.b2').on('click', function() {
  $('#p1').removeClass('change').fadeIn();
  $('#p1').addClass('p1');
});
