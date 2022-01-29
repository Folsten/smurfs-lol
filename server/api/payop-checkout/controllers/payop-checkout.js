'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async start(ctx, next) {
    try {
      console.log(ctx.request.body)
      let body = ctx.request.body
      await strapi.query('order').create({
        "email": body.customer.email,
        "smurf": body.order.smurf.id,
        "quantity": body.order.quantity,
        "newsletter": body.newsletter,
      })
      ctx.body = 'ok'
    }
    catch(err) {
      console.log(err)
      ctx.status = 400
      ctx.body = 'error'
    }
  },
}
