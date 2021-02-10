// AOS.init();

const page = document.querySelectorAll(".page")

let tl1 = gsap.timeline();
tl1.fromTo('.home--text', 1.5, {
    y: "-40%",
    opacity: "0"
}, {
    y: "0",
    opacity: "1",
    ease: "power1"
}).fromTo('.home--img', 1.5, {
    y: "-40%",
    opacity: "0"
}, {
    y: "0",
    opacity: "1",
    ease: "power1"
}, "-=1.5").fromTo('.home--down', 1.5, {
    y: "-40%",
    opacity: "0"
}, {
    y: "0",
    opacity: "1",
    ease: "power1"
}, "-=1.5").fromTo(
    '.underline', 1.5, {
    backgroundColor: "none",
}, {
    backgroundColor: "white",
    ease: "power1"
})


let tlAbout = gsap.timeline({ paused: true });
tlAbout.fromTo('.about--title', 1.5, {
    y:"-50%",
    opacity: "0"
}, {
    y: "0",
    opacity:"1",
    ease: "power1"
}).fromTo('.about--text', 1.5, {
    y:"-50%",
    opacity: "0"
}, {
    y: "0",
    opacity:"1",
    ease: "power1"
}, "-=1.5").fromTo('.about--img', 1.5, {
    y:"-50%",
    opacity: "0"
}, {
    y: "0",
    opacity:"1",
    ease: "power1"
}, "-=1.5").fromTo('.highlight--about', 1, {
    backgroundColor: "transparent",
}, {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    ease: "power1"
})


//project 1

let tlP1 = gsap.timeline({ paused: true });
tlP1.fromTo('.project1--el', 1.5, {
    y:"-50%",
    opacity: "0"
}, {
    y: "0",
    opacity:"1",
    ease: "power1"
}).fromTo('.highlight', 1, {
    backgroundColor: "transparent",
}, {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    ease: "power1"
})



//project2

let tlP2 = gsap.timeline({ paused: true });
tlP2.fromTo('.project2--el', 1.5, {
    y:"-50%",
    opacity: "0"
}, {
    y: "0",
    opacity:"1",
    ease: "power1"
}).fromTo('.highlight2', 1, {
    backgroundColor: "transparent",
}, {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    ease: "power1"
})



//project 3
let tlP3 = gsap.timeline({ paused: true });
tlP3.fromTo('.project3--el', 1.5, {
    y:"-50%",
    opacity: "0"
}, {
    y: "0",
    opacity:"1",
    ease: "power1"
}).fromTo(".highlight3", 1, {
    backgroundColor: "rgba(250, 88, 185, 0)",
}, {
    backgroundColor: "rgba(250, 88, 185, 0.65)",
    ease: "power1"
})

//project 4
let tlP4 = gsap.timeline({ paused: true });
tlP4.fromTo('.project4--el', 1.5, {
    y:"-50%",
    opacity: "0"
}, {
    y: "0",
    opacity:"1",
    ease: "power1"
})


window.addEventListener("scroll", (e) => {
    if (window.scrollY < 0.7 * window.innerHeight) {
        page.forEach(el => el.style.backgroundColor = "#316fb6")
      
    }
    if (window.scrollY > window.innerHeight) {
            tlAbout.play()
    }
    if (window.scrollY > 0.7 * window.innerHeight) {
        page.forEach(el => el.style.backgroundColor = "rgb(222, 182, 209)")
    }
    if (window.scrollY > 2 * window.innerHeight) {
        tlP1.play()
    }
    if (window.scrollY > 0.7 * window.innerHeight * 2) {
        page.forEach(el => el.style.backgroundColor = "#ADEFD1FF")
    }
    if (window.scrollY > 3 * window.innerHeight) {
        tlP2.play()
    }
    if (window.scrollY > 0.7 * window.innerHeight * 3.1) {
        page.forEach(el => el.style.backgroundColor = "rgb(222, 182, 209)")
    }
    if (window.scrollY > 4 * window.innerHeight) {
        tlP3.play()
    }
    if (window.scrollY > 0.85 * window.innerHeight * 4) {
        page.forEach(el => el.style.backgroundColor = "#316fb6")
    }
    if (window.scrollY > 5 * window.innerHeight) {
        tlP4.play()
    }
    if (window.scrollY > 0.85 * window.innerHeight * 5) {
        page.forEach(el => el.style.backgroundColor = "#ADEFD1FF")
    }
})


