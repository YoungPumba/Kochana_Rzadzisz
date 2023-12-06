const navbarMobile = document.querySelector('.navbar-mobile')
const navbarMobileBtn = document.querySelector('.burger-btn')
const allNavLinks = document.querySelectorAll('.navbar-mobile__link')

const handleNav = () => {
    navbarMobile.classList.toggle('navbar-mobile--active')

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMobile.classList.remove('navbar-mobile--active')
        })
    })
}

navbarMobileBtn.addEventListener('click', handleNav)