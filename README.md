# rnd-document-creator

Research repo for document-creator

## Hva?

Kunne generere pdf-dokumenter på bakgrunn av maler og data

## Hvordan?

Kombinerer en dokumentdefinisjon på pdfMake-format, en mal basert på handlebars og data

## Hvorfor?

For enkelt å kunne lage nye maler for dokumenter som må distribueres eller arkiveres som pdf.

- definition er rammen som sier hvordan dokumentet skal se ut, logo, fonter, marger, topp og bunn osv
- template er handlebars som beskriver hvordan innholdet skal se ut
- template har front-matter for metadata som hvilken definitions som skal brukes osv
- data er data som skal ende opp i ferdig formatert form i en pdf

## Teknisk

Prøvefunksjonen trenger input som er template og data.
- henvisning til definition må ligge i template
- definition er en funksjon som tar data som input. Data må inneholde felter for definisjonen og content som er det øvrige innholdet
- template er en handlebars-string, denne vil kompileres, fylles med data og så kjøres gjennom html-to-pdfmake for å lage content som sendes videre til definisjonen

# License

[MIT](LICENSE)
