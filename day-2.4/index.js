const timeline = gsap.timeline();

// Navbar
timeline.from("#logo, #nav-links, #signin-btn", {
    y: 80,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
})


// Hero section-left part
timeline.from("#right-part", {
    scale: 2,
    duration: 0.8,
    opacity: 0,
})

// Hero section-right part
timeline.from("#left-part h2", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.5,
})

gsap.from("#card-section #card", {
    opacity: 0,
    duration: 1,
    scale: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#card-section #card",
        scroller: "body",
    }
})





