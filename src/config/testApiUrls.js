export const TestApiUrls = {
  restaurants: "https://run.mocky.io/v3/607454d9-264a-4b4f-a0a6-059d4fbc56f1",
  groceries: "https://run.mocky.io/v3/4c78875e-4978-48fc-9b25-1d25db597728",
  restaurant: "https://run.mocky.io/v3/a662ead3-f6b0-4102-af91-854f5bf57470",
  grocery: "https://run.mocky.io/v3/25479b80-36b0-458d-a404-b6eb50aab95a",
  searchLocationsGet: inputValue =>
    `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&countrycodes=MK&city=${inputValue}&format=json`,
  locationReverseGeocoding: latLang =>
    `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&lat=${latLang[0]}&lon=${latLang[1]}&format=json`
};
