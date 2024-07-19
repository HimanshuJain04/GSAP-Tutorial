const closeBtn = document.getElementById("close");
const menu = document.getElementById("menu");


const timeline = gsap.timeline();



// METHOD-1
// menu.addEventListener("click", () => {
//     timeline.to("#dropdown", {
//         right: 0,
//         duration: 0.8,
//     })

//     timeline.from("#dropdown div", {
//         duration: 1,
//         x: 150,
//         stagger: 0.3,
//         opacity: 0,
//     })
// })

// closeBtn.addEventListener("click", () => {
//     timeline.to("#dropdown", {
//         right: "-30%",
//         duration: 1,
//     })
// })

// METHOD-2
menu.addEventListener("click", () => {
    timeline.play();
})

closeBtn.addEventListener("click", () => {
    timeline.reverse();
})


timeline.to("#dropdown", {
    right: 0,
    duration: 0.8,
})

timeline.from("#dropdown div", {
    duration: 1,
    x: 150,
    stagger: 0.3,
    opacity: 0,
})

timeline.pause();

