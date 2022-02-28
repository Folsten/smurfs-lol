module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/checkout/smurf',
      handler: 'checkout.smurf',
      config: {
        auth: false,
      }
    },
    {
      method: 'POST',
      path: '/checkout/kappa',
      handler: 'checkout.kappa',
      config: {
        auth: false,
      }
    }
  ]
}
