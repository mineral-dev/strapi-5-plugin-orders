"use strict";
const bootstrap = async ({ strapi }) => {
  const actions = [
    {
      section: "plugins",
      displayName: "Show Order",
      uid: "access",
      // Action to access the plugin
      pluginName: "strapi-5-plugin-orders"
      // Plugin name
    }
  ];
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
const destroy = ({ strapi }) => {
};
const register = ({ strapi }) => {
};
const config = {
  default: {},
  validator() {
  }
};
const contentTypes = {};
const controller = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi.plugin("strapi-5-plugin-orders").service("service").getWelcomeMessage();
  },
  async getOrder(ctx) {
    const { page, status, q } = ctx.request.query;
    try {
      ctx.body = await strapi.plugin("strapi-5-plugin-orders").service("service").getOrders({ page, status, q });
    } catch (error) {
      ctx.send({ message: err.message }, 409);
    }
  },
  async getOrderById(ctx) {
    const { id } = ctx.params;
    try {
      ctx.body = await strapi.plugin("strapi-5-plugin-orders").service("service").getOrderById(id);
    } catch (error) {
      ctx.send({ message: err.message }, 409);
    }
  }
});
const controllers = {
  controller
};
const middlewares = {};
const policies = {};
const contentAPIRoutes = [
  {
    method: "GET",
    path: "/",
    // name of the controller file & the method.
    handler: "controller.index",
    config: {
      policies: []
    }
  },
  {
    method: "GET",
    path: "/orders",
    // name of the controller file & the method.
    handler: "controller.getOrder",
    config: {
      auth: false,
      policies: []
    }
  },
  {
    method: "GET",
    path: "/orders/:id",
    // name of the controller file & the method.
    handler: "controller.getOrderById",
    config: {
      auth: false,
      policies: []
    }
  }
];
const routes = {
  "content-api": {
    type: "content-api",
    routes: contentAPIRoutes
  }
};
const service = ({ strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
  async getOrders({ page = 0, q, status }) {
    let orders = {
      data: [],
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 0,
        total: 0
      }
    };
    try {
      const [entries, count] = await strapi.db.query("api::order.order").findWithCount({
        where: {
          $or: [
            {
              order_id: { $containsi: q ?? "" }
            },
            {
              email: { $containsi: q ?? "" }
            }
          ],
          $and: [
            {
              status: { $containsi: status ?? "" }
            }
          ]
        },
        populate: { order_item: true },
        orderBy: { id: "DESC" },
        limit: 10,
        offset: page
      });
      const currentPage = Math.floor(page / 10) + 1;
      const pagination = {
        page: currentPage,
        pageSize: 10,
        pageCount: Math.ceil(count / 10),
        total: count
      };
      orders = {
        data: entries,
        pagination
      };
    } catch (error) {
      console.log(error.message, "get err orders");
    }
    return orders;
  },
  async getOrderById(id) {
    let order = null;
    try {
      order = await strapi.db.query("api::order.order").findOne({
        where: { documentId: id },
        populate: { order_item: true }
      });
    } catch (error) {
      console.log(error.message, "get err order by id");
    }
    return order;
  }
});
const services = {
  service
};
const index = {
  bootstrap,
  destroy,
  register,
  config,
  controllers,
  contentTypes,
  middlewares,
  policies,
  routes,
  services
};
module.exports = index;
