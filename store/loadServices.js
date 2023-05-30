const files = require.context('./services', false, /\.js$/);
const models = {};
files.keys().forEach((key) => {
  const filename = key.replace(/(\.\/|\.js)/g, '');
  models[filename] = files(key).default;
});
export default models;
