import axios from 'axios';

export class CountriesServiceItem {
  static async item(payload: any) {

    const code = payload.code.toUpperCase();
    const response = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${code}`);
    const resCountryInfo = response.data;
    const borders = resCountryInfo.borders;
    const countryInfo = {
      borders,
    }
    return countryInfo
  }
}