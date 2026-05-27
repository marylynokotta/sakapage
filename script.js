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

// WATCH HIGHLIGHTS BUTTON
const modal = document.getElementById('highlightsModal');
const modalClose = document.getElementById('modalClose');

document.querySelector('.primary-btn').addEventListener('click', () => {
  modal.classList.add('open');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
});

// close when clicking outside the modal box
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});

// VIEW STATS BUTTON
document.querySelector('.secondary-btn').addEventListener('click', () => {
  document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
});