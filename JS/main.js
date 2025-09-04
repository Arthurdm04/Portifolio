document.getElementById('yr').textContent = new Date().getFullYear();
    const btn = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });