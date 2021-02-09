AOS.init();

const page = document.querySelectorAll(".page")

window.addEventListener("scroll", (e) => {
    if (window.scrollY < 0.7 * window.innerHeight) {
        page.forEach(el=>el.style.backgroundColor = "#316fb6")
        setTimeout(()=>{
            tlAbout.play()
        },1000)
    }
    if (window.scrollY > 0.7 * window.innerHeight) {
        page.forEach(el=>el.style.backgroundColor = "rgb(222, 182, 209)")
        setTimeout(()=>{
            tlP1.play()
        },1000)
    }
    if (window.scrollY > 0.7 * window.innerHeight * 2  ) {
        page.forEach(el=>el.style.backgroundColor = "#ADEFD1FF")
        setTimeout(()=>{ 
            tlP2.play()
        },1000)
    }
    if (window.scrollY > 0.7 * window.innerHeight * 3) {
        page.forEach(el=>el.style.backgroundColor = "rgb(222, 182, 209)")
        setTimeout(()=>{ 
            tlP3.play()
        },1000)

    }
    if (window.scrollY > 0.8 * window.innerHeight * 4.5 ) {
        page.forEach(el=>el.style.backgroundColor = "#316fb6")
    }
    if (window.scrollY > 0.8 * window.innerHeight * 5.5 ) {
        page.forEach(el=>el.style.backgroundColor = "#ADEFD1FF")
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
}, "-=1.5").fromTo(
    '.underline', 1.5, {
    backgroundColor:"none",
}, {
    backgroundColor:"white",
    ease: "power1"
})


let tlAbout = gsap.timeline({ paused: true });
tlAbout.fromTo('.highlight--about', 1.5, {
    backgroundColor: "transparent",
}, {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    ease: "power1"
})


//project 1

let tlP1 = gsap.timeline({ paused: true });
tlP1.fromTo('.highlight', 2, {
    backgroundColor: "transparent",
}, {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    ease: "power1"
})



//project2

let tlP2 = gsap.timeline({ paused: true });
tlP2.fromTo('.highlight2', 2, {
    backgroundColor: "transparent",
}, {
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    ease: "power1"
})



//project 3
let tlP3 = gsap.timeline({ paused: true });
tlP3.fromTo(".highlight3", 2, {
    backgroundColor: "rgba(250, 88, 185, 0)",
}, {
    backgroundColor: "rgba(250, 88, 185, 0.65)",
    ease: "power1"
})
