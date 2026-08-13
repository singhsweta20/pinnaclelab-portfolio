/* script.js - Functional Project Demos and Interactions */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to Modal Elements
    const modal = document.getElementById('demoModal');
    const modalInjectedContent = document.getElementById('modalInjectedContent');
    const closeBtn = document.querySelector('.close-modal-btn');

    // Ensure modal is hidden on initial load
    if (modal) {
        modal.classList.add('hidden');
    }

    // 2. Function to Close Modal
    function closeModal() {
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('modal-active');
            // Clear content on close to prevent interaction carrying over
            modalInjectedContent.innerHTML = ''; 
        }
    }

    // 3. Setup Close Button Listener
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // 4. Setup Modal Logic: Listen for clicks on Project 'Live Demo' buttons
    const demoButtons = document.querySelectorAll('.demo-link');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent default form/anchor behaviour
            event.preventDefault();

            const projectKey = button.getAttribute('data-demo');
            if (projectKey && modal && modalInjectedContent) {
                modalInjectedContent.innerHTML = getModalContent(projectKey);
                modal.classList.remove('hidden');
                modal.classList.add('modal-active');
            }
        });
    });

    // 5. Close Modal on clicking outside the modal content area
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // 6. Close Modal on Escape Keypress
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // 7. Helper Function to Generate and Return Specific Modal Demo Content
    function getModalContent(project) {
        if (project === 'todo') {
            return `
                <h3 class="text-xl font-bold text-white mb-2 modal-title">Live Demo: To-Do Web App</h3>
                <p class="text-xs text-slate-400 mb-4 modal-desc">Interactive task persistence prototype.</p>
                <div class="bg-slate-900/80 p-4 rounded-xl space-y-3 demo-interface">
                    <div class="flex gap-2 add-task-container">
                        <input type="text" id="todoDemoInput" placeholder="Add a new task..." class="w-full bg-slate-800 border border-slate-700 text-white text-xs px-3 py-2 rounded focus:outline-none focus:border-cyan-400">
                        <button onclick="addDemoTask()" class="bg-cyan-500 text-slate-950 font-bold px-3 py-2 text-xs rounded add-todo-btn">Add</button>
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
                        <button class="bg-cyan-500 text-slate-950 px-2 py-1 rounded font-bold filter-btn">All</button>
                        <button class="bg-slate-800 text-slate-300 px-2 py-1 rounded filter-btn">Cakes</button>
                    </div>
                    <div id="bakehouseDemoItems" class="grid grid-cols-2 gap-2 product-grid text-xs text-slate-200">
                        <div class="bg-slate-800 p-2 rounded product-item">Chocolate Cake ($12)
