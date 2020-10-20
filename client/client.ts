import axios from 'axios'

class OmnixentClient {
  // search using online server
  static startSearch (term: string, service: string, lang: string, country: string) {
    const baseUrl = 'https://api.omnixent.com/api/v1/'
    const url = `${baseUrl}search?term=${term}&service=${service}&lang=${lang}&country=${country}`
    return axios.get(url)
  }

  search (term: string, service: string, lang: string, country: string) {
    return axios.get(`${process.env.NUXT_ENV_API_SERVER}search?term=${term}&service=${service}&lang=${lang}&country=${country}`)
  }

  getReport (reportId: string) {
    return axios.get(`${process.env.NUXT_ENV_API_SERVER}search/${reportId}`)
  }
}

export default OmnixentClient
