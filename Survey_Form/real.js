function validateForm(){
    var name=document.getElementById('name-label')
    const nValue=name.value.trim()
    if(nValue==''){
        document.getElementById('valid-name').innerHTML="*Enter Valid Name"
        return false;
    }
    else{
        document.getElementById('name-label').style.visibility="hidden"
    }
}