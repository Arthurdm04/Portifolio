document.getElementById('yr').textContent = new Date().getFullYear();
    const btn = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    (function(){
  const btn = document.getElementById('toTop');
  if(!btn) return;

  const showAt = 300; // px
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  const onScroll = () => {
    if (window.scrollY > showAt) btn.classList.add('is-visible');
    else btn.classList.remove('is-visible');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced.matches ? 'auto' : 'smooth'
    });
  });
})();
