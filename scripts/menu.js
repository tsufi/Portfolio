let lastScrollTop = 0; // Viimeisin rullauksen sijainti

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Jos rullataan ylös (scroll > lastScrollTop), näyttää palkin
    if (currentScroll < lastScrollTop) {
        navbar.style.top = '0'; // Näyttää palkin
    } else {
        // Jos rullataan alas, piilottaa palkin
        navbar.style.top = '-50px'; // Piilottaa palkin
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Estetään negatiiviset arvot
});
