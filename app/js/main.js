const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: -60,
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChieldren: true,
    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});



const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: -60,
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChieldren: true,
    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

const mySwiper = new Swiper('.swiper2', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChieldren: true,
    // Navigation arrows
    navigation: {
        nextEl: '.button-next1',
        prevEl: '.button-prev1',
    },
});

document.querySelectorAll('.great__tab-btn').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.great__tab-btn').forEach((child) => child.classList.remove('btn-active')
        );
        document.querySelectorAll('.great__tab-item').forEach((child) => child.classList.remove('item-active')
        );

        item.classList.add('btn-active');
        document.getElementById(id).classList.add('item-active');
    })
);

document.querySelector('.great__tab-btn').click();