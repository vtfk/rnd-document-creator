const Handlebars = require('handlebars')
const htmlToPdfMake = require('html-to-pdfmake')
const marked = require('marked')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { window } = new JSDOM('')

/**
 * Generates document from defintion, template and data
 * @param {object} elements
 * @param {Function} elements.definition Function for merging data and pdfMake document definition
 * @param {string} elements.template String of handlebars template
 * @param {object} elements.data Dataobject
 * @returns {object} Documentdefinition ready for pdfMake
 */

function buildDocument (elements) {
  const { definition, template, data } = elements
  const templateGenerator = Handlebars.compile(template)
  const markdown = templateGenerator(data)
  const html = marked(markdown)
  const content = htmlToPdfMake(html, { window: window })
  const document = definition({ ...data, content })
  return document
}

module.exports = buildDocument
