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


if (window.matchMedia('(max-width: 991px)').matches) {
    document.querySelectorAll('.img-hidden').forEach(image => {
        let clickCount = 0;

        image.addEventListener('click', function () {
            clickCount++;

            if (clickCount === 2) {
                // Przy drugim kliknięciu przekieruj na stronę
                const link = this.getAttribute('data-link');
                window.location.href = link;
            }
        });
    });
} else {
    document.querySelectorAll('.img-hidden').forEach(image => {
        let clickCount = 0;

        image.addEventListener('click', function () {
            clickCount++;

            if (clickCount === 1) {
                // Przy drugim kliknięciu przekieruj na stronę
                const link = this.getAttribute('data-link');
                window.location.href = link;
            }
        });
    });
}