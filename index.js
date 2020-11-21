(async () => {
  const { readFile, writeFile } = require('fs').promises
  const pdfmake = require('@alheimsins/pdf-make')
  const generateDocument = require('./lib/generate-document')
  const definition = require('./definitions/varsel')
  const data = require('./data/varsel.json')
  const template = await readFile('templates/varsel.md', 'utf-8')
  const document = generateDocument({
    definition,
    template,
    data
  })
  const buffer = await pdfmake(document)
  await writeFile('example/test.pdf', buffer)
})()
