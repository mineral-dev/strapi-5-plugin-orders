const bootstrap = async ({ strapi }) => {
  const actions = [
    {
      section: 'plugins',
      displayName: 'Show Order',
      uid: 'access',  // Action to access the plugin
      pluginName: 'strapi-5-plugin-orders',  // Plugin name
    },
  ];

  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};

export default bootstrap;
