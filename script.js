let form = document.querySelector('form')
let inputs = document.querySelectorAll('input')
let main = document.querySelector('.main')

form.addEventListener("submit", (el) => {
    el.preventDefault();

    let card = document.createElement("div")
    card.classList.add("card")

    let profileImage = document.createElement("div")
    profileImage.classList.add("profile-image")

    let image = document.createElement("img")
    image.setAttribute("src", "https://images.unsplash.com/photo-1768326943634-f15d407bda45?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    let name = document.createElement("h3")
    name.textContent = 'NNNN'

    let ocup = document.createElement("h5")
    ocup.textContent = 'name hhh'

    let info = document.createElement("p")
    ocup.textContent = "nak erkektekgk erfjlilefj f"

    main.appendChild(card)

    card.appendChild(profileImage)
    profileImage.appendChild(image)
    card.appendChild(name)
    card.appendChild(ocup)
    card.appendChild(info)


})





