interface resultFormat {
  country: string,
  language: string,
  result: [],
  service: string,
  term: string,
  uuid: string
}

const getDefaultState = () => {
  return {
    country: null,
    language: null,
    result: [],
    service: null,
    term: null,
    uuid: null
  }
}
// state
export const state = getDefaultState()
// mutations
export const mutations = {
  addResult (state: any, searchResult: resultFormat) {
    state.country = searchResult.country
    state.language = searchResult.language
    state.term = searchResult.term
    state.result = searchResult.result
    state.service = searchResult.service
    state.uuid = searchResult.uuid
  },
  resetResult (state: any) {
    Object.assign(state, getDefaultState())
  }
}
