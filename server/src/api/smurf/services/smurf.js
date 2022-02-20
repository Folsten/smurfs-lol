'use strict';

/**
 * smurf service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smurf.smurf');
