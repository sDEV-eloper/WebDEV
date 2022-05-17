
function seterror(id,error){
element=document.getElementById(id);
element.document.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validateForm(){
    var returnval= true;
    var name=document.forms['myForm']["fname"].value;
    if(name.length<3){
        seterror("name","Length of name is too short");
        returnval=false;
    }
    return returnval;
}