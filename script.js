/*
  Скрипт для появления секций при прокрутке и обработки формы обратной связи.
  Используется IntersectionObserver для определения, когда элемент виден на экране,
  после чего к нему применяется класс `show`, запускающий CSS-анимацию. Такой
  подход соответствует рекомендациям веб‑дизайна 2025 года, когда микровзаимодействия
  помогают пользователю плавно ориентироваться на странице【644973756303529†L191-L221】.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Настройка наблюдателя для анимаций появления
  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observerInstance.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Отслеживаем все элементы с классом 'reveal'
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
});

// Обработка отправки формы
function submitForm(event) {
  event.preventDefault();
  // Простое уведомление вместо реальной отправки на сервер
  alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
  const form = document.getElementById('contactForm');
  if (form) form.reset();
  return false;
}