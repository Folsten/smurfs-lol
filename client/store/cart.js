export const state = () => ({
  isActive: false,
  order: {
    quantity: 1,
    smurf: ""
  }
})

export const getters = {
  order: ({ order }) => order,
}

export const mutations = {
  toggle(state) {
    state.isActive = !state.isActive
    // Сброс к значениям по умолчанию
    state.order.quantity = 1
  },
  setSmurf(state, smurf) {
    state.order.smurf = smurf
  },
  increaseQuantity({ order }) {
    if (order.quantity < 10) {
      order.quantity++;
    }
  },
  decreaseQuantity({ order }) {
    if (order.quantity > 1) {
      order.quantity--;
    }
  },
}
