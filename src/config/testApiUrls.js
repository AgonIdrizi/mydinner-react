export const TestApiUrls = {
  restaurantsGet: "https://run.mocky.io/v3/669f560f-d602-43a8-9754-4fb23c28715b",
  restaurantGet: "https://run.mocky.io/v3/1e6de3be-bf04-495b-9f69-eb76760a7e77",
  searchLocationsGet: (inputValue) => `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&countrycodes=MK&city=${inputValue}&format=json`,
  locationReverseGeocoding: (latLang) => `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&lat=${latLang[0]}&lon=${latLang[1]}&format=json`
}