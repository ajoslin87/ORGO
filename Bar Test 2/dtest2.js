$(document).ready(function(){
  $('.next1' ).click(function() {
$('#card1').hide().next().show().addClass('current'); })

$('.next1' ).click(function() {
$('#card1').hide().next().show().addClass('current'); })

$('.next2' ).click(function() {
$('#card2').hide().next().show().addClass('current'); })

$('.next3' ).click(function() {
$('#card3').hide().next().show().addClass('current'); })

$('.next4' ).click(function() {
$('#card4').hide().next().show().addClass('current'); })

$('.next5' ).click(function() {
$('#card5').hide().next().show().addClass('current'); })

$('.next6' ).click(function() {
$('#card6').hide().next().show().addClass('current'); })

$('.next7' ).click(function() {
$('#card7').hide().next().show().addClass('current'); })

$('.next8' ).click(function() {
$('#card8').hide().next().show().addClass('current'); })

$('.next9' ).click(function() {
$('#card9').hide().next().show().addClass('current'); })


;

$('#submit1').on('click',function(){
  var desiredOption =$('#card1').find('#amount1').val();
  var desiredOption2=$('#card1').find('#liqour1').val();
  var desiredOption3=$('#card1').find('#amount2').val();
  var desiredOption4=$('#card1').find('#fruit').val();
  var desiredOption5=$('#card1').find('#amount3').val();
  var desiredOption6=$('#card1').find('#mixer1').val();
  var desiredOption7=$('#card1').find('#amount4').val();
  var desiredOption8=$('#card1').find('#flavors').val();

if(desiredOption ==3 && desiredOption2 ==3 && desiredOption3 ==3 && desiredOption4== 3 && desiredOption5==3 && desiredOption6 ==4 && desiredOption7 ==2 && desiredOption8==4){
  $('#card1').addClass('blue');
}

else{
  $('#card1').addClass('red');
}
})
$('#submit2').on('click',function(){
  var desiredOption =$('#card2').find('#amount1').val();
  var desiredOption2=$('#card2').find('#liqour1').val();
  var desiredOption3=$('#card2').find('#amount2').val();
  var desiredOption4=$('#card2').find('#liqour2').val();
  var desiredOption5=$('#card2').find('#amount3').val();
  var desiredOption6=$('#card2').find('#mixer1').val();
  var desiredOption7=$('#card2').find('#amount4').val();
  var desiredOption8=$('#card2').find('#flavors').val();

if(desiredOption ==3 && desiredOption2 ==2 && desiredOption3 ==2 && desiredOption4== 3 && desiredOption5==2 && desiredOption6 ==4 && desiredOption7 ==4 && desiredOption8==3){
  $('#card2').addClass('blue');
}

else{
  $('#card2').addClass('red');
}
})

})
