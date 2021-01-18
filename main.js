// import colors from './colors.scss';

const menuItem = document.querySelectorAll(".menu--item");

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const keyboard = document.querySelector(".home--img");

const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const project3 = document.querySelector(".project3");
const project4 = document.querySelector(".project4");

let navColor;


window.addEventListener("scroll", (e) => {
about.style.transform = `translateY(-${0.40*window.scrollY}px)`;
// keyboard.style.transform = `translateY(-${0.4*window.scrollY}px)`;
project1.style.transform = `translateY(-${0.4*window.scrollY}px)`
project2.style.transform = `translateY(-${0.5*window.scrollY}px)`
project3.style.transform = `translateY(-${0.5*window.scrollY}px)`
project4.style.transform = `translateY(-${0.4*window.scrollY}px)`

    if (window.scrollY > window.innerHeight) {
        tlAbout.play()
        // project1.style.transform = `translateY(-${0.40*window.scrollY}px)`
    }
    if (window.scrollY > window.innerHeight * 2 - (0.4 * window.scrollY)) {
        tlP1.play()
    }
    if (window.scrollY > window.innerHeight * 3 - (0.4 * window.scrollY) ) {
        tlP2.play()
    }
    if (window.scrollY > window.innerHeight * 4  - (0.4 * window.scrollY)) {
        tlP3.play()
    }
    if (window.scrollY > window.innerHeight * 5  - (0.4 * window.scrollY)) {
        tlP4.play()
    }
})


let tl1 = gsap.timeline();
tl1.fromTo('.home--text', 1.5, {
    y:"-40%",
    opacity:"0"
},{
    y:"0",
    opacity:"1",
    ease:"power1"
}).fromTo('.home--img', 1.5, {
    y:"-40%",
    opacity:"0"
},{
    y:"0",
    opacity:"1",
    ease:"power1"
}, "-=1.5").fromTo('.home--down', 1.5, {
    y:"-40%",
    opacity:"0"
},{
    y:"0",
    opacity:"1",
    ease:"power1"
}, "-=1.5")
.fromTo(CSSRulePlugin.getRule('.underline:before'), 1.5, {cssRule:{
    width:"0vw",
    opacity:"0"
}},{cssRule:{
    width:"17vw",
    opacity:"1",
    ease:"power2"
}})

let tlAbout = gsap.timeline({paused:true});
tlAbout.fromTo("[class*='about--']", 1, {
    y:"-40%",
    opacity:"0"
},{
    y:"0",
    opacity:"1",
    ease:"power1"
})

let tlP1 = gsap.timeline({paused:true});
tlP1.fromTo(".project1--el", 1.5, {
    y:"-40%",
    opacity:"0"
},{
    y:"0",
    opacity:"1",
    ease:"power1"
})

let tlP2 = gsap.timeline({paused:true});
tlP2.fromTo(".project2--el", 1.5, {
    y:"-40%",
    opacity:"0"
},{
    y:"0",
    opacity:"1",
    ease:"power1"
})

let tlP3 = gsap.timeline({paused:true});
tlP3.fromTo(".project3--el", 1.5, {
    y:"-40%",
    opacity:"0"
},{
    y:"0",
    opacity:"1",
    ease:"power1"
})

let tlP4 = gsap.timeline({paused:true});
tlP4.fromTo(".project4--el", 1.5, {
    y:"-40%",
    opacity:"0"
},{
    y:"0",
    opacity:"1",
    ease:"power1"
})


links = document.querySelectorAll(".menu--a");
for (let i = 0; i< links.length; i++){
    links[i].addEventListener("mouseover", () => {
        links[i].style.transform = "scale(2)"
    })
    links[i].addEventListener("mouseleave", () => {
        links[i].style.transform = "scale(1)"
    })
}

