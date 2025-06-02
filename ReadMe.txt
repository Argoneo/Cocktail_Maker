Obiettivo: Costruire un sito web che permette agli utenti di ottenere una ricetta casuale
 di cocktail (con immagine, ingredienti e istruzioni) 
 o cercarne una in base a un ingrediente specifico (es. gin, rum, ecc.).

✅ Requisiti funzionali:
Homepage

Mostra un titolo, un’introduzione e due pulsanti:

“Get Random Cocktail”

“Search by Ingredient”

Rotta 1: /random

Fa una richiesta tramite Axios alla CocktailDB API per ottenere un cocktail casuale.

Mostra:

Nome del cocktail

Immagine

Lista ingredienti (con dosi)

Istruzioni per la preparazione

Rotta 2: /search?ingredient=gin

Prende un parametro di query ingredient.

Fa una richiesta alla CocktailDB per ottenere tutti i cocktail che contengono quell’ingrediente.

Mostra una lista con:

Nome del cocktail

Miniatura immagine

Link a una pagina di dettaglio (/cocktail/:id)

Rotta 3: /cocktail/:id

Usa l’id per richiamare i dettagli completi del cocktail dalla API.

Mostra tutte le info come nella rotta /random.

⚙️ Stack tecnico richiesto:
Express (per creare il server)

Axios (per le richieste HTTP alle API)

EJS o altro motore di template (per renderizzare le pagine HTML)

Bootstrap (opzionale, per un po' di stile veloce)

📚 CocktailDB Endpoints utili:
Cocktail casuale:
https://www.thecocktaildb.com/api/json/v1/1/random.php

Ricerca per ingrediente:
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin

Dettagli cocktail:
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

🎯 Cosa dimostrerai:
Integrazione con API pubblica reale

Uso di Axios lato server per fetch dei dati

Gestione delle rotte con Express

Presentazione dei dati in modo leggibile e utile

Dinamicità e interazione