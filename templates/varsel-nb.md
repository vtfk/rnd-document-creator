---
definition: brevmal
language: nb
address:
  name: {{ mottaker.fullName }}
  street: {{ mottaker.adresse }}
  city: {{ mottaker.poststed }}
info:
  sector: Opplæring og folkehelse
---

# Varselbrev for {{mottaker.fullName}}

Du mottar dette varselbrevet fordi du er i fare for å ikke kunne få karakter i **{{varsel.fag}}**

## Årsaker til varselet

{{#each varsel.aarsaker}}
 - {{this}}
{{/each}}

Mer informasjon finner du på [vtfk.no](https://vtfk.no)

![Photo by Jeremy Perkins https://unsplash.com/@jeremyperkins](templates/varsel-bilde.jpg "Bilde")