$( document ).ready(function() {
   var a=function rastgele (x,y) {
	/*x ten y'ye kadar rastgele sayı ver*/
	return ~~(Math.random() * y) + x;
}
 function renkver(){
     return rastgele(10,200)
     
 }
    setInterval(function(){ 
        var body = $("body");
        $(body).css("background-color","red")
        console.log(a())
        
    }, 500);

}); 
