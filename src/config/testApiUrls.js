export const TestApiUrls = {
  restaurantsGet:
    "https://run.mocky.io/v3/6511b7f8-4d05-4505-8661-426315cbf9bd",
  restaurantGet: "https://run.mocky.io/v3/6b662c1a-b4b5-46fc-8889-11456022cd52",
  searchLocationsGet: inputValue =>
    `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&countrycodes=MK&city=${inputValue}&format=json`,
  locationReverseGeocoding: latLang =>
    `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&lat=${latLang[0]}&lon=${latLang[1]}&format=json`
};
