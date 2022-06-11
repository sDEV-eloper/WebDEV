
var out;

function mycolor(){
    var colr=Math.floor(Math.random() * 1000);
    var chng="#"+colr;
    const a=document.querySelector('body').style.backgroundColor=chng;
    const b=document.querySelector('.color').style.backgroundColor=chng;
    // var out=setTimeout(function() {mycolor()},500);
     out=setTimeout(mycolor,50);
}

function stop(){
    clearInterval(out);
}