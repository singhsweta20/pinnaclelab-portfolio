document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize AOS Animations
  AOS.init({
    duration: 800,
    once: true,
  });

  // 2. Interactive Typed Title in Hero
  if (document.getElementById("typed-headline")) {
    new Typed("#typed-headline", {
      strings: [
        "Interactive Web Apps",
        "Modern Frontend Interfaces",
        "Clean JavaScript Projects",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
  }

  // 3. Project Filter Tabs Logic
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 4. Certificate Lightbox Modal Logic
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("modalCaption");
  const closeModalBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const imgSrc = btn.getAttribute("data-img");
      const title = btn.getAttribute("data-title");

      modal.style.display = "block";
      modalImg.src = imgSrc;
      captionText.innerHTML = title;
    });
  });

  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // 5. Animate Skill Progress Bars on Scroll
  const fills = document.querySelectorAll(".progress-fill");
  fills.forEach((fill) => {
    const targetWidth = fill.getAttribute("data-progress");
    fill.style.width = targetWidth;
  });
});

