import axios from 'axios';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

let scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Додавання обробника подій для прокрутки
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Показ або приховування кнопки при прокручуванні
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

// Обробник події для кліку на кнопці
scrollToTopBtn.addEventListener('click', scrollToTop);

// Функція для прокрутки наверх
function scrollToTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE та Opera
}
