interface resultFormat {
  country: string,
  language: string,
  result: [],
  service: string,
  term: string,
  uuid: string
}
// state
const state = () => ({
  result: null
})
// mutations
const mutations = {
  addResult (state: any, ciao: resultFormat) {
    state.result = ciao
  }
}

// esports
export { state, mutations }
