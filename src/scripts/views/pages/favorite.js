import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="hero"></div>
      <h2 class="explore__title">Favorited Restaurant</h2>
      <div class="restaurant__list" id="restaurants"></div>
      <div class="lds-facebook"><div></div><div></div><div></div></div>
    `;
  },

  async afterRender() {
    // mengambil semua restaurant pada indexdb
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length <= 0) {
      restaurantsContainer.innerHTML = '<p>Theres no favorited restaurant</p>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }

    const loader = document.querySelector('.lds-facebook');
    loader.style.display = 'none';
  },
};

export default Favorite;
