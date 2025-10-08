// Show / Hide extra reflection text on About page
document.getElementById('toggleMore')?.addEventListener('click', function () {
  const p = document.getElementById('moreText');
  if (!p) return;
  const hidden = p.style.display === 'none';
  p.style.display = hidden ? 'block' : 'none';
  this.textContent = hidden ? 'Show less' : 'Show more';
});
