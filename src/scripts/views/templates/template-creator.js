import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__item">
    <img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.title}" />
    <h2 class="detail__title">${restaurant.name}</h2>
    <div class="detail__body">
      <h4>Address</h4>
      <p class="detail__desc">${restaurant.address}</p>
      <h4>City</h4>
      <p class="detail__desc">${restaurant.city}</p>
      <h4>Description</h4>
      <p class="detail__desc">${restaurant.description} minutes</p>
      <h4>Foods Menu</h4>
      <div class="detail__menu">
        ${restaurant.menus.foods.map((food) => `<div class="detail__menu--name">${food.name}</div>`).join('')}
      </div>
      <h4>Drinks Menu</h4>
      <div class="detail__menu">
        ${restaurant.menus.drinks.map((drink) => `<div class="detail__menu--name">${drink.name}</div>`).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant__item">
    <div class="card__header">
      <div class="card__header__location">${restaurant.city}</div>
      <img
        class="card__header__image"
        src=${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}
        alt=""
      />
    </div>
    <div class="card__body">
      <div class="card__body__rating">
        Rating: <span id="rating">${restaurant.rating}</span>
      </div>
      <div class="card__body__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></div>
      <div class="card__body__description">
        ${restaurant.description}
      </div>
    </div>
  </div>
`;

const createCustomerReviewsTemplate = (restaurant) => `
  <div class="detail__reviews">
    ${restaurant.customerReviews.map((review) => `
        <div class="detail__reviews--card">
          <h5>${review.name}</h5>
          <span class="detail__reviews--card__date">${review.date}</span>
          <p>${review.review}</p>
        </div>
      `).join('')}
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCustomerReviewsTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
// eslint-disable-next-line no-multiple-empty-lines
