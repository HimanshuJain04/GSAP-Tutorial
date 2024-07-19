

const cursor = document.getElementById("cursor");
const main = document.getElementById("main");
const image = document.getElementById("image");


main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5,
    })
})


image.addEventListener("mouseenter", function (e) {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ffffffb5"
    })
})

image.addEventListener("mouseleave", function (e) {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })
})