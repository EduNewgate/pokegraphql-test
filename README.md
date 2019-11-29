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

###### A simple query

Finally, copy this piece of code on the left editor and clik "Play". You will obtain the response.

```
query {
  pokemon {
    name
  }
}
```