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

export const actions = {
  async verifyCoupon(ctx) {
    if (ctx.getters.coupon.code == "") {return} // если строка coupon пустая, то прервать выполнение текущей функции
    const result = await this.$axios.$get(`http://localhost:1337/coupons/verify/${ctx.getters.coupon.code}`)
    console.log(result)
  }
}
