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
const btnCloseModal = document.querySelector('.close-modal');

setTimeout(() => modal.classList.remove('hidden'), 1000);

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
});
