/* =============================================================
   BAGS OF HOPE — script.js
   This file handles all the interactive behavior on the site.
   Each section is clearly labeled so you know what it controls.
============================================================= */


/* ── 1. NAVBAR: Adds frosted background when you scroll down ──
   No changes needed unless you rename the nav's id in HTML.
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
   No changes needed unless you rename the hamburger id.
──────────────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close the menu when any nav link is tapped on mobile
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


/* ── 3. SCROLL REVEAL: Fades in elements as you scroll ───────
   Any HTML element with class="reveal" will animate in.
   No changes needed here.
──────────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Small stagger so elements don't all appear at once
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ── 4. ANIMATED STAT COUNTERS ───────────────────────────────
   Numbers in the Impact section count up when scrolled into view.
   They read from the data-target attribute set in the HTML.

   TO UPDATE A NUMBER:
   Go to index.html, find the <span class="stat-number"> for that
   stat, and change data-target="0" to your real number.
   e.g. data-target="42"  — you don't need to touch this JS.
──────────────────────────────────────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1800; // total animation time in milliseconds
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out: starts fast, decelerates to a stop
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
   Right now this only shows an on-screen confirmation.
   It does NOT send a real email yet.

   TO MAKE IT SEND REAL EMAILS (free, no coding required):
   1. Go to https://formspree.io — create a free account
   2. Create a new form and copy the URL it gives you
   3. In index.html, find <form id="contact-form"> and add:
         action="https://formspree.io/f/XXXXXXXX"  method="POST"
   4. Delete the line below that says  e.preventDefault()
      so the form submits normally to Formspree instead
──────────────────────────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // ← DELETE this line once Formspree is connected
    formSuccess.style.display = 'block';
    contactForm.reset();

    // Hide the success message after 5 seconds
    setTimeout(() => {
      formSuccess.style.display = 'none';
    }, 5000);
  });
}


/* ── 6. FOOTER YEAR: Keeps the copyright year up to date ─────
   No changes needed — this auto-updates every year.
──────────────────────────────────────────────────────────── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ── 7. ACTIVE NAV HIGHLIGHT: Highlights current section ─────
   As you scroll, the matching nav link gets the accent color.
   No changes needed here.
──────────────────────────────────────────────────────────── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          const isActive = a.getAttribute('href') === `#${id}`;
          a.style.color = isActive ? 'var(--accent)' : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
