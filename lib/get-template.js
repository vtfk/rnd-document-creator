const { readFile } = require('fs').promises
const defaultLanguage = 'no_nb'

async function getTemplate (id, language = defaultLanguage) {
  const template = `templates/${id}-${language}.md`
  const fallback = `templates/${id}-${defaultLanguage}.md`
  try {
    return await readFile(template, 'utf-8')
  } catch (error) {
    console.warn(`Could not find ${template}. Will try fallback`)
    return await readFile(fallback, 'utf-8')
  }
}

module.exports = getTemplate
