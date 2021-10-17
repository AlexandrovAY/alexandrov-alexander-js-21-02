const themeButton = document.querySelector('.page-header__theme-button');
const pageBody = document.querySelector('.page__body');

themeButton.addEventListener('click', function() {
  pageBody.classList.toggle('light-theme');
  pageBody.classList.toggle('dark-theme');
});
