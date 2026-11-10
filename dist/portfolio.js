const resume = document.querySelector('#resume');

for (const card of document.querySelectorAll('.case-study')) {
  card.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch') card.classList.add('is-pointer-over');
  });

  card.addEventListener('pointerleave', () => card.classList.remove('is-pointer-over'));
}

resume.addEventListener('keydown', (event) => {
  if (event.defaultPrevented || event.repeat || event.isComposing ||
      event.altKey || event.ctrlKey || event.metaKey || event.key.toLowerCase() !== 'r') {
    return;
  }

  event.preventDefault();
  resume.click();
});
