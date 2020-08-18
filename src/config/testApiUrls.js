export const TestApiUrls = {
  restaurantsGet: "https://run.mocky.io/v3/6511b7f8-4d05-4505-8661-426315cbf9bd",
  restaurantGet: "https://run.mocky.io/v3/1e6de3be-bf04-495b-9f69-eb76760a7e77",
  searchLocationsGet: (inputValue) => `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&countrycodes=MK&city=${inputValue}&format=json`,
  locationReverseGeocoding: (latLang) => `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&lat=${latLang[0]}&lon=${latLang[1]}&format=json`
}