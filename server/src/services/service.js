const service = ({ strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
  async getOrders({ page = 0, q, status, is_po }) {
    let orders = {
      data: [],
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 0,
        total: 0
      }
    }

    const andConditions = [
      {
        order_status: { $containsi: status ?? "" }
      }
    ];

    if (is_po !== undefined && is_po !== null && is_po !== "" && is_po !== "all") {
      andConditions.push({
        is_po: is_po === true || is_po === "true" || is_po === 1 || is_po === "1"
      });
    }

    try {
      const [entries, count] = await strapi.db.query('api::order.order').findWithCount({
        where: {
          $or: [
            {
              order_id: { $containsi: q ?? "" }
            },
            {
              email: { $containsi: q ?? ""}
            }
          ],
          $and: andConditions
        },
        populate: { order_item: true },
        orderBy: { id: 'DESC' },
        limit: 10,
        offset: page,
      })
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
      }
    } catch (error) {
      console.log(error.message, 'get err orders')
    }

    return orders;
  },
  async getOrderById(id) {
    let order = null;

    try {
      order = await strapi.db.query('api::order.order').findOne({
        where: { documentId: id },
        populate: { order_item: true }
      });
    } catch (error) {
      console.log(error.message, 'get err order by id')
    }

    return order;
  }
});

export default service;
