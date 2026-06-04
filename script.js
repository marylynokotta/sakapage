// COUNTER ANIMATION
// =======================
const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
  counter.innerText = '0';
  const target = +counter.getAttribute('data-target');
  const increment = target / 200;

  const updateCounter = () => {
    const current = +counter.innerText;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
};

// Trigger counters when stats section is visible
const statsSection = document.getElementById('stats');
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    counters.forEach((counter, i) => {
      setTimeout(() => runCounter(counter), i * 250); // stagger counters
    });
    statsObserver.unobserve(statsSection);
  }
}, { threshold: 0.3 });

statsObserver.observe(statsSection);


// =======================
// HIGHLIGHTS MODAL
// =======================
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

// =======================
// READ MORE MODAL
// =======================
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

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    highlightsModal.classList.remove('open');
    readMoreModal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});

// =======================
// VIEW STATS BUTTON
// =======================
document.querySelector('.secondary-btn').addEventListener('click', () => {
  document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
});

// =======================
// SCROLL REVEAL (staggered)
// =======================
const revealElements = document.querySelectorAll('.about, .gallery, .stat-card, .bio-card, .gallery-grid img');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // If multiple children (like stat cards or gallery images), stagger them
      const children = entry.target.querySelectorAll('.stat-card, .gallery-grid img');
      if (children.length > 0) {
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('reveal'), i * 200);
        });
      } else {
        entry.target.classList.add('reveal');
      }
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));