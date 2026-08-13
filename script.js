/* script.js - Custom Scripts for Sweta Singh Portfolio */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle Project Prototype Demo Modals
    const demoButtons = document.querySelectorAll('.demo-link');
    const modal = document.getElementById('demoModal');
    const modalContent = document.getElementById('modalInjectedContent');
    const closeBtn = document.querySelector('.close-modal-btn');

    // Function to close modal
    window.closeModal = function() {
        modal.classList.remove('modal-active');
        modalContent.innerHTML = ''; // Clear content on close
    };

    // Close on close button click
    closeBtn.addEventListener('click', closeModal);

    // Close on clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle button clicks
    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectKey = button.getAttribute('data-demo');
            modalContent.innerHTML = getModalContent(projectKey);
            modal.classList.add('modal-active');
        });
    });

    // Helper function to get specific demo content
    function getModalContent(project) {
        if (project === 'todo') {
            return `
                <h3 class="text-xl font-bold text-white mb-2 modal-title">Live Demo: To-Do Web App</h3>
                <p class="text-xs text-slate-400 mb-4 modal-desc">Interactive task management prototype.</p>
                <div class="bg-slate-900/80 p-4 rounded-xl space-y-3 demo-interface">
                    <div class="flex gap-2 add-task-container">
                        <input type="text" id="todoDemoInput" placeholder="Add a new task..." class="w-full bg-slate-800 border border-slate-700 text-white text-xs px-3 py-2 rounded focus:outline-none focus:border-cyan-400">
                        <button id="addTodoDemoBtn" class="bg-cyan-500 text-slate-950 font-bold px-3 py-2 text-xs rounded">Add</button>
                    </div>
                    <ul id="todoDemoList" class="space-y-2 text-xs text-slate-300 max-h-40 overflow-y-auto task-list">
                        <li class="bg-slate-800 p-2 rounded flex justify-between task-item"><span>Check Emails</span> <span class="text-cyan-400">✓ Done</span></li>
                        <li class="bg-slate-800 p-2 rounded flex justify-between task-item"><span>Prepare portfolio</span> <span class="text-cyan-400">Active</span></li>
                    </ul>
                </div>
            `;
        } else if (project === 'bakehouse') {
            return `
                <h3 class="text-xl font-bold text-white mb-2 modal-title">Live Demo: Sundial Bakehouse</h3>
                <p class="text-xs text-slate-400 mb-4 modal-desc">Interactive category filtering simulation.</p>
                <div class="bg-slate-900/80 p-4 rounded-xl space-y-3 demo-interface">
                    <div class="flex gap-2 mb-2 filter-tabs">
                        <button class="bg-cyan-500 text-slate-950 px-2 py-1 rounded font-bold filter-btn" data-filter="All">All</button>
                        <button class="bg-slate-800 text-slate-300 px-2 py-1 rounded filter-btn" data-filter="Cakes">Cakes</button>
                        <button class="bg-slate-800 text-slate-300 px-2 py-1 rounded filter-btn" data-filter="Breads">Breads</button>
                    </div>
                    <div id="bakehouseDemoItems" class="grid grid-cols-2 gap-2 product-grid text-xs text-slate-200">
                        <div class="bg-slate-800 p-2 rounded product-item" data-category="Cakes">Chocolate Cake ($12)</div>
                        <div class="bg-slate-800 p-2 rounded product-item" data-category="Cakes">Fruit Tart ($8)</div>
                        <div class="bg-slate-800 p-2 rounded product-item" data-category="Breads">Sourdough Loaf ($6)</div>
                    </div>
                </div>
            `;
        } else if (project === 'portfolio') {
            return `
                <h3 class="text-xl font-bold text-white mb-2 modal-title">Portfolio UI Mockup</h3>
                <p class="text-xs text-slate-400 mb-4 modal-desc">Dark glassmorphism interface design.</p>
                <div class="bg-slate-900/80 p-4 rounded-xl text-center text-xs text-cyan-400 demo-interface">
                    You are currently interacting with the live, responsive version of this portfolio. Try resizing the window or navigating the menu!
                </div>
            `;
        }
        return '';
    }

    // 2. Setup Interactive Logic for Demos within Modal (using Event Delegation)
    modalContent.addEventListener('click', (e) => {
        // Add Todo logic
        if (e.target && e.target.id === 'addTodoDemoBtn') {
            const input = document.getElementById('todoDemoInput');
            const list = document.getElementById('todoDemoList');
            if (input && input.value.trim() !== '') {
                const li = document.createElement('li');
                li.className = 'bg-slate-800 p-2 rounded flex justify-between task-item';
                li.innerHTML = `<span>${input.value.trim()}</span> <span class="text-cyan-400">✓ Done</span>`;
                list.prepend(li); // Add to top
                input.value = '';
                input.focus();
            }
        }
        
        // Bakehouse Filter logic
        if (e.target && e.target.classList.contains('filter-btn')) {
            const filter = e.target.getAttribute('data-filter');
            const items = document.querySelectorAll('#bakehouseDemoItems .product-item');
            const buttons = document.querySelectorAll('.filter-tabs .filter-btn');
            
            // Update button styles
            buttons.forEach(btn => {
                btn.className = 'bg-slate-800 text-slate-300 px-2 py-1 rounded filter-btn';
            });
            e.target.className = 'bg-cyan-500 text-slate-950 px-2 py-1 rounded font-bold filter-btn';

            // Filter items
            items.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'All' || category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });

    // Enter key support for Todo Input
    modalContent.addEventListener('keypress', (e) => {
        if (e.target && e.target.id === 'todoDemoInput' && e.key === 'Enter') {
            document.getElementById('addTodoDemoBtn').click();
        }
    });


    // 3. Simple Form Submission Handling (Prevent Redirect)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset(); // Reset form fields
        });
    }
});
