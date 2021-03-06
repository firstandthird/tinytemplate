/* eslint-env browser, node */
module.exports = function tinyTemplate(template, data, fallback) {
  return template.replace(/\$\{[^}]+\}/g, match =>
    match
      .slice(2, -1)
      .trim()
      .split('.')
      .reduce(
        (searchObject, key) => searchObject[key] || fallback || match,
        data
      )
  );
};
