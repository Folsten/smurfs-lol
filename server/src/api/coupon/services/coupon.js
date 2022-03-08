'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coupon.coupon', ({ strapi }) => ({
  async validate(coupon) {
    const dbCoupon = await strapi.service('api::coupon.coupon').findOne(coupon.id, coupon);
    if (coupon.code == dbCoupon.code && coupon.value == dbCoupon.value && coupon.discountType == dbCoupon.discountType) {
      return true;
    } else {
      return false;
    }
  }
}));
