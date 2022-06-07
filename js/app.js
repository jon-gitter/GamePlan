'use strict';

// smooth scroll button
const btnScrollTo = document.querySelector('#btn-scroll-to');
const section2 = document.querySelector('#section-2');

btnScrollTo.addEventListener('click', function (e) {
  const s2coords = section2.getBoundingClientRect();

  section2.scrollIntoView({
    behavior: 'smooth',
  });
});

///////////// tabbed component /////////////////

const tabs = document.querySelectorAll('.tab-btn');
const tabsContainer = document.querySelector('.tabbed-content-buttons');
const tabsContent = document.querySelectorAll('.tabbed-content');

// adding event handlers, using event delegation. We need to attach the event handler on the common parent element of all the elements that we're interested in (for this instance its tabsContainer variable)

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.tab-btn');

  // need to ignore any clicks that are outside the buttons but inside the div container they're in
  if (!clicked) return; // guard clause

  // remove active classes for button and content
  tabs.forEach((t) => t.classList.remove('btn-active'));
  tabsContent.forEach((c) => c.classList.remove('content-active')); // removes previous tab content after clicking new button

  // activate tab
  clicked.classList.add('btn-active');

  // activating the content area
  document
    .querySelector(`.content-${clicked.dataset.tab}`)
    .classList.add('content-active');
});

///////////// modal window /////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const btnCloseModal = document.querySelector('.close-modal');

//// opening modal on a timer ///

// setTimeout(() => modal.classList.remove('hidden'), 3000);
// setTimeout(() => overlay.classList.remove('hidden'), 3000);

// const modalTimer = function (e) {
//   setTimeout(() => e.classList.remove('hidden'), 1000);
// };

// modalTimer(modal);
// modalTimer(overlay);

const openModal = setTimeout(function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  body.classList.add('stopscrolling');
}, 1000);

//// closing modal by clicking on button OR outside of modal ////

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('stopscrolling');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//// closing modal with esc key ////
document.addEventListener('keydown', function (e) {
  // only want to close the modal when it's visible
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////// top nav bar fades and highlights option that mouse hovers over ///////////
const nav = document.querySelector('nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav_link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav_link');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.1));
nav.addEventListener('mouseout', handleHover.bind(1));

/////////// sticky nav bar that uses intersection observer API  ///////////
const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height; // nav is declared on line 97

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

/////////// slider for different testimonials  ///////////
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;
  const maxSlide = slides.length;

  // functions
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
};
slider();
