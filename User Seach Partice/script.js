let users = [
    {
        name: "animsha rathore",
        pic: "https://plus.unsplash.com/premium_photo-1763734785445-39cb4ecc3a45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "silent chaos in a loud world | not for everyone"
    },
    {
        name: "marav mehta",
        pic: "https://plus.unsplash.com/premium_photo-1682096621406-2d1ec972e8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "living on coffee and late-night ideas"
    },
    {
        name: "zoya khan",
        pic: "https://plus.unsplash.com/premium_photo-1734603747415-03fb64fbe43c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "soft heart, savage mind"
    },
    {
        name: "kabir singh",
        pic: "https://plus.unsplash.com/premium_photo-1734611549078-7ce962c0330b?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "built from hustle and hard lessons"
    },
    {
        name: "meher ali",
        pic: "https://images.unsplash.com/flagged/photo-1579505000852-9b557be71663?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "sunsets, music, and main character energy"
    },
    {
        name: "danish malik",
        pic: "https://images.unsplash.com/photo-1616923756733-a0d6c4ef67fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "calm outside, overthinking inside"
    },
    {
        name: "sana iqbal",
        pic: "https://images.unsplash.com/photo-1590496552566-41aca09db352?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "dream big, stress bigger"
    }
    // {
    //     name: "rayyan ahmed",
    //     pic: "https://images.unsplash.com/photo-1641059198875-671f41d171d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwYmFja2dyb3VuZCUyMGJsdWUlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D",
    //     bio: "lost in thoughts, found in vibes"
    // }
];

function showUsers(arr) {


    arr.forEach(user => {
        let card = document.createElement("div")
        card.classList.add("card")

        let img = document.createElement("img")
        img.setAttribute("src", user.pic)

        let content = document.createElement("div")
        content.classList.add("content")

        let h3 = document.createElement("h3")
        h3.textContent = user.name

        let p = document.createElement("p")
        p.textContent = user.bio
        // console.log(card, img, h3,p);




        card.appendChild(img)
        card.appendChild(content)
        content.appendChild(h3)
        content.appendChild(p)


        document.querySelector(".card_container").appendChild(card)


    });
}
showUsers(users)

let inp = document.querySelector(".inp")
inp.addEventListener("input", () => {
    let newuser = users.filter(user => {
        return user.name.startsWith(inp.value)
    })
    document.querySelector(".card_container").innerHTML = ""
    showUsers(newuser)

})