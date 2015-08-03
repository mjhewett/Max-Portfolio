
console.log('Hi there!');


$('.button').on('click', function (){

  $('#p1').removeClass('p1');
  $('#buttonTwo').removeClass('b2');
  $('#p1').addClass('change');
  $('#buttonTwo').addClass('display').fadeIn("slow");
});



$('.b2').on('click', function() {

  $('#p1').removeClass('change').fadeIn();
  $('#buttonTwo').removeClass('display').fadeOut("slow");
  $('#p1').addClass('p1');
  $('#buttonTwo').addClass('b2');
});


$('.funnyBox').on('click', function(){
  console.log('DELETING ALL FILES!');
  $('#bod').addClass('alt');
  $('#p1').removeClass('p1');
  $('#p1').addClass('alternative');
  $('#newButton').removeClass('newButton');
  $('#newButton').addClass('appear');
});


$('.newButton').on('click', function(){
  $('#bod').removeClass('alt');
  $('#p1').removeClass('alternative');
  $('#p1').addClass('p1');
});

