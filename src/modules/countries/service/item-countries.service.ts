import axios from 'axios'

export class CountriesServiceItem {
  static async getPopulation(commonName: string): Promise<[] | null> {
    const resPopulations = await axios.get(
      `https://countriesnow.space/api/v0.1/countries/population`,
    )
    const populationData = resPopulations.data.data.find(
      (countryFind: any) => countryFind.country === commonName,
    )
    return populationData ? populationData.populationCounts : null
  }

  static async getCountryInfo(code: string): Promise<any> {
    const resCountryInfo = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${code}`)
    return resCountryInfo.data
  }

  static async getFlag(code: string): Promise<string> {
    const resFlag = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`)
    const flagData = resFlag.data.data.find((flag: any) => flag.iso2 === code)
    const flag = flagData ? flagData.flag : ''
    return flag
  }

  static validateItem(payload: any): { code: string } {
    if (!payload?.code) {
      throw new Error('Code is required')
    }
    const code = payload.code.toUpperCase()
    return { code }
  }

  static async item(payload: any) {
    const { code } = this.validateItem(payload)
    const countryInfo = await this.getCountryInfo(code)
    const officialName = countryInfo.officialName
    const population = await this.getPopulation(officialName)
    const flag = await this.getFlag(code)

    const countryInfoPrepred = {
      borders: countryInfo.borders,
      population,
      flag,
    }
    return countryInfoPrepred
  }
}
