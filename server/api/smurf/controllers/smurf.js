'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const entity = await strapi.services.smurf.find();
    let processedSmurfs = []
    for (let i = 0; i < entity.length; i++) {
      // Проверка, что в Strapi в поле credentials что то указано и проверка,
      // что формат / количество указанного равно или больше единицы, на деле должен быть массив
      // с минимум одним значением
      if (entity[i].credentials != null && entity[i].credentials.length >= 1) {
        entity[i].stock = entity[i].credentials.length
        processedSmurfs.push(entity[i])
      }
    }
    return sanitizeEntity(processedSmurfs, { model: strapi.models.smurf });
  },
};
