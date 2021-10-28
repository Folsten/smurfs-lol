export const state = () => ({
  isActive: false,
  order: {
    quantity: 1,
    smurf: ""
  }
})

export const mutations = {
  toggle(state) {
    state.isActive = !state.isActive
  },
  add(state, smurf) {
    state.order.smurf = smurf
  }
}
