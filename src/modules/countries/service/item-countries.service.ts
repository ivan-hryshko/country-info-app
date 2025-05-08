import axios from 'axios';

export class CountriesServiceItem {
  static async getPopulation(commonName: string): Promise<[] | null> {
    const resPopulations = await axios.get(`https://countriesnow.space/api/v0.1/countries/population`);
    const populationData = resPopulations.data.data.find((countryFind: any) => countryFind.country === commonName);
    return populationData ? populationData.populationCounts : null;
  }

  static async getCountryInfo(code: string): Promise<any> {
    const resCountryInfo = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${code}`);
    return resCountryInfo.data;
  }

  static validateItem(payload: any): { code : string } {
    if (!payload?.code) {
      throw new Error('Code is required');
    }
    const code = payload.code.toUpperCase();
    return { code };
  }


  static async item(payload: any) {
    const { code } = this.validateItem(payload);
    const countryInfo = await this.getCountryInfo(code);
    const officialName = countryInfo.officialName;
    const population = await this.getPopulation(officialName);

    const countryInfoPrepred = {
      borders: countryInfo.borders,
      population,
    }
    return countryInfoPrepred
  }
}