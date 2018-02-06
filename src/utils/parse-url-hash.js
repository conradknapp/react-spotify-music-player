export const parseUrlHash = hash =>
  hash
    .substr(1)
    .split('&')
    .reduce((result, item) => {
      var parts = item.split('=');
      result[parts[0]] = parts[1];
      return result;
    }, {});
