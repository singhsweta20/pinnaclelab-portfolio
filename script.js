document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('demoModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');
    const demoButtons = document.querySelectorAll('.demo-btn');

    // Demo Content per project
    const demoData = {
        portfolio: `
            <h3 class="text-xl font-bold text-white mb-2">Live Demo: Developer Portfolio</h3>
            <p class="text-xs text-slate-400 mb-4">Aap abhi is portfolio website ko live browser par hi interact kar rhe hain.</p>
            <div class="bg-slate-900/80 p-4 rounded-xl text-xs text-cyan-400 border border-slate-700">
                ✓ Glassmorphism UI Active<br>
                ✓ Fully Responsive Navigation<br>
                ✓ JavaScript Modal Active
            </div>
        `,
        bakehouse: `
            <h3 class="text-xl font-bold text-white mb-2">Live Demo: Sundial Bakehouse</h3>
            <p class="text-xs text-slate-400 mb-4">Interactive filtering & cart menu simulation.</p>
            <div class="bg-slate-900/80 p-4 rounded-xl space-y-2 border border-slate-700">
                <div class="flex gap-2">
                    <span class="bg-cyan-500 text-slate-950 px-2 py-0.5 text-xs font-bold rounded">All</span>
                    <span class="bg-slate-800 text-slate-300 px-2 py-0.5 text-xs rounded">Cakes</span>
                </div>
                <div class="text-xs text-slate-200 pt-2 border-t border-slate-800">
                    🍰 Chocolate Cake - $12.00
                </div>
            </div>
        `,
        todo: `
            <h3 class="text-xl font-bold text-white mb-2">Live Demo: To-Do App</h3>
            <p class="text-xs text-slate-400 mb-4">Try adding a task below:</p>
            <div class="bg-slate-900/80 p-4 rounded-xl space-y-3 border border-slate-700">
                <div class="flex gap-2">
                    <input type="text" id="demoInput" placeholder="New Task..." class="bg-slate-800 text-white text-xs px-2 py-1 rounded w-full border border-slate-700">
                    <button id="addBtn" class="bg-cyan-500 text-slate-950 text-xs px-3 font-bold rounded">Add</button>
                </div>
                <ul id="demoList" class="text-xs text-slate-300 space-y-1">
                    <li class="bg-slate-800 p-1.5 rounded">✓ Complete GitHub deployment</li>
                </ul>
            </div>
        `
    };

    // Open Modal
    demoButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents adding '#' to URL and scrolling to top
            const project = btn.getAttribute('data-project');
            modalBody.innerHTML = demoData[project] || '<p class="text-white">Demo not found.</p>';
            modal.classList.remove('hidden');

            // Handle To-Do dynamic feature inside modal
            if(project === 'todo') {
                const addBtn = document.getElementById('addBtn');
                const demoInput = document.getElementById('demoInput');
                const demoList = document.getElementById('demoList');
                addBtn?.addEventListener('click', () => {
                    if(demoInput.value.trim() !== "") {
                        const li = document.createElement('li');
                        li.className = "bg-slate-800 p-1.5 rounded";
                        li.textContent = "• " + demoInput.value;
                        demoList.appendChild(li);
                        demoInput.value = "";
                    }
                });
            }
        });
    });

    // Close Modal
    closeModal?.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
