$('#a').click(function(){
    var a = $('#a').val();
   if(a <= 100){
    console.log(a);
    $('#khoi2').css('width',a);
   }
   else{
    alert('ban da nhap sai')
   }
})