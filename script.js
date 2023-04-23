var c1 = document.querySelector('.c1')
var c2 = document.querySelector('.c2')
var c3 = document.querySelector('.c3')
var c4 = document.querySelector('.c4')
var hero = document.querySelector('.hero')

hero.addEventListener('mouseenter', move())
function move() {
    width = hero.getBoundingClientRect().width
    height = hero.getBoundingClientRect().height

    document.querySelector('.hero').addEventListener('mousemove', function (e) {

        c1.style.transform = `translate(${(e.x - (width / 2)) / (width / 100)}%,${-((e.y - 300) - (35 / 2)) / (2.84) / 2.5}%)`
        c2.style.transform = `translate(${(e.x - (width / 2)) / (width / 100)}%,${((e.y - 320) - (35 / 2)) / (2.84) / 2.5}%)`
        c3.style.transform = `translate(${-(e.x - (width / 2)) / (width / 100)}%,${((e.y - 320) - (35 / 2)) / (2.84) / 2.5}%)`
        c4.style.transform = `translate(${-(e.x - (width / 2)) / (width / 100)}%,${-((e.y - 320) - (35 / 2)) / (2.84) / 2.5}%)`

    })

}
function mouseleave() {
    hero.addEventListener('mouseleave', () => {
        c1.style.transform = `translate(0%,0%)`
        c2.style.transform = `translate(0%,0%)`
        c3.style.transform = `translate(0%,0%)`
        c4.style.transform = `translate(0%,0%)`
    })

}
function randomTextAnimation() {
    const b = baffle('#randomtext', {
        characters: '@<>aniket*-',
        speed: 100
    })

    b.start();
    setInterval(() => {
        b.reveal()
    }, 4000);

}

mouseleave()
randomTextAnimation();

// Do something else.
setInterval(() => {
    document.querySelectorAll('.circle').forEach(e => {
        e.style.display = 'flex'
    })
}, 4000);


function circle2_animation() {
    document.querySelector('.ani2 .right').addEventListener('mousemove', (e) => {
        height = document.querySelector('.ani2 .right').getBoundingClientRect().height
        width = document.querySelector('.ani2 .right').getBoundingClientRect().width

        document.querySelector('.cir1').style.transform = `translate(${-(e.x - width / 2) / (width / 100)}%,${(e.y - 300) / (2.84) / 2.5}%)`
        document.querySelector('.cir2').style.transform = `translate(${(e.x - width / 2) / (width / 100)}%,${-(e.y - 300) / (2.84) / 2.5}%)`
        document.querySelector('.cir3').style.transform = `translate(${(e.x - width / 2) / (width / 100)}%,${-(e.y - 300) / (2.84) / 2.5}%)`
        document.querySelector('.cir4').style.transform = `translate(${(e.x - width / 2) / (width / 100)}%,${-(e.y - 300) / (2.84) / 2.5}%)`

    })

    document.querySelector('.ani2 .right').addEventListener('mouseleave', (e) => {

        document.querySelector('.cir1').style.transform = `translate(${0}%,${0}%)`
        document.querySelector('.cir2').style.transform = `translate(${0}%,${0}%)`
        document.querySelector('.cir3').style.transform = `translate(${0}%,${0}%)`
        document.querySelector('.cir4').style.transform = `translate(${0}%,${0}%)`

    })


}
circle2_animation()

function gsap1() {

    /* gsap.to('.p1', {
        scrollTrigger: {
            trigger: ".hero",
            start: "0%",
            scrub: true,
            markers: true,
        },
        position: "fixed",
        markers: true,
    })
    
     */
    /* 
    gsap.to('.section-5 div h1', {
        scrollTrigger: {
            trigger: ".section-5 div h1",
            start: "-10%",
            scrub: 0.5,
            pin: true,
            markers: true,
            snap: true
        },
        x: -5000,
        markers: true,
    })
    
    
    gsap.to('.section-5 div p', {
        scrollTrigger: {
            trigger: ".section-5 div h1",
            start: "-10%",
            scrub: .5,
            markers: true,
            snap: true,
            pin: true,
    
        },
        y: "-100%",
        markers: true,
    })
    
    
    
    
    gsap.to('.h1', {
        scrollTrigger: {
            trigger: ".h1 ",
            start: "0%",
            scrub: .5,
            pin: true,
            markers: true,
        },
        position: 'fixed'
    })
    
    
    gsap.to('.work2', {
        scrollTrigger: {
            trigger: ".work2",
            start: "0%",
            scrub: .5,
            stagger: 60,
        },
        height: "20%",
    })
    
    gsap.to('.work2 div', {
        scrollTrigger: {
            trigger: ".work2 div",
            start: "0%",
            scrub: .5,
            stagger: 60,
        },
        height: 0,
    })
     */
}

function cursorImg() {

    window.addEventListener('mousemove', (e) => {
        document.querySelector('.courser').style.top = `${(e.y)}px`
        document.querySelector('.courser').style.left = `${(e.x)}px`

    })
}
cursorImg()


gsap.to(".p1  nav h2,.p1  nav a, .p1 nav span , .p1 box", {
    opacity: 1,
    delay: 3,

})

gsap.to(".p1  nav", {
    scrollTrigger: {
        trigger: ".p1 nav",
        scroller: "body",
        start: "600",
        pin: true,
        scrub: .5,
    },
    position: "fixed",
    backgroundColor: "#f1efed"
})




gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".hero",
        scroller: "body",
        start: "100%",
        scrub: .5,
    },

})


gsap.to(".bootom", {
    scrollTrigger: {
        trigger: ".hero",
        scroller: "body",
        start: "100%",
        scrub: .5,
    },
    position: "fixed"
})

gsap.to('.work', {
    scrollTrigger: {
        trigger: ".work",
        scroller: "body",
        start: "",
        scrub: .5,
        markers: true,
    },
}) 

/* gsap.to(".work2", {
    scrollTrigger: {
        trigger: ".work2",
        scroller: "body",
        start: "",
        scrub: true,
        markers: true,
        stagger:10
    },
    height: "80vh",
})
 */
/* gsap.to(".w2", {
    scrollTrigger: {
        trigger: ".w2",
        scroller: "",
        start: "",
        scrub: true,
        markers: true,
    },
    height: "80vh",
    duration:2
})
 */