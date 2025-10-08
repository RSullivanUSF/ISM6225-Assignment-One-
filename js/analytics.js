// Russ’s Disaster Dashboard

// Data sets
const categoryLabels = ["Home", "Cooking", "Pets", "Outdoor", "DIY"];
const categoryCounts = [9, 12, 6, 8, 10];

const severityLabels = ["Minor", "Moderate", "Full-Scale Chaos"];
const severityCounts = [14, 10, 7];

// Bar chart
new Chart(document.getElementById("mishapChart"), {
  type: "bar",
  data: {
    labels: categoryLabels,
    datasets: [{
      label: "Mishaps (Tracked, Not Learned From)",
      data: categoryCounts,
      backgroundColor: ["#4fc3f7", "#ffd166", "#ef476f", "#06d6a0", "#118ab2"]
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: { legend: { display: false } }
  }
});

// Doughnut chart
new Chart(document.getElementById("severityChart"), {
  type: "doughnut",
  data: {
    labels: severityLabels,
    datasets: [{
      data: severityCounts,
      backgroundColor: ["#06d6a0", "#ffd166", "#ef476f"]
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
    cutout: "55%"
  }
});
