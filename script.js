function submit(){
    var x = document.forms["teHoro"]["answer"].value;
if (x == "") {
  alert("enter an answer its not rocket science");   
} 
else if (x =="161") {
    $(".contentContainer").css("display","none");
    $(".keyCode").css("display","flex");
} else{
    alert("nup wrong answer, try again uce");
}
}