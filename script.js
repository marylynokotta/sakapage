// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// HIGHLIGHTS MODAL
const highlightsModal = document.getElementById('highlightsModal');
const modalClose = document.getElementById('modalClose');

document.getElementById('highlightsBtn').addEventListener('click', () => {
  highlightsModal.classList.add('open');
  document.body.classList.add('modal-open');
});

modalClose.addEventListener('click', () => {
  highlightsModal.classList.remove('open');
  document.body.classList.remove('modal-open');
});

highlightsModal.addEventListener('click', (e) => {
  if (e.target === highlightsModal) {
    highlightsModal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});

// READ MORE MODAL
const readMoreModal = document.getElementById('readMoreModal');
const readMoreClose = document.getElementById('readMoreClose');

document.getElementById('readMoreBtn').addEventListener('click', () => {
  readMoreModal.classList.add('open');
  document.body.classList.add('modal-open');
});

readMoreClose.addEventListener('click', () => {
  readMoreModal.classList.remove('open');
  document.body.classList.remove('modal-open');
});

readMoreModal.addEventListener('click', (e) => {
  if (e.target === readMoreModal) {
    readMoreModal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});

// VIEW STATS BUTTON
document.querySelector('.secondary-btn').addEventListener('click', () => {
  document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
});
