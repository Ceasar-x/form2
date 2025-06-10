let form = document.getElementById('form')
let userError = document.getElementById('usererror')
let user = document.getElementById('name')
let phoneError = document.getElementById('phoneerror')
let phone = document.getElementById('numberr')
let emailError = document.getElementById('emailerror')
let eMail = document.getElementById('mail')
let passError = document.getElementById('passerror')
let pAss = document.getElementById('pass')
let pAssError = document.getElementById('passerror2')
let paSS = document.getElementById('pass2')
let checker = document.getElementById('check')
let checkerror = document.getElementById('checkerror')

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault()
    if (user.value == "" || (user.value).length == 0 ) {
        userError.innerHTML = "Please enter your username" ;
        userError.style.color = "red" ;
    }else if ((user.value).length > 8 ) {
        userError.innerHTML = "maximum of 8 characters" ;
        userError.style.color = "red" ;
    }else{
        userError.innerHTML = "Valid ✔" ;
        userError.style.color = "green" ;
    }
//     if (!/^\d+$/.test(phone.value)) {
//         phoneError.innerHTML = "Enter a valid Phonenumber"
//         phoneError.style.color = "red"
//     }
//     else if (phone.value == "") {
//         phoneError.innerHTML = "Enter your Phonenumber" ;
//         phoneError.style.color = "red";
//     }else if (!(phone.value).length == 11) {
//         phoneError.innerHTML = "Enter a valid Phonenumber" ;
//         phoneError.style.color = "red" ;
//     }else if ((phone.value).length == 11) {
//         phoneError.innerHTML = "Valid ✔" ;
//        phoneError.style.color = "green"
//    }
//     else if((phone.value).startsWith("080") || (phone.value).startsWith('080')  || (phone.value).startsWith('090') && (phone.value).length == 11) {
//         phoneError.innerHTML = "Valid ✔" ;
//         phoneError.style.color = "green"
//     }else {
//         phoneError.innerHTML = "Enter a valid Phonenumber" ;
//         phoneError.style.color = "red" ;
//     }
    if (
    (
        phone.value.startsWith("080") ||
        phone.value.startsWith("081") ||
        phone.value.startsWith("090") ||
        phone.value.startsWith("070") ||
        phone.value.startsWith("091")
    ) && (phone.value).length === 11 && /^\d+$/.test(phone.value)
) {
    phoneError.innerHTML = "Valid ✔";
    phoneError.style.color = "green";
} else {
    phoneError.innerHTML = "Enter a valid phone number";
    phoneError.style.color = "red";
}

    if (eMail.value == "" || (eMail.value).length == 0) {
        emailError.innerHTML = "Please enter your Email";
    }  else if (!eMail.value.includes("@")) {
        emailError.innerHTML = "Enter a valid Email address";
        emailError.style.color = "red" ;
    } else if (!eMail.value.includes(".")) {
        emailError.innerHTML = "Enter a valid Email address";
        emailError.style.color = "red" ;
    } else {
        emailError.innerHTML = "Valid ✔";
        emailError.style.color = "green" ;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

if (pAss.value === "") {
    passError.innerHTML = "Please enter your password";
    passError.style.color = "red";
} else if (!passwordRegex.test(pAss.value)) {
    passError.innerHTML = "Must be at least 8 characters long including letters,numbers,special characters";
    passError.style.color = "red";
} else {
    passError.innerHTML = "Valid ✔";
    passError.style.color = "green";
}
    if ((paSS.value).length == 0){
        pAssError.innerHTML = "Please re-enter your Passsword" ;
        pAssError.style.color = "red" ;
        }
    // else if (!paSS.value === pAss.value) {
    //     pAssError.innerHTML = "Password does not match" ;
    //     pAssError.style.color = "red" ;
    // }
    else if (paSS.value == pAss.value) {
        pAssError.innerHTML = "" ;
        // pAssError.style.color = "green" ;
    }
     
    else{
        pAssError.innerHTML = "Password does not match" ;
        pAssError.style.color = "red" ;
    }
    if (!checker.checked) {
        checkerror.innerHTML = "Please agree to Terms and conditions"
        checkerror.style.color = "red"
    }
    else{
        checkerror.innerHTML = ""
    }
    if (user.value == "" && phone.value == "" && eMail.value == "" && pAss.value == "" && !checker.checked) {
        alert('Una just like to dey stress person, why una go just submit without filling form') ;
    }
    if (userError.innerHTML == "Valid ✔" && phoneError.innerHTML == "Valid ✔" && emailError.innerHTML =="Valid ✔" && passError.innerHTML == "Valid ✔" && checker.checked){
        alert('You have successfully regitered, Please check your email inbox for confirmation code.')
    }
    
}