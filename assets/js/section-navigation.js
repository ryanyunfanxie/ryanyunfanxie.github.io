// Keep the native anchor scroll, and dismiss the mobile menu after selection.
document.querySelector('#site-nav').addEventListener('click', function (event) {
  const link = event.target.closest('a[href]');
  if (!link || !link.hash) return;
  document.querySelector('#site-nav .hidden-links').classList.add('hidden');
  document.querySelector('#site-nav button').classList.remove('close');
});
