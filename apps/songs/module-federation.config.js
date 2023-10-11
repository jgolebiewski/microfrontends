module.exports = {
  name: 'songs',
  exposes: {
    './Routes': 'apps/songs/src/app/remote-entry/entry.routes.ts',
  },
};
