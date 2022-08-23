import Swiper, {Pagination} from "swiper";

const awardsSlider = document.querySelector(".awards__slider");

if(awardsSlider) {
  const awardsSwiper = new Swiper(".awards__slider", {
    modules: [Pagination],
    //slidesPerView: 1,
    wrapperClass: 'awards__info',
    slideClass: 'awards__info-item',
    slideActiveClass: 'awards__info__active',
    pagination: {
      el: '.pagination',
      clickable: true,
      bulletActiveClass: 'bullet-active',
      bulletClass: 'bullet',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 28
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  })
}
