(function () {
  var root = document.documentElement, key = 'theme';

  try {
    if (localStorage.getItem(key) === 'light') {
      root.dataset.theme = 'light';
    }
  } catch (e) {}

  function toggleTheme() {
    var light = root.dataset.theme !== 'light';

    if (light) {
      root.dataset.theme = 'light';
    } else {
      delete root.dataset.theme;
    }

    try {
      if (light) {
        localStorage.setItem(key, 'light');
      } else {
        localStorage.removeItem(key);
      }
    } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#theme-toggle')) return;
    e.preventDefault();
    toggleTheme();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key.toLowerCase() === 'd') {
      toggleTheme();
    }
  });

})();

(function () {

  

  
})();