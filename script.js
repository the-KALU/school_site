// NAV SECTION
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('window-scroll', window.scrollY > 100)
})

// FAQ SECTION
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {

    faq.addEventListener('click', () => {
        faq.classList.toggle('open');


        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'fa fa-plus') {
            icon.className = 'fa fa-minus'
        } else {
            icon.className = 'fa fa-plus'
        }

    })
})

//SHOW / HIDE NAV MENU

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none'
})




// FAQ TOGGLE ON MD

const toggleFAQ = document.querySelectorAll('.faq.hide-on-md');
const seeMore = document.querySelector('#turn-on');
const seeLess = document.querySelector('#turn-off');

seeMore.addEventListener('click', () => {

    seeMore.style.display = 'none';
    seeLess.style.display = 'grid';
    toggleFAQ.forEach(faq => {
        faq.style.display = 'flex'
    })


})

seeLess.addEventListener('click', () => {

    seeLess.style.display = 'none';
    seeMore.style.display = 'grid';
    toggleFAQ.forEach(faq => {
        faq.style.display = 'none'
    })

})








// SWIPER


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //when window width >= 600px 
    breakpoints: {
        600: {
            slidesPerView: 2
        }

    }
});