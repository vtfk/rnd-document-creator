const Handlebars = require('handlebars')

/**
 * Generates document from defintion, template and data
 * @param {object} elements
 * @param {Function} elements.definition
 * @param {string} elements.template
 * @param {object} elements.data
 * @returns {object}
 */

function buildDocument (elements) {
  const { definition, template, data } = elements
  const templateGenerator = Handlebars.compile(template)
  const html = templateGenerator(data)
  console.log(html)
  const document = definition(data)
  return document
}

module.exports = buildDocument