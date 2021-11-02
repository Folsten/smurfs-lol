export const state = () => ({
  customer: {
    email: ""
  },
})

export const getters = {
  customer: ({ customer }) => customer,
}

export const mutations = {
  updateEmail({ customer }, value) {
    customer.email = value
  },
}
