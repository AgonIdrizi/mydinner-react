import { useLocation } from "react-router-dom";

function singularResource(resource) {
  if (resource === "restaurants") return "restaurant";
  if (resource === "groceries") return "grocery";
  if (resource === "flowers") return "flower";
  if (resource === "pharmacy") return "pharmacy";
}

const useResource = ({ singular = false } = {}) => {
  const location = useLocation();
  const uriArray = location.pathname.split("/");
  const resource = singular ? singularResource(uriArray[1]) : uriArray[1];
  const city = uriArray.length > 2 ? uriArray[3] : "";

  return { resource, city };
};

export default useResource;
