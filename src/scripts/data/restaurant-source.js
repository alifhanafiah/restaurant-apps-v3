import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async activeRestaurants() {
    const response = await fetch(API_ENDPOINT.ACTIVE_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };

    const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
