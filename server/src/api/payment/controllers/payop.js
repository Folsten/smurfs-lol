const axios = require('axios').default;

module.exports = {
  async ipn(ctx) {
    console.log(ctx);
    ctx.body = 'ok'
    ctx.status = 200
  }
}
