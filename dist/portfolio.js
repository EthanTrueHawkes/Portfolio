const resume = document.querySelector('#resume');

for (const card of document.querySelectorAll('.case-study')) {
  card.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'touch') return;

    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const radius = Math.hypot(Math.max(x, bounds.width - x), Math.max(y, bounds.height - y));

    card.style.setProperty('--entry-x', `${x}px`);
    card.style.setProperty('--entry-y', `${y}px`);
    card.style.setProperty('--reveal-radius', `${radius}px`);
    card.classList.add('is-pointer-over');
  });

  card.addEventListener('pointerleave', () => card.classList.remove('is-pointer-over'));
}

document.addEventListener('keydown', (event) => {
  if (event.defaultPrevented || event.repeat || event.isComposing ||
      event.altKey || event.ctrlKey || event.metaKey || event.key.toLowerCase() !== 'r') {
    return;
  }

  if (event.target instanceof HTMLElement &&
      (event.target.isContentEditable || event.target.closest('input, textarea, select, [role="textbox"]'))) {
    return;
  }

  event.preventDefault();
  resume.click();
});
