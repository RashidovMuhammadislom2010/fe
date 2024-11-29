const burgerBtn = document.querySelector('.burger-btn');
const headerList = document.querySelector('.header-list');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    headerList.classList.toggle('active');
});
