// Break name into parts
const h1 = document.getElementById("name");
const h1Text = h1.textContent;

const splittedText = h1Text.split("");

var val = "";

splittedText.forEach((e, idx) => {
    if (idx < splittedText.length / 2) {
        val += `<span class="a">${e}</span>`;
    } else {
        val += `<span class="b">${e}</span>`;
    }
})

h1.innerHTML = val;


// Animation

gsap.from("h1 .a", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.2
})

gsap.from("h1 .b", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.2
})

