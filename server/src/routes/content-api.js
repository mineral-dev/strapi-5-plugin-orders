export default [
  {
    method: 'GET',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/orders',
    // name of the controller file & the method.
    handler: 'controller.getOrder',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/orders/:id',
    // name of the controller file & the method.
    handler: 'controller.getOrderById',
    config: {
      auth: false,
      policies: [],
    },
  }
];
