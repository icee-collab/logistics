function toggleLang() {
  document.querySelectorAll('.en').forEach(el => el.classList.toggle('hidden'));
  document.querySelectorAll('.cn').forEach(el => el.classList.toggle('hidden'));
}