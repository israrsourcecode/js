let users = [
    {
        name: "animsha rathore",
        pic: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "silent chaos in a loud world | not for everyone"
    },
    {
        name: "marav mehta",
        pic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        bio: "living on coffee and late-night ideas"
    },
    {
        name: "zoya khan",
        pic: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "soft heart, savage mind"
    },
    {
        name: "kabir singh",
        pic: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        bio: "built from hustle and hard lessons"
    },
    {
        name: "meher ali",
        pic: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        bio: "sunsets, music, and main character energy"
    },
    {
        name: "danish malik",
        pic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        bio: "calm outside, overthinking inside"
    },
    {
        name: "sana iqbal",
        pic: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        bio: "dream big, stress bigger"
    }
    // {
    //     name: "rayyan ahmed",
    //     pic: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    //     bio: "lost in thoughts, found in vibes"
    // }
];

function showUsers(arr) {
    arr.forEach(user => {
        // Create main card div
        const card = document.createElement("div");
        card.className = "card";

        // Create image
        const img = document.createElement("img");
        img.src = user.pic;
        img.className = "bg-img";
        img.alt = "";

        // Blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`
        blurredLayer.className = "blurred-layer";

        // Content container
        const content = document.createElement("div");
        content.className = "content";

        // Heading
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Paragraph
        const para = document.createElement("p");
        para.textContent = user.bio;

        // Build structure
        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Add to page (choose where you want it)
        // document.body.appendChild(card);
        document.querySelector(".card-container").appendChild(card);

    });
}


showUsers(users)

let inp = document.querySelector(".inp")
inp.addEventListener("input", () => {
    let newrr = users.filter((user) => {
        return user.name.startsWith(inp.value);
    })

    document.querySelector(".card-container").innerHTML = "";
    showUsers(newrr)
})
