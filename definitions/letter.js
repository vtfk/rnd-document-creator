module.exports = data => {
  const style = require('./style')
  const header = require('./header')

  const defintion = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [65, 120, 65, 0],
    info: {
      title: data.metadata.document.title,
      author: data.metadata.document.author,
      subject: data.metadata.document.subject,
      keywords: data.metadata.document.keywords
    },
    header,
    content: [
      {
        table: {
          widths: ['*', 'auto'],
          body: [
            [
              [
                { text: `${data.mottaker.fullName}`, style: 'mottaker' },
                { text: `${data.mottaker.adresse}`, style: 'mottaker' },
                { text: `${data.mottaker.poststed}`, style: 'mottaker' }
              ],
              [
                { text: ' ', style: 'referanser' },
                { text: ' ', style: 'referanser' },
                { text: 'Opplæring og folkehelse', style: 'referanser', bold: true },
                {
                  table: {
                    widths: ['auto', 'auto'],
                    body: [
                      [
                        [
                          { text: 'Vår dato:', style: 'referanser' },
                          { text: 'Deres dato:', style: 'referanser' },
                          { text: 'Vår referanse:', style: 'referanser' },
                          { text: 'Deres referanse:', style: 'referanser' },
                          { text: 'Vår saksbehandler:', style: 'referanser' },
                          { text: 'Unntatt offentlighet iht.:', style: 'referanser' }
                        ],
                        [
                          { text: '11.07.2020', style: 'referanser' },
                          { text: '10.07.2020', style: 'referanser' },
                          { text: '20/10098', style: 'referanser' },
                          { text: '20/98321', style: 'referanser' },
                          { text: 'Ola Nordmann', style: 'referanser' },
                          { text: 'Offl. § 13 jf. fvl. § 13 (1) nr. 1', style: 'referanser' }
                        ]
                      ]
                    ]
                  },
                  layout: {
                    defaultBorder: false,
                    paddingRight: () => 0,
                    paddingBottom: () => 0
                  }
                }
              ]
            ]
          ]
        },
        layout: {
          defaultBorder: false,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
          height: () => 500
        }
      },
      data.content
    ],
    styles: {
      ...style,
      'html-h1': style.header,
      'html-h2': style.subHeader,
      'html-h3': style.subHeader,
      'html-h4': style.subHeader,
      'html-h5': style.subHeader,
      'html-h6': style.subHeader,
      'html-p': style.body,
      'html-strong': style.bold,
      'html-italic': style.italic,
      'html-a': style.url
    }
  }

  return defintion
}
