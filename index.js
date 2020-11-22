(async () => {
  const { writeFile } = require('fs').promises
  const pdfmake = require('@alheimsins/pdf-make')
  const getTemplate = require('./lib/get-template')
  const generateDocument = require('./lib/generate-document')
  const data = require('./data/varsel.json')
  const template = await getTemplate('varsel', data.metadata.spraak)
  const document = generateDocument({
    template,
    data
  })
  const buffer = await pdfmake(document)
  await writeFile('example/test.pdf', buffer)
})()
