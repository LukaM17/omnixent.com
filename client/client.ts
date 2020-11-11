import axios from 'axios'

class OmnixentClient {
  search (term: string, service: string, lang: string, country: string) {
    console.log(`${process.env.NUXT_ENV_API_SERVER}search?term=${term}&service=${service}&lang=${lang}&country=${country}`)
    return axios.get(`${process.env.NUXT_ENV_API_SERVER}search?term=${term}&service=${service}&lang=${lang}&country=${country}`)
  }

  getReport (reportId: string) {
    return axios.get(`${process.env.NUXT_ENV_API_SERVER}search/${reportId}`)
  }
}

export default OmnixentClient
