module.exports = {
  name: 'standalone-app',
  exposes: {
    './Routes': 'apps/standalone-app/src/app/remote-entry/entry.routes.ts',
  },
};
