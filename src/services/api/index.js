import CountriesApi from "./features/CountriesApi";
import StatesApi from "@/services/api/features/StatesApi";
import CitiesApi from "@/services/api/features/CitiesApi";
import ProductsApi from "@/services/api/features/ProductsApi";
import UserApi from "@/services/api/features/UserApi";

const api = {
  countries: () => new CountriesApi(),
  states: () => new StatesApi(),
  cities: () => new CitiesApi(),
  user: () => new UserApi(),
  products: () => new ProductsApi(),
}

export default api;