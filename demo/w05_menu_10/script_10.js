import menu from './data_10.js';

const sectionCenter = document.querySelector('.section-center');

console.log('menu', menu);

const displayMenuItems = (menu) => {
  let displayMenuItems = menu
    .map((item) => {
      const { id, title, category, price, img, desc } = item;
      return `
        <article class="menu-item">
          <img
            src=${img}
            alt="${title}"
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>${title}</h4>
              <h4 class="price">$${price}</h4>
            </header>
            <p class="item-text">
              ${desc}
            </p>
          </div>
        </article>
      `;
    })
    .join('');
  console.log('displayMenu', displayMenuItems);
  sectionCenter.innerHTML = displayMenuItems;
};

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
});