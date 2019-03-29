const expect = require('chai').expect;

Feature('List of restaurants');

Before((I) => {
    I.amOnPage('en/restaurants/lat/52.52455979070783/lng/13.394857417373487/plz/10117/city/Berlin/address/Oranienburger%2520Str.%252027%252C%252010117%2520Berlin%252C%2520Germany/Oranienburger%2520Stra%25C3%259Fe/27')
});

Scenario('Return open restaurants', async (I) => {
    const openRestro = await I.getRestaurantList('ul[class="vendor-list opened"] li');
    console.log(openRestro);
    expect(openRestro).to.be.greaterThan(0);
});

Scenario('Return closed restaurants', async (I) => {
    const closedRestro = await I.getRestaurantList('ul[class="vendor-list closed"] li');
    expect(closedRestro).to.be.greaterThan(0);
});