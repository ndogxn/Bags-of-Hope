/* =============================================================
   BAGS OF HOPE — script.js
   This file handles all the interactive behavior on the site.
   Each section is labeled so you know what it controls.
============================================================= */


/* ── 1. NAVBAR: Adds a shadow when you scroll down ───────────
   No changes needed here unless you rename the nav's id.
──────────────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ── 2. MOBILE MENU: Opens/closes nav on small screens ───────
   No changes needed here unless you rename the hamburger id.
──────────────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (on mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


/* ── 3. SCROLL REVEAL: Fades elements in as you scroll down ──
   Any element with class="reveal" in the HTML will animate in.
   No changes needed here.
──────────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger the animations slightly so they don't all pop in at once
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ── 4. ANIMATED STAT COUNTERS ───────────────────────────────
   The numbers in the Impact section count up when they
   scroll into view.

   TO UPDATE A STAT:
   Go to index.html, find the <span class="stat-number">
   for that stat, and change data-target="0" to the real number.
   e.g. data-target="42" for 42 bags delivered.

   You don't need to touch this JavaScript code to update numbers.
──────────────────────────────────────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1800; // milliseconds for the count-up animation
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out curve so it slows down at the end
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));


/* ── 5. CONTACT FORM: Shows a success message on submit ──────
   Right now this just shows a confirmation message on screen.
   It does NOT send a real email.

   TO MAKE IT SEND REAL EMAILS (free, no coding required):
   1. Go to https://formspree.io — create a free account
   2. Create a new form and copy the URL they give you
   3. In index.html, find the <form id="contact-form"> tag
   4. Add  action="https://formspree.io/f/XXXXXXXX"  method="POST"
   5. Change the event listener below to let the form submit normally
      (remove e.preventDefault() once you've set up Formspree)
──────────────────────────────────────────────────────────── */
const contactForm    = document.getElementById('contact-form');
const formSuccess    = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Remove this line once Formspree is connected
    formSuccess.style.display = 'block';
    contactForm.reset();

    // Hide the success message after 5 seconds
    setTimeout(() => {
      formSuccess.style.display = 'none';
    }, 5000);
  });
}


/* ── 6. FOOTER YEAR: Auto-updates the copyright year ─────────
   This makes sure the year in the footer is always current.
   No changes needed.
──────────────────────────────────────────────────────────── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ── 7. SMOOTH ACTIVE NAV HIGHLIGHT ─────────────────────────
   Highlights the correct nav link as you scroll through sections.
   No changes needed here.
──────────────────────────────────────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}`
            ? 'var(--primary)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
