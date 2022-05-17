const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();
})

const validate=()=>{
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();


// validate username
if(usernameVal=== ""){
    setErrormsg(username, 'username cannot be blank');
}else if(usernameVal.length<=2){
    setErrormsg(username, 'username min 3 char');
}
else{
    setSuccessmsg(username, '')
}


const isEmail=(emailVal)=>{
    var atSymbol=emailVal.indexOf("@");
    if(atSymbol<1)
    return false;
    var dot=emailVal.lastIndexOf(".");
    if(dot<= atSymbol +3) return false;
    // check dot present in last 
    if(dot===emailVal.length-1) return false;
    return true;

}

// email 
if(emailVal=== ""){
    setErrormsg(email, 'email cannot be blank');
}else if(!isEmail(emailVal)){
    setErrormsg(email, 'Invalid Email');
}
else{
    setSuccessmsg(email, '')
}
}