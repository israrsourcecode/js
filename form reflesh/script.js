let name1 = document.querySelector("#name")
let email = document.querySelector("#email")
let clear = document.querySelector("#clear")
let form=document.querySelector("form")

form.addEventListener("submit", ((e) => {
    e.preventDefault()
    localStorage.setItem("name", name1.value);
    localStorage.setItem("email", email.value);


}))
name1.value = localStorage.getItem("name")
email.value = localStorage.getItem("email")


clear.addEventListener("click", () => {
    localStorage.clear();
    form.reset()
})
