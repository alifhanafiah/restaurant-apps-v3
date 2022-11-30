const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.card__body__name a');

  const firstRestaurant = locate('.card__body__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const likedRestaurantName = await I.grabTextFrom('.card__body__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.card__body__name a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.card__body__name a').at(i));

    I.seeElement('#likeButton');

    I.click('#likeButton');

    names.push(await I.grabTextFrom('.detail__title'));

    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleFavoritedRestaurants = await I.grabNumberOfVisibleElements('.restaurant__item');
  assert.strictEqual(matchingRestaurants.length, visibleFavoritedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.card__body__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
