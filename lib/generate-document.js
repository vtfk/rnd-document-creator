/**
 * Generates document from defintion, template and data
 * @param {object} elements
 * @param {Function} elements.definition
 * @param {object} elements.template
 * @param {object} elements.data
 * @returns {object}
 */
function buildDocument (elements) {
  const { definition, template, data } = elements
  const document = definition(data)
  return document
}

module.exports = buildDocument