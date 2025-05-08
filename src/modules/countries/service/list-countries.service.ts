import axios from 'axios';
export class CountriesServiceList {
  static async list(): Promise<[]> {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    const countries = response.data;
    return countries;
  }
}