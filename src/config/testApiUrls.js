export const TestApiUrls = {
  restaurantsGet: "https://run.mocky.io/v3/4a5f6794-012b-455e-824f-55cf4405a58e",
  restaurantGet: "https://run.mocky.io/v3/1e6de3be-bf04-495b-9f69-eb76760a7e77",
  searchLocationsGet: (inputValue) => `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&countrycodes=MK&city=${inputValue}&format=json`,
  locationReverseGeocoding: (latLang) => `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&lat=${latLang[0]}&lon=${latLang[1]}&format=json`
}