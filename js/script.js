document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded');

  const topbar = document.getElementById('topbar');
  const menuIcon = document.getElementById('menuIcon');
  const menuDrawer = document.getElementById('menuDrawer');
  const githubButton = document.getElementById('githubButton');

  // Menu drawer toggle
  if (menuIcon && menuDrawer) {
    menuIcon.addEventListener('click', function() {
      menuDrawer.classList.toggle('open');
    });

    // Optional: close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuDrawer.contains(e.target) && !menuIcon.contains(e.target)) {
        menuDrawer.classList.remove('open');
      }
    });
  }

  // GitHub redirect
  if (githubButton) {
    githubButton.addEventListener('click', function() {
      window.open('https://github.com/FireflySpectra/firefly_release', '_blank');
    });
  }

  // Python version guide redirect
  document.querySelector('.btn-python').addEventListener('click', function() {
    window.open('https://devguide.python.org/versions/', '_blank');
  });
});
