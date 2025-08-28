// Включаем появление .reveal и подсветку P.S. при прокрутке
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('show');     // запускаем transition/animation
      } else {
        el.classList.remove('show');  // чтобы анимация могла перезапускаться
      }
    });
  }, { threshold: 0.25 });

  revealEls.forEach(el => io.observe(el));
});
