const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(e) {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')

});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
})


const html = document.querySelector('html')
window.addEventListener('click', function(e) {
    if(e.target.id === "dark-toggle") {
        if(html.classList.contains('dark')) {
            html.classList.remove('dark')
            localStorage.theme = 'light'
        } else {
            html.classList.add('dark')
            localStorage.theme = 'dark'
        }
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark')
    localStorage.theme = 'dark'
} else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
}