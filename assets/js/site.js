(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('#theme-toggle');
  const themeIcon = document.querySelector('#theme-icon');
  const menuButton = document.querySelector('#menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    themeIcon.textContent = theme === 'dark' ? '☾' : '☀';
  };

  setTheme(root.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));

  themeButton.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  });

  systemTheme.addEventListener('change', (event) => {
    if (!localStorage.getItem('theme')) setTheme(event.matches ? 'dark' : 'light');
  });

  const closeMenu = () => {
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    const willOpen = mobileMenu.hidden;
    mobileMenu.hidden = !willOpen;
    menuButton.setAttribute('aria-expanded', String(willOpen));
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href*="#"]');
    if (!link) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.pathname !== window.location.pathname || !destination.hash) return;
    const target = document.querySelector(destination.hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', destination.hash);
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 650) closeMenu();
  });
})();
