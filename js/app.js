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
