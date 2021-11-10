export const state = () => ({
  code: "",
  value: "",
  discountType: "",
  status: "wait",
  statusText: "",
})

export const getters = {
  coupon: state => state
}

export const mutations = {
  updateCode(state, value) {
    state.code = value
    state.status = "wait"
  },
  setValue(state, value) {
    state.value = value
  },
  setDiscountType(state, value) {
    state.discountType = value
  },
  setStatus(state, value) {
    state.status = value
  },
  setStatusText(state, value) {
    state.statusText = value
  }
}

export const actions = {
  async verifyCoupon({ commit, getters }) {
    if (getters.coupon.code == "") { return } // если строка coupon пустая, то прервать выполнение текущей функции
    // Тело функции
    const response = await this.$axios.$get(`http://localhost:1337/coupons/verify/${getters.coupon.code}`)
    if (response.status == "OK") {
      commit('setValue', response.content.value)
      commit('setDiscountType', response.content.discount_type)
    }
    commit('setStatus', response.status)
    commit('setStatusText', response.statusText)
    console.log(response)
  }
}
