
function afficher(){ 
 
    var a =document.getElementById(bon);
    var sel =document.getElementById(sel); 
    sel.style.display=''

} 

function fn(){ 
 
 if (document.getElementById("bon").checked==true) {

    document.getElementById("sel").style.display='block'; 

 } 
 if (document.getElementById("bon2").checked==true) {

    document.getElementById("sel").style.display='none'; 

 } 


}
 
function pass() {
   var  a =document.getElementById("passw") ;
   if(a.value==="")
   {
     a.value="enter a password here" 
     a.style.color='red'
   }


}
