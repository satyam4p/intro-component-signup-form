
function handleSubmit(){
    event.preventDefault();
    console.log(event);
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const inputDetails = {};
    inputDetails["firstName"] = firstName;
    inputDetails["lastName"] = lastName;
    inputDetails["email"] = email;
    inputDetails["password"] = password;
    if(validateInput(inputDetails,event.target)){
        event.target.submit();
        window.location.search="";
        
    }
}

console.log();
function handleFirstName(){
    event.target.value === " " || event.target.value==="" ? 
    raiseWarning(event.target,"First name cannot be empty"):callSuccess(event.target);
}

function handleLastName(){
    event.target.value === " " || event.target.value==="" ? 
    raiseWarning(event.target,"Last name cannot be empty"):callSuccess(event.target);
}

function handleEmailChange(){
    let isEmail = validateEmail(event.target.value);
    isEmail ? callSuccess(event.target):raiseWarning(event.target,"Looks like this is not an email");
}

function validateEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function handlePassword(){
    const pass = event.target.value;
    if(pass ===""){
        raiseWarning(event.target,"Password cannot be empyty");
    }else if(pass.length < 6){
        raiseWarning(event.target,"Password too small");
    }else{
        callSuccess(event.target);
    }
}

function validateInput(inputObj,target){
    console.log(inputObj);
    
    let fn=true,ln=true,em=true,pw=true;
    if(inputObj.firstName ==="") {
        raiseWarning(target.firstName,"First name cannot be empty");
        fn=false;
    }
    if(inputObj.lastName ==="") {
        raiseWarning(target.lastName,"Last name cannot be empty");
        ln = false;
    }
    if(inputObj.email ==="") {
        raiseWarning(target.email,"Email cannot be empty");
        em=false;
    }else if( !validateEmail(inputObj.email)){
        raiseWarning(target.email,"Looks like this is not an email");
        em=false;
    }
    if(inputObj.password === ""){
        raiseWarning(target.password,"Password cannot be empty");
        pw=false;
    }
    if(fn && ln && em && pw){
        return true;
    }else{
        return false;
    }
    
}

function raiseWarning(input, message) {
    const form = input.parentElement;
    const error = form.querySelector('small')
    const icon = form.querySelector('img');
    error.innerText = message;
    icon.style.opacity = 1;
    input.classList = "input-error";
}



function callSuccess(input) {
    const form = input.parentElement;
    const error = form.querySelector('small')
    const icon = form.querySelector('img');
    error.innerText = "";
    icon.style.opacity = 0;
    input.classList = "";
}