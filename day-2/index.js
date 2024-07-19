const string = document.getElementById("string");

const initialPath = "M 0 150 Q 500 150 1000 150";

string.addEventListener("mousemove", function (e) {
    const newPath = `M 0 150 Q ${e.x} ${e.y} 1000 150`
    gsap.to("svg path", {
        attr: {
            d: newPath
        },
        duration: 0.5,
        ease: "power3.out"
    });
});


string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: {
            d: initialPath
        },
        duration: 1,
        ease: "elastic.out(1,0.1)"
    });
});



