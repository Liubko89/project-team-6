const closeHeaderBtn = document.querySelector('.js-close-menu');
const openHeaderBtn = document.querySelector('.js-open-menu');
const headerMobileMenu = document.querySelector('.js-menu-container');

closeHeaderBtn.addEventListener('click', onCloseMobMenu);
openHeaderBtn.addEventListener('click', onOpenMobMenu);

function onCloseMobMenu() {
  headerMobileMenu.classList.add('is-hidden');
}

function onOpenMobMenu() {
  headerMobileMenu.classList.remove('is-hidden');
}
