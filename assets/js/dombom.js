let nameInput = document.querySelector("#name")
console.log(nameInput);
let nameError = document.querySelector(".nameErr")
console.log(nameError);
let surnameInput = document.querySelector("#surname")
console.log(surnameInput);
let surnameError = document.querySelector(".surnameErr")
console.log(surnameError);
let mailInput = document.querySelector("input[type=email]")
console.log(mailInput);
let mailError = document.querySelector(".mailErr")
console.log(mailError);
let passwordInput = document.querySelector("#pass")
console.log(passwordInput);
let confirmPasswordInput = document.querySelector("#confirmpass")
console.log(confirmPasswordInput);
let passError = document.querySelector(".passErr")
console.log(passError);
let btn = document.querySelector("button[type=button]")
console.log(btn);



btn.onclick = function(){
   
    if(!nameInput.value){
        nameError.classList.remove("d-none")
    }
    else{
        nameError.classList.add("d-none")

    }
    if(!surnameInput.value){
        surnameError.classList.remove("d-none")
    }
    else{
        surnameError.classList.add("d-none")
    }
    if(!mailInput.value){
        mailError.classList.remove("d-none")
        mailError.innerText = "Your email field is empty"
    }
    else{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailInput.value)){
            mailError.classList.add("d-none")
        }
        else{
            mailError.classList.remove("d-none")
            mailError.innerText = "Please enter correct email format! example : Example123@js.com"

        }

    }
    if(!passwordInput.value && !confirmPasswordInput.value){
        passError.classList.remove("d-none")
        passError.innerText="Please select a password!"
    }
    else{
        if(passwordInput.value!=confirmPasswordInput.value){
            passError.classList.remove("d-none")
            passError.innerText = "Passwords are not same"
            
        }
        else{
            
            passError.classList.add("d-none")
        }
    }

    


    

    const isValid = nameInput.value 
                    && surnameInput.value 
                    && mailInput.value &&
                    passwordInput.value==confirmPasswordInput.value &&(passwordInput.value && confirmPasswordInput.value)
                    && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailInput.value);

    if(isValid) {
        window.open('secondPage.html','_blank')
    }


}

