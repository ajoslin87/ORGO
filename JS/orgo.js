$(document).ready(function(){

if (localStorage.getItem('start')!== null){
  $('.test').html(localStorage.getItem('start'));
}


$('#button1').click(function(){
$('.incomeEntr').each(function(){
  var id ='start';
  var value =$(this).val();
  localStorage.setItem(id,value);
})
$('.test').prepend(localStorage.getItem('start'))
})


})
