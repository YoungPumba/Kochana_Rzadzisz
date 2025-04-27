const navbarMobile = document.querySelector('.navbar-mobile')
const navbarMobileBtn = document.querySelector('.burger-btn')
const allNavLinks = document.querySelectorAll('.navbar-mobile__link')
const toggleButton = document.querySelector(".but");
const menu = document.querySelector(".navbar-mobile__links-mini");
const toggleButtonDesktop = document.querySelector(".but-desktop");
const menuDesktop = document.querySelector(".navbar-desktop__links-mini")

const handleNav = () => {
    navbarMobile.classList.toggle('navbar-mobile--active')

    // allNavLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         navbarMobile.classList.remove('navbar-mobile--active')
    //     })
    // })
}

navbarMobileBtn.addEventListener('click', handleNav)

toggleButton.addEventListener("click", function () {
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null; // Zwija menu
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px"; // Rozwija menu do naturalnej wysokości
    }
});

toggleButtonDesktop.addEventListener("click", function () {
    menuDesktop.classList.toggle("show");
});

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

function openPDF(linkDoPDF) {
    window.open(linkDoPDF, '_blank');
  }