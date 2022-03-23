
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
   

    if (username === "cselective3" && password === "bscs31e1") {
       alert("You have successfully logged in.");
        window.open('index2.html')
    } 
      else {
          alert("Invalid Username and Password. Please try again!!");
       }

   
})




    