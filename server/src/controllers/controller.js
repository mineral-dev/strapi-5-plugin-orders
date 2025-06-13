const controller = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-5-plugin-orders')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },
  async getOrder(ctx) {
    const { page, status, q } = ctx.request.query

    try {
      ctx.body = await strapi
        .plugin('strapi-5-plugin-orders')
        // the name of the service file & the method.
        .service('service')
        .getOrders({ page, status, q });
    } catch (error) {
      ctx.send({ message: error.message }, 409);
    }
  },
  async getOrderById(ctx) {
    const { id } = ctx.params;

    try {
      ctx.body = await strapi
        .plugin('strapi-5-plugin-orders')
        // the name of the service file & the method.
        .service('service')
        .getOrderById(id);
    } catch (error) {
      ctx.send({ message: error.message }, 409);
    }
  }
});

export default controller;
