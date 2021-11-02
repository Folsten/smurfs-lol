export const state = () => ({
  coupon: {
    code: ""
  },
})

export const getters = {
  coupon: ({ coupon }) => coupon
}

export const mutations = {
  updateCoupon({ coupon }, value) {
    coupon.code = value
  }
}
