document.addEventListener('DOMContentLoaded', function () {

    const menuButton = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuButton && navLinks) {

        menuButton.addEventListener('click', function () {

            navLinks.classList.toggle('open');

        });

    }

    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
