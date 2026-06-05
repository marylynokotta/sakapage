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

// SCROLL REVEAL
const revealElements = document.querySelectorAll('.stats, .about, .gallery, .stat-card, .bio-card, .gallery-grid img');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// GALLERY LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.add('open');
    document.body.classList.add('modal-open');
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('open');
  document.body.classList.remove('modal-open');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});

// QUOTES ROTATOR
const quoteCards = document.querySelectorAll('.quote-card');
const dots = document.querySelectorAll('.dot');
let currentQuote = 0;

function showQuote(index) {
  quoteCards.forEach(card => card.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  quoteCards[index].classList.add('active');
  dots[index].classList.add('active');
  currentQuote = index;
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showQuote(+dot.getAttribute('data-index'));
  });
});

// Auto-rotate every 4 seconds
setInterval(() => {
  const next = (currentQuote + 1) % quoteCards.length;
  showQuote(next);
}, 4000);

