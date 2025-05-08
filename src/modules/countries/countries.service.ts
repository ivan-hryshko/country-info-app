import axios from 'axios';
export class CountriesService {
  static async list() {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    const countries = response.data;
    return countries;
  }
}