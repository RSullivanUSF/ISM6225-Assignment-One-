// --- Manage Mishaps (Mock CRUD) ---
let mishaps = [
  { id: crypto.randomUUID(), title: "The Accidental Satellite Launch", category: "Outdoor", severity: "Moderate", date: "2025-05-12", lesson: "String + wind = unintended orbit." },
  { id: crypto.randomUUID(), title: "Grounding Myself Was a Mistake", category: "Home", severity: "Minor", date: "2025-05-27", lesson: "Sand ≠ ground." },
  { id: crypto.randomUUID(), title: "The Moment We Lost the Rug", category: "Pets", severity: "Full-Scale Chaos", date: "2025-05-29", lesson: "Bubbles was unsupervised." }
];

const form = document.getElementById('mishapForm');
const body = document.getElementById('mishapBody');

const titleEl = document.getElementById('title');
const categoryEl = document.getElementById('category');
const severityEl = document.getElementById('severity');
const dateEl = document.getElementById('date');
const lessonEl = document.getElementById('lesson');

const updateBtn = document.getElementById('updateBtn');
const deleteBtn = document.getElementById('deleteBtn');
const clearBtn  = document.getElementById('clearBtn');

let selectedId = null;

// Render the table
function render() {
  body.innerHTML = '';
  mishaps.forEach(m => {
    const tr = document.createElement('tr');
    tr.style.cursor = 'pointer';
    tr.innerHTML = `
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,.08)">${m.title}</td>
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,.08)">${m.category}</td>
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,.08)">${m.severity}</td>
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,.08)">${m.date}</td>
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,.08)">${m.lesson || ""}</td>`;
    tr.addEventListener('click', () => loadForEdit(m.id));
    body.appendChild(tr);
  });
}
render();

// CREATE
form.addEventListener('submit', e => {
  e.preventDefault();
  mishaps.push({
    id: crypto.randomUUID(),
    title: titleEl.value.trim(),
    category: categoryEl.value.trim(),
    severity: severityEl.value,
    date: dateEl.value,
    lesson: lessonEl.value.trim()
  });
  form.reset();
  selectedId = null;
  updateBtn.disabled = true;
  deleteBtn.disabled = true;
  alert("Incident logged. Insurance notified (kidding).");
  render();
});

function loadForEdit(id) {
  const m = mishaps.find(x => x.id === id);
  if (!m) return;
  titleEl.value = m.title;
  categoryEl.value = m.category;
  severityEl.value = m.severity;
  dateEl.value = m.date;
  lessonEl.value = m.lesson || '';
  selectedId = id;
  updateBtn.disabled = false;
  deleteBtn.disabled = false;
}

// UPDATE
updateBtn.addEventListener('click', () => {
  if (!selectedId) return;
  mishaps = mishaps.map(m => m.id === selectedId
    ? { ...m,
        title: titleEl.value.trim(),
        category: categoryEl.value.trim(),
        severity: severityEl.value,
        date: dateEl.value,
        lesson: lessonEl.value.trim() }
    : m);
  form.reset();
  selectedId = null;
  updateBtn.disabled = true;
  deleteBtn.disabled = true;
  render();
});

// DELETE
deleteBtn.addEventListener('click', () => {
  if (!selectedId) return;
  mishaps = mishaps.filter(m => m.id !== selectedId);
  form.reset();
  selectedId = null;
  updateBtn.disabled = true;
  deleteBtn.disabled = true;
  render();
});

// CLEAR
clearBtn.addEventListener('click', () => {
  form.reset();
  selectedId = null;
  updateBtn.disabled = true;
  deleteBtn.disabled = true;
});
