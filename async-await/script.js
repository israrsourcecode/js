// let pr = new Promise(function (res, req) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.random() * 10)
//         if (rn > 5) res("resolved " + rn)
//         else {
//             req("reject " + rn)
//         }
//     }, 3000);
// })
// pr.then(function (val) {
//     console.log(val);
// }).catch(function (val) {
//     console.log(val);

// })


let pr = new Promise(function (res, req) {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10)
        if (rn > 5) res("Resolved " + rn)
        else req("Reject " + rn)
    }, 1000);
})

async function abcd() {
    try {
        let varify = await pr
        console.log(varify);

    } catch (error) {
        console.log(error);

    }
}
abcd()