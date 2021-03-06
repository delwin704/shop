(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
  });
})();



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
    breakpoints: {
        // 1920 1600 1366 1024 768 480 360
        // when window width is >= 320px
        
        360: {
            slidesPerView: 1,
            spaceBetween: -60,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: -160,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: -160,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -120,
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: -100,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: -80,
          },

          
      }
});


const mySwiper = new Swiper('.swiper2', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: -45,
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