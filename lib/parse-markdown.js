const MarkdownIt = require('markdown-it')
const mdfm = require('markdown-it-front-matter')

/**
 * Extracts metadata from frontmatter and returns an object with metadata and converted markdown
 * @param {string} markdown 
 * @returns {object} { html, metadata }
 */

function parseMarkdown (markdown) {
  let metadata = {}
  const md = new MarkdownIt().use(mdfm, meta => {
    metadata = JSON.parse(meta)
  })
  const html = md.render(markdown)
  return {
    metadata,
    html
  }
}

module.exports = parseMarkdown
