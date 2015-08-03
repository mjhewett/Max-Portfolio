
$('.button').on('click', function (){
  $('#p1').removeClass('p1');
  $('#p1').addClass('change');
  $('#buttonTwo').removeClass('b2');
  $('#buttonTwo').addClass('display');
  $('display').fadeIn("slow");



  console.log('clicked');
});

$('.b2').on('click', function() {
  $('#p1').removeClass('change').fadeIn();
  $('#p1').addClass('p1');
  $('#buttonTwo').removeClass('display');
  $('#buttonTwo').addClass('b2');
});
