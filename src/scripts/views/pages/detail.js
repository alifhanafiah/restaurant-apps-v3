import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createCustomerReviewsTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="hero"></div>
      <h2 class="explore__title">Detail of Restaurant</h2>
      <div class="restaurant__detail" id="restaurant"></div>
      <div id="add-review">
        <h3>Customer Reviews</h3>
        <form class="add-review__form">
          <input type="text" class="detail__reviews__name" placeholder="Who are you ?" required/>
          <input type="text" class="detail__reviews__add" placeholder="Write something..." required/>
          <button class="detail__reviews__submit" type="submit">Post Comment</button>
        </form>
        <div id="comments"></div>
      </div>
      <div class="lds-facebook"><div></div><div></div><div></div></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const nameInput = document.querySelector('.detail__reviews__name');
    const reviewInput = document.querySelector('.detail__reviews__add');
    const addReviewContainer = document.querySelector('.add-review__form');

    const commentsContainer = document.querySelector('#comments');

    const restaurantDetailReviews = await RestaurantSource.detailRestaurant(url.id);
    commentsContainer.innerHTML = createCustomerReviewsTemplate(restaurantDetailReviews);

    addReviewContainer.addEventListener('submit', async (e) => {
      e.preventDefault();

      const review = {
        id: restaurant.id,
        name: nameInput.value,
        review: reviewInput.value,
      };

      const restaurantReviews = await RestaurantSource.addReview(review);
      commentsContainer.innerHTML = createCustomerReviewsTemplate(restaurantReviews);

      // clear value
      nameInput.value = '';
      reviewInput.value = '';
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        name: restaurant.name,
        description: restaurant.description,
      },
    });

    const loader = document.querySelector('.lds-facebook');
    loader.style.display = 'none';
  },
};

export default Detail;
