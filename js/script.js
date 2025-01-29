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

        if (window.innerWidth < 427) {
            document.body.classList.add('no-scroll');
        }
    }

    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup-form').style.display = 'none';

        document.body.classList.remove('no-scroll');
    });

    const promotionCards = document.querySelectorAll('.promotion-card');
    promotionCards.forEach(card => {
        card.addEventListener('click', openPopup);
    });


    let index = 0;
    function showReview() {
        const slider = document.getElementById('slider');
        slider.style.transform = `translateX(${-index * 100}%)`;
    }
    function nextReview() {
        index = (index + 1) % 4;
        showReview();
    }
    function prevReview() {
        index = (index - 1 + 4) % 4;
        showReview();
    }