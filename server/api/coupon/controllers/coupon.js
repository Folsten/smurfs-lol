'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  // async findOne(ctx) {
  //   const { id } = ctx.params;

  //   const entity = await strapi.services.restaurant.findOne({ id });
  //   return sanitizeEntity(entity, { model: strapi.models.restaurant });
  // },

  async verify(ctx) {
    const { code } = ctx.params
    const entity = await strapi.services.coupon.findOne({ code });
    if (entity != null) {
      // Проверка, что купон уже начал действовать
      if (new Date() < new Date(entity.start_date)) {
        return { status: "warning", statusText: `This coupon code does not exist`, content: sanitizeEntity(entity, { model: strapi.models.coupon }) }
      }
      // Проверка, что купон ещё действует
      if (new Date() > new Date(entity.end_date)) {
        return { status: "warning", statusText: "This coupon code has expired", content: sanitizeEntity(entity, { model: strapi.models.coupon }) }
      }
      // Проверка, что купон ещё не исчерпал лимит своих использований
      if (entity.stock != "infinity" && entity.stock <= 0) {
        return { status: "warning", statusText: "This coupon code has reached the limit of its uses", content: sanitizeEntity(entity, { model: strapi.models.coupon }) }
      }
      // Срабатывает, если все существующие проверки были пройдены
      return { status: "OK", content: sanitizeEntity(entity, { model: strapi.models.coupon }) }
    } else {
      return { status: "warning", statusText: "This coupon code does not exist", content: false }
    }
  }
};
