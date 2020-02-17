# pokegraphql-test

### A simple test using GraphQL with Apollo Server.
#### Data obtained from [https://pokeapi.co]

###### Install Apollo Server and Apollo Datasource Rest dependencies.

```
npm install apollo-server && npm install apollo-datasource-rest
```

###### To initialize the server

```
cd server && node server.js
```

Next, go to localhost:4000 on your browser.

###### An example query

Copy this piece of code on the left editor.

```
query GetPokemonCards($offset: Int, $limit: Int) {
      getPokemonCards(offset: $offset, limit: $limit) {
        name
        height
        weight
        types {
          type {
            name
          }
        }
        abilities {
          is_hidden
          ability {
            name
          }
        }
        stats {
          base_stat
          stat {
            name
          }
        }
      }
    }
```
Finaly, add the next piece to the "Variables section" on the bottom of editor and click "Play" or "Ctrl + Enter". You will obtain the response.
```
{
  offset: 0,
  limit: 20
}
```