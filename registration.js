const username = document.querySelector("#username");
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const signUpBtn = document.querySelector("#signup-btn");

signUpBtn.addEventListener('submit',(e) =>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    if (username === ''){
    setError(username, 'username is required');
    }
    else{
        setsuccess(username);
    }
if(emailVal===''){
    setError(email, 'email is required');
}
else if(ValidateEmail(emailVal)) {
    setError(email, 'please enter a valid email');
}
else{
    setsuccess(email);
}
if(passwordVal === ''){
    setError(password, 'password is required');
}
else if(password.length<8){
    setError(password, 'password must be atleast 8 character');
}
else{
    setsuccess(password);
}
if(cpasswordVal === ''){
    setError(password, 'confirm password is required');
}
else if(cpasswordVal!==passwordVal){
    setError(password, 'password does not match');
}
else{
    setsuccess(cpassword);
}
}
function setsuccess(element){
    const inpurGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerext = '';
    inpurGroup.classList.add('success');
    inpurGroup.classList.remove('error');

}

form.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(username.value);
  //   console.log(email.value);
  //   console.log(password.value);
  //   console.log(confirmPassword.value);

  
if (password.value === confirmPassword.value) {
    const userId = Math.floor(Math.random() * 100);
    //   console.log(userId);
    const userObj = {
      id: userId,
      username: username.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    console.log(userObj);
    localStorage.setItem(userId, JSON.stringify(userObj));
    username.value = "";
    (email.value = ""), (password.value = ""), (confirmPassword.value = "");
  } else {
    alert("Enter password and confirm password as same");
  }
});