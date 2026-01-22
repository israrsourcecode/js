let form = document.querySelector("#loginForm")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

form.addEventListener('submit', (dts) => {
    dts.preventDefault()
    document.querySelector('#passwordError').textContent = ""
    document.querySelector('#emailError').textContent = ""

    let invalid = true;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailTest = emailRegex.test(email.value);
    let passwordTest = passwordRegex.test(password.value);
    if (!emailTest) {
        document.querySelector('#emailError').textContent = "incorrect email";
        invalid = false;
    }
    if (!passwordTest) {
        document.querySelector('#passwordError').textContent = "incorrect passwordError";
        invalid = false;
    }

    if (invalid) {
        document.querySelector("#successMsg").textContent = 'Succesfully Complete'
        email.value = '';
        password.value = '';
    }else{
         document.querySelector("#successMsg").textContent = ''
    }
})