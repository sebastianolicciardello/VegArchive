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

Categoria gusto:
- `dolce`
- `salato`

Categoria cottura:
- `forno`
- `senza forno`

Quindi una ricetta ha sempre 2 tag: uno tra `dolce`/`salato` e uno tra `forno`/`senza forno`.
Se una collezione di ricette include sia piatti al forno che senza, usare **entrambi** i tag `forno` e `senza forno`.
Niente `vegetale` e niente `vegan`.

## Struttura file

I file ricetta vanno in `src/content/recipes/` come `.md` con frontmatter YAML.
Il campo `transcript` nel frontmatter contiene la trascrizione pulita (non visibile in pagina).
I campi `prepTime`, `cookTime`, `totalTime`, `servings` vanno sempre compilati se possibile.

## Trascrizione

La trascrizione va recuperata dal link YouTube usando `https://youtube-transcript.ai/transcript/{VIDEO_ID}.txt`.
Va ripulita (no triple ripetizioni, no `[Musica]`, no saluti, no sponsor) e salvata nel campo `transcript` del frontmatter.
