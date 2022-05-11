// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const FixedNav = header.offsetTop

    if(window.pageYOffset > FixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}
// Burger area
const burger = document.querySelector('#burger')
const NavMenu = document.querySelector('#nav-menu')

burger.addEventListener('click', function() {
    burger.classList.toggle('burger-active')
    NavMenu.classList.toggle('hidden')
})