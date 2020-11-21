const Handlebars = require('handlebars')
const htmlToPdfMake = require('html-to-pdfmake')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { window } = new JSDOM('')

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
  const content = htmlToPdfMake(html, { window: window })
  const document = definition({...data, content })
  return document
}

module.exports = buildDocument