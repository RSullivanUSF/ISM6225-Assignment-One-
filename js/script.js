// --- SIMPLE CRUD + CHART ---

// ---------- CRUD ----------
const form = document.getElementById("crudForm");
const list = document.getElementById("list");
if (form && list) {
  let data = [];
  let editingIndex = null;

  form.onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const cat = document.getElementById("category").value.trim();
    if (!title || !cat) return;

    if (editingIndex === null) {
      data.push({ title, cat });
    } else {
      data[editingIndex] = { title, cat };
      editingIndex = null;
    }

    form.reset();
    render();
  };

  function render() {
    list.innerHTML = "";
    data.forEach((item, i) => {
      const li = document.createElement("li");
      li.textContent = `${item.title} (${item.cat})`;

      const edit = document.createElement("button");
      edit.textContent = "Edit";
      edit.onclick = () => {
        document.getElementById("title").value = item.title;
        document.getElementById("category").value = item.cat;
        editingIndex = i;
      };

      const del = document.createElement("button");
      del.textContent = "Delete";
      del.onclick = () => {
        data.splice(i, 1);
        if (editingIndex === i) editingIndex = null;
        render();
      };

      li.append(" ", edit, " ", del);
      list.appendChild(li);
    });
  }
}

// ---------- ANALYTICS ----------
if (document.getElementById("chart")) {
  const ctx = document.getElementById("chart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Home", "Cooking", "Pets", "Outdoor", "DIY"],
      datasets: [{
        label: "Mishaps",
        data: [5, 7, 3, 4, 2],
        backgroundColor: "#4fc3f7"
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
}
