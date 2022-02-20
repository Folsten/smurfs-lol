'use strict';

/**
 *  smurf controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::smurf.smurf', ({ strapi }) => ({
  async find(ctx) {

    const entity = await strapi.service('api::smurf.smurf').find({populate: ['server']});

    const data = entity.results;
    let processedSmurfs = [];

    data.forEach(element => {
      if (element.credentials != '') {
        element.credentials = element.credentials.split('\n').length;
        processedSmurfs.push(element);
      }
    });

    return processedSmurfs;

    // const entity = await strapi.services.smurf.find();
    // let processedSmurfs = []
    // for (let i = 0; i < entity.length; i++) {
    //   // Проверка, что в Strapi в поле credentials что то указано и проверка,
    //   // что формат / количество указанного равно или больше единицы, на деле должен быть массив
    //   // с минимум одним значением
    //   if (entity[i].credentials != null && entity[i].credentials.length >= 1) {
    //     entity[i].stock = entity[i].credentials.length
    //     processedSmurfs.push(entity[i])
    //   }
    // }
    // return sanitizeEntity(processedSmurfs, { model: strapi.models.smurf });
  }
}));
