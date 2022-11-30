import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image-small.webp">
          <img src='./images/hero-image-large.webp' alt=" " class="hero">
        </picture>
      </div>
      <h2 class="explore__title">Favorited Restaurant</h2>
      <input id="query" type="text" class="search-query" placeholder="Put your favorite movie here...">
      <div class="restaurant__list" id="restaurants"></div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<p class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</p>';
  }
}

export default FavoriteRestaurantSearchView;
