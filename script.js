const button = document.querySelector('button')
const colors = document.querySelectorAll('.colors')
const onHoverText = document.querySelector('.onHoverText')
const visibleText = document.querySelector('.visibleText')

//timelines
const colorsTimeline = gsap.timeline({ paused: true })
const textTimeline = gsap.timeline({ paused: true })
const visibleTextTimeline = gsap.timeline({ paused: true })

gsap.set(colors, { top: "100%" })

colorsTimeline.to(colors, {
    top: "-50%",
    stagger: 0.15,
    duration: 0.5,
    ease: 'black.out(1.7)'
})
textTimeline.to(onHoverText, {
    y: "-50%",
    opacity: 1,
    duration: 0.5,
    ease: 'black.out(1.7)'
})
visibleTextTimeline.to(visibleText, {
    y: "-5%",
    opacity: 0,
    duration: 0.2,
    ease: 'black.out(1.7)'
})



button.addEventListener("mouseenter", () => {
    colorsTimeline.play()
    textTimeline.play()
    visibleTextTimeline.play()
    button.classList.add('isHovered')

})
button.addEventListener("mouseleave", () => {
    colors.forEach(color => {
        color.classList.add("hidden")
    });

    onHoverText.classList.add('hidden')

    colorsTimeline.reverse().seek(colorsTimeline.duration).then(() => {
        colors.forEach(color => {
            color.classList.remove("hidden")
        });
    })
    textTimeline.reverse().seek(textTimeline.duration).then(() => {
        onHoverText.classList.remove('hidden')
    })

    visibleTextTimeline.reverse().seek(visibleTextTimeline.duration)

    button.classList.remove("isHovered")

})