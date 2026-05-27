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
document.querySelector('.primary-btn').addEventListener('click', () => {
  alert('🎥 Highlights Coming Soon!');
});

// VIEW STATS BUTTON
document.querySelector('.secondary-btn').addEventListener('click', () => {
  document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
});
