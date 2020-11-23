export const TestApiUrls = {
  "restaurants":
    "https://run.mocky.io/v3/607454d9-264a-4b4f-a0a6-059d4fbc56f1",
  "groceries": "https://run.mocky.io/v3/4c78875e-4978-48fc-9b25-1d25db597728",
  restaurantGet: "https://run.mocky.io/v3/6b662c1a-b4b5-46fc-8889-11456022cd52",
  "grocery": "https://run.mocky.io/v3/c5a251cd-84a5-4e52-adbd-b4aa283d4eb3",
  searchLocationsGet: inputValue =>
    `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&countrycodes=MK&city=${inputValue}&format=json`,
  locationReverseGeocoding: latLang =>
    `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&lat=${latLang[0]}&lon=${latLang[1]}&format=json`
};
