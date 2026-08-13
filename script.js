/* script.js - Final Cleaned and Optimized Version */

// Wait for the DOM to fully load before running any script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Contact Form Alert & Reset ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            // Match the alert message with your image context
            alert('Thank you! Your message has been recorded.');
            contactForm.reset();
        });
    }

    // --- 2. Certificate Modal Logic ---
    const certModal = document.getElementById('certModal');
    const modalCertTitle = document.getElementById('modalCertTitle');
    const modalCertImage = document.getElementById('modalCertImage');
    const closeCertModal = document.getElementById('closeCertModal');
    const certBtns = document.querySelectorAll('.cert-btn');

    // Check if modal elements exist before setting listeners
    if (certModal && modalCertImage && modalCertTitle && certBtns.length > 0) {

        certBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Prevent any default behavior (e.g., if inside an anchor tag)
                e.preventDefault();

                // Get data from data attributes set in HTML
                const certTitle = btn.getAttribute('data-title');
                const certImg = btn.getAttribute('data-img');

                // Update modal content
                modalCertTitle.innerText = certTitle || "Certificate Preview";
                modalCertImage.src = certImg || "";

                // Show modal (remove hidden, add flex to show it)
                certModal.classList.remove('hidden');
                certModal.classList.add('flex');
            });
        });

        // Close modal on close button click
        if (closeCertModal) {
            closeCertModal.addEventListener('click', () => {
                certModal.classList.add('hidden');
                certModal.classList.remove('flex');
            });
        }

        // Close modal on window click (clicking outside the modal box)
        window.addEventListener('click', (e) => {
            if (e.target === certModal) {
                certModal.classList.add('hidden');
                certModal.classList.remove('flex');
            }
        });
    }
});
