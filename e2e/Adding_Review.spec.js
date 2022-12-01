const assert = require('assert');

Feature('Adding Review');

Before(async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card_body_name a');

  const firstRestaurant = locate('.card_body_name a').first();

  I.click(firstRestaurant);
});

Scenario('adding one review', async ({ I }) => {
  const inputNameQuery = 'alif';
  I.seeElement('.detail_reviews_name');
  I.fillField('.detail_reviews_name', inputNameQuery);

  const inputReviewQuery = 'hanafiah';
  I.seeElement('.detail_reviews_add');
  I.fillField('.detail_reviews_add', inputReviewQuery);

  I.seeElement('.detail_reviews_submit');
  I.click('.detail_reviews_submit');

  const lastReviewName = locate('.detail__reviews--card h5').last();
  const lastReviewComment = locate('.detail__reviews--card p').last();
  const lastReviewNameText = await I.grabTextFrom(lastReviewName);
  const lastReviewCommentText = await I.grabTextFrom(lastReviewComment);

  assert.strictEqual(inputNameQuery, lastReviewNameText);
  assert.strictEqual(inputReviewQuery, lastReviewCommentText);
});
