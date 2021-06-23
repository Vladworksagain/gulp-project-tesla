$('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.header-bottom__info',
    autoplay: 3000
});

// burger-menu //

    const burgerBtnOpen = document.querySelector('.header-burger');

    const burgerBtnClose = document.querySelector('.burger-btn__close');

    const burgerMenu = document.querySelector('.header-burger__menu');

    burgerBtnOpen.addEventListener('click', () => {
        burgerMenu.classList.add('__active');

        burgerBtnClose.addEventListener('click', () => {
            burgerMenu.classList.remove('__active')
        })
    })

// burger-menu //