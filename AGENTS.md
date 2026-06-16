# VegArchive — Istruzioni per l'AI

## Prompt master (usalo ogni volta che l'utente invia un link YouTube)

Analizza la seguente trascrizione di un video YouTube di cucina vegetale.
Obiettivo: Trasformala in una ricetta strutturata e leggibile in Markdown.
Regole:
- Non inventare ingredienti o quantità non menzionate.
- Se una quantità non è specificata, indica "q.b.".
- Correggi eventuali errori della trascrizione automatica.
- Elimina ripetizioni, saluti, sponsor e parti non rilevanti.
- Mantieni il significato originale della ricetta.
- Se il video contiene suggerimenti utili, inseriscili nella sezione "Note".
- Se il video contiene più ricette, crea sezioni separate all'interno dello stesso file (`---` come separatore), ciascuna con ingredienti, procedimento, note, tempi e porzioni propri.
- Genera il file in `src/content/recipes/` seguendo il formato delle ricette esistenti.

## Tag ammessi

Usare **solo** questi tag, uno per categoria:

Categoria gusto (sempre presente, uno solo):
- `dolce`
- `salato`

Categoria strumento (opzionale, multi):
- `forno`
- `microonde`
- `mixer`

Quindi una ricetta ha sempre 1 tag (gusto), più eventuali tag strumento.
Il tag `forno` si usa solo per ricette che vanno effettivamente in forno.
Le ricette senza forno (padella, cottura Piano cottura, ecc.) non hanno tag di cottura.
È possibile avere più tag strumento insieme (es. `forno` + `mixer`).
Niente `vegetale`, `vegan` e `senza forno`.

## Struttura file

I file ricetta vanno in `src/content/recipes/` come `.md` con frontmatter YAML.
Il campo `transcript` nel frontmatter contiene la trascrizione pulita (non visibile in pagina).
I campi `prepTime`, `cookTime`, `totalTime`, `servings` vanno sempre compilati se possibile.

## Strumenti

Se la ricetta richiede strumenti specifici oltre all'attrezzatura base (coltello, tagliere, pentole, padelle, ciotole), aggiungi una sezione `## Strumenti` subito dopo `## Ingredienti`, elencando ogni strumento con un trattino.
Usa il nome esatto dello strumento menzionato nel video (es. `mixer`, `mandolina`, `setaccio`).
Per le raccolte di più ricette (`---`), aggiungi `### Strumenti` sotto ogni sottoricetta.

## Trascrizione

La trascrizione va recuperata dal link YouTube usando `https://youtube-transcript.ai/transcript/{VIDEO_ID}.txt`.
Va ripulita (no triple ripetizioni, no `[Musica]`, no saluti, no sponsor) e salvata nel campo `transcript` del frontmatter.
