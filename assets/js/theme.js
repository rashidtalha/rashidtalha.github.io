(function () {
  var root = document.documentElement, key = 'theme';

  function isLight() { return root.dataset.theme === 'light'; }

  function setLight(on) {
    if (on) root.dataset.theme = 'light';
    else delete root.dataset.theme;            // dark is the CSS default

    try {
      if (on) localStorage.setItem(key, 'light');
      else localStorage.removeItem(key);       // only the override is stored
    } catch (e) {}
  }

  function toggle() { setLight(!isLight()); }

  // Initial state: dark unless the visitor previously chose light.
  try {
    if (localStorage.getItem(key) === 'light') root.dataset.theme = 'light';
  } catch (e) {}

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#theme-toggle')) return;
    e.preventDefault();
    toggle();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'd' && e.key !== 'D') return;
    if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
    var el = e.target;
    if (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
    toggle();
  });
})();