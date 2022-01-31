'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const axios = require('axios').default;
const crypto = require('crypto');

module.exports = {
  async start(ctx, next) {
    try {
      let body = ctx.request.body
      let order = await strapi.query('order').create({
        "email": body.customer.email,
        "smurf": body.order.smurf.id,
        "quantity": body.order.quantity,
        "newsletter": body.newsletter,
      })
      console.log(order)

      let signatureData = order.quantity * order.smurf.finalPrice + ':' + 'USD' + ':' + order.id.toString() + ":" + '59a040f69f5301aed93dd367'
      const sha256 = crypto.createHash("sha256");
      sha256.update(signatureData, "utf8");
      const signature_sha256 = sha256.digest("hex");

      let payopInvoice = await axios.post('https://payop.com/v1/invoices/create', {
        "publicKey": "application-ee1e2f5f-3586-4761-843a-94765ae4fb5d",
        "order": {
          "id": order.id.toString(),
          "amount": order.quantity * order.smurf.finalPrice,
          "currency": "USD",
          "items": [
            {
              "id": order.smurf.id,
              "name": order.smurf.title,
              "price": order.smurf.finalPrice
            }
          ],
          "description": order.smurf.resource
        },
        "signature": signature_sha256,
        "payer": {
          "email": order.email,
          "phone": "",
          "name": "",
          "extraFields": {}
        },
        "language": "en",
        "resultUrl": `https://smurfs.lol/payment-completed?orderid=${order.smurf.id}`,
        "failPath": `https://smurfs.lol/payment-rejected?orderid=${order.smurf.id}`,
        "metadata": {}
      }).then(function(response) {
        console.log(response.data)
        ctx.status = 200
        ctx.body = response.data
      }).catch(function(error) {
        console.log(error)
        ctx.status = 400
        ctx.body = error.response
      })
    }
    catch (err) {
      console.log(err)
      ctx.status = 400
      ctx.body = 'error'
    }
  },
}
