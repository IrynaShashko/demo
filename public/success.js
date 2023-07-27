const closeButton = document.getElementById("close-modal");

// Додаємо обробник події "click" до кнопки
closeButton.addEventListener("click", function () {
  // Виконуємо перенаправлення на головну сторінку
  window.location.href = "/";
});
