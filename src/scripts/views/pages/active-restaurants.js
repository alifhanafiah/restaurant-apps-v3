import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ActiveRestaurants = {
  async render() {
    return `
      <div class="hero"></div>
      <h2 class="explore__title">Explore Restaurant</h2>
      <div class="restaurant__list" id="restaurants"></div>
      <div class="lds-facebook"><div></div><div></div><div></div></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.activeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const loader = document.querySelector('.lds-facebook');
    loader.style.display = 'none';
  },
};

export default ActiveRestaurants;
