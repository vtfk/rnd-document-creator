(async () => {
  const { writeFile } = require('fs').promises
  const pdfmake = require('@alheimsins/pdf-make')
  const generateDocument = require('./lib/generate-document')
  const definition = require('./definitions/varsel')
  const data = require('./data/varsel.json')
  const document = generateDocument({
    definition,
    template: {},
    data
  })
  const buffer = await pdfmake(document)
  await writeFile('test.pdf', buffer)
})()
