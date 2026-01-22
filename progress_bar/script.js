let progressText = document.querySelector(".progress-text")
let progressBar = document.querySelector(".progress-bar")
let sec = 5;
let count = 0;


let inter = setInterval(() => {
    if (count <= 99) {
        count++
        progressBar.style.width = `${count}%`
        progressText.textContent = `${count}%`
    }
    else{
        clearInterval(inter)
        document.querySelector('h2').textContent='Downloaded'

    }
}, (sec * 1000) / 100);