let main = document.querySelector(".main")

function modeCheck() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        main.classList.add("dark")
        main.classList.remove("light")
    } else {
        main.classList.add("light")
        main.classList.remove("dark")

    }
}
if (localStorage.getItem("theme")) {
    main.classList.add(localStorage.getItem("theme"))
} else {
    modeCheck()
}
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
    
        modeCheck()
    }
    })
    document.querySelector("button").addEventListener("click", () => {
    if (main.classList.contains("light")) {
        main.classList.add("dark");
        main.classList.remove("light");
        localStorage.setItem("theme", "dark")
    } else {
        main.classList.add("light");
        main.classList.remove("dark");
        localStorage.setItem("theme", "light")
    }
});

