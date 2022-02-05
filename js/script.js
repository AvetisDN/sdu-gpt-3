const menuBtn = document.querySelector('.burger')
const mobileNav = document.querySelector('.mobile-nav')
const mobileShadow = document.querySelector('.mobile-shadow')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('open')
    mobileNav.classList.add('open')
    mobileShadow.classList.add('open')
})
mobileShadow.addEventListener('click', () => {
    menuBtn.classList.remove('open')
    mobileNav.classList.remove('open')
    mobileShadow.classList.remove('open')
})


const headerNav = document.querySelector('.header-nav')

window.addEventListener('scroll', (e) => {
    if(window.scrollY > 50) {
        headerNav.classList.add('compact')
    } else {
        headerNav.classList.remove('compact')
    }
})