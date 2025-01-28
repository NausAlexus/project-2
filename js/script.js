let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-150px';
    } else {
        header.style.top = '0';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


    function openPopup() {
        document.getElementById('popup-form').style.display = 'flex';
    }

    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup-form').style.display = 'none';
    });

    const promotionCards = document.querySelectorAll('.promotion-card');
    promotionCards.forEach(card => {
        card.addEventListener('click', openPopup);
    });