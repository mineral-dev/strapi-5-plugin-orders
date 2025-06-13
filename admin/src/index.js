import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';
import pluginPermissions from './permissions';
import { PLUGIN_ID } from './pluginId';

export default {
  register(app) {
    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: 'Orders',
      },
      Component: async () => {
        const { App } = await import('./pages/App');

        return App;
      },
      permissions: pluginPermissions.view,
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  async registerTrads({ locales }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);

          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
