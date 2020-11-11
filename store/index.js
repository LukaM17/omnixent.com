const state = () => ({
  counter: 0
})

const mutations = {
  increment(state) {
    state.counter++
  }
}

export { state, mutations }