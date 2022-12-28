const firstName =document.getElementById("firstName");
const lastName =document.getElementById("lastName");
const email =document.getElementById("email");
const password =document.getElementById("passsword");
const submit =document.getElementById("submit")
const firstError=document.querySelectorAll(".First")
const secondError=document.querySelectorAll(".last")
const thirdError=document.querySelectorAll(".email")
const forthError=document.querySelectorAll(".pass")
const input = document.querySelectorAll("input")
const NAME_REGEX = /^[a-zA-Z]+$/
const emailRegex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

// let user= {
//     firstName:firstName.value,
//     lastName:lastName.value,
//     email:email.value,
//     password:password.value
// }
submit.addEventListener("click",()=>
{
    if(NAME_REGEX.test(firstName.value))
    {
        firstError.forEach(error => {
            error.classList.add("none")
            
        });
        input.forEach(inputs => {
            inputs.classList.add("border")
        });
        
      
    }else
    {
        firstError.forEach(error => {
            error.classList.remove("none")
            
        });
        input.forEach(inputs => {
            inputs.classList.remove("border")
        });
    }
    if(NAME_REGEX.test(lastName.value))
    {
        secondError.forEach(error => {
            error.classList.add("none")
            
        });
        input.forEach(inputs => {
            inputs.classList.add("border")
        });
      
    }else
    {
        secondError.forEach(error => {
            error.classList.remove("none")
            
        });
        input.forEach(inputs => {
            inputs.classList.remove("border")
        });
    }
        if(NAME_REGEX.test(firstName.value))
    {
        firstError.forEach(error => {
            error.classList.add("none")
        });
        input.forEach(inputs => {
            inputs.classList.add("border")
        });
      
    }else
    {
        firstError.forEach(error => {
            error.classList.remove("none")
        });
        input.forEach(inputs => {
            inputs.classList.remove("border")
        });
        
    }
    if(NAME_REGEX.test(lastName.value))
    {
        secondError.forEach(error => {
            error.classList.add("none")
            console.log(error)
        });
        input.forEach(inputs => {
            inputs.classList.add("border")
        });
      
    }else
    {
        secondError.forEach(error => {
            error.classList.remove("none")
            
        });
        input.forEach(inputs => {
            inputs.classList.remove("border")
        });
        
    }
    if(emailRegex.test(email.value))
    {
        thirdError.forEach(error => {
            error.classList.add("none")
            
        });
        input.forEach(inputs => {
            inputs.classList.add("border")
        });
      
    }else
    {
        thirdError.forEach(error => {
            error.classList.remove("none")
            
        });
        input.forEach(inputs => {
            inputs.classList.remove("border")
        });
    }
    if(passRegex.test(password.value))
    {
        forthError.forEach(error => {
            error.classList.add("none")
        });
        input.forEach(inputs => {
            inputs.classList.remove("border")
        });
      
    }else
    {
        forthError.forEach(error => {
            error.classList.remove("none")
        });
        input.forEach(inputs => {
            inputs.classList.add("border")
        });
        
    }
})




