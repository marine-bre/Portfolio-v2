
const menuItem = document.querySelectorAll(".menu--item");

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const keyboard = document.querySelector(".home--img");
const contact = document.querySelector(".contact");
const project1 = document.querySelector("#project1");
const overlay = document.querySelector(".overlay")


AOS.init();

//progress bar
// const p = document.querySelectorAll(".progress--bubble")
// console.log(p)

const page = document.querySelectorAll(".page")

window.addEventListener("scroll", (e) => {
    if (window.scrollY < 0.7 * window.innerHeight) {
        // p.forEach(el=>el.classList.remove("progress--active"))
        // p[0].classList.add("progress--active")
        page.forEach(el=>el.style.backgroundColor = "#316fb6")
    }
    if (window.scrollY > 0.7 * window.innerHeight) {
        // tlAbout.play()
        // p.forEach(el=>el.classList.remove("progress--active"))
        // p[1].classList.add("progress--active")
        page.forEach(el=>el.style.backgroundColor = "rgb(222, 182, 209)")
    }
    if (window.scrollY > 0.8 * window.innerHeight * 2  ) {
        // tlP1.play()
        // p.forEach(el=>el.classList.remove("progress--active"))
        // p[2].classList.add("progress--active")
        page.forEach(el=>el.style.backgroundColor = "#ADEFD1FF")
    }
    if (window.scrollY > 0.8 * window.innerHeight * 3) {
        // tlP2.play()
        // p.forEach(el=>el.classList.remove("progress--active"))
        // p[3].classList.add("progress--active")
        page.forEach(el=>el.style.backgroundColor = "rgb(222, 182, 209)")

    }
    if (window.scrollY > 0.8 * window.innerHeight * 4.5 ) {
        // tlP3.play()
        // p.forEach(el=>el.classList.remove("progress--active"))
        // p[4].classList.add("progress--active")
        page.forEach(el=>el.style.backgroundColor = "#316fb6")

    }
    if (window.scrollY > 0.8 * window.innerHeight * 5.5 ) {
        // tlP4.play()
        page.forEach(el=>el.style.backgroundColor = "#ADEFD1FF")

        // p.forEach(el=>el.classList.remove("progress--active"))
        // p[5].classList.add("progress--active")
    }
    if (window.scrollY > 0.8 * window.innerHeight * 7 ) {
        // page.forEach(el=>el.style.backgroundColor = "rgb(222, 182, 209)")

        // p.forEach(el=>el.classList.remove("progress--active"))
        // p[6].classList.add("progress--active")
    }
})


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
}, "-=1.5")
    .fromTo(CSSRulePlugin.getRule('.underline:before'), 1.5, {
        cssRule: {
            width: "0vw",
            opacity: "0"
        }
    }, {
        cssRule: {
            width: "17vw",
            opacity: "1",
            ease: "power2"
        }
    })

// let tlAbout = gsap.timeline({ paused: true });
// tlAbout.fromTo("[class*='about--']", 1, {
//     y: "-40%",
//     opacity: "0"
// }, {
//     y: "0",
//     opacity: "1",
//     ease: "power1"
// }).fromTo('.highlight--about', 1.5, {
//     backgroundColor: "transparent",
// }, {
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     ease: "power1"
// }, "-=0.5")


//project 1

// let tlP1 = gsap.timeline({ paused: true });
// tlP1.fromTo(".project1--el", 1.5, {
//     y: "-40%",
//     opacity: "0"
// }, {
//     y: "0",
//     opacity: "1",
//     ease: "power1"
// }).fromTo('.highlight', 1.5, {
//     backgroundColor: "transparent",
// }, {
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     ease: "power1"
// }, "-=0.5")



//project2

// let tlP2 = gsap.timeline({ paused: true });
// tlP2.fromTo(".project2--el", 1.5, {
//     y: "-40%",
//     opacity: "0"
// }, {
//     y: "0",
//     opacity: "1",
//     ease: "power1"
// }).fromTo('.highlight2', 1.5, {
//     backgroundColor: "transparent",
// }, {
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     ease: "power1"
// }, "-=0.5")



//project 3
// let tlP3 = gsap.timeline({ paused: true });
// tlP3.fromTo(".project3--el", 1.5, {
//     y: "-40%",
//     opacity: "0"
// }, {
//     y: "0",
//     opacity: "1",
//     ease: "power1"
// })

// //project 4

// let tlP4 = gsap.timeline({ paused: true });
// tlP4.fromTo(".project4--el", 1.5, {
//     y: "-40%",
//     opacity: "0"
// }, {
//     y: "0",
//     opacity: "1",
//     ease: "power1"
// })
