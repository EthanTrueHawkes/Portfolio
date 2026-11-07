const resume = document.querySelector('#resume');

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
