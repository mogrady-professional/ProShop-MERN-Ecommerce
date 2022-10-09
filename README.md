# ProShop-MERN-Ecommerce

# Table of Contents

- [ProShop-MERN-Ecommerce](#proshop-mern-ecommerce)
- [Table of Contents](#table-of-contents)
  - [Packages](#packages)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Instructions](#instructions)
- [Converting commonjs to esm](#converting-commonjs-to-esm)

---

- [React Bootstrap](https://react-bootstrap.github.io/)
- [Bootswatch](https://bootswatch.com/)
- [font-awesome - v6.2](https://fontawesome.com/)
- [react-router-dom v6.4](https://reactrouter.com/web/guides/quick-start)
-
- [Express] (https://expressjs.com/)
- [Concurrently] (https://www.npmjs.com/package/concurrently)
- [Nodemon] (https://www.npmjs.com/package/nodemon)
- [dotenv] (https://www.npmjs.com/package/dotenv)

## Packages

## Frontend

- `npm i react-bootstrap bootstrap`
- `npm i react-router-dom`
- `npm i react-router-bootstrap`

## Backend

- `npm i express` backend server
- `npm i axios` http libary for making http requests to backend, it's easier and more powerful(could also use fetch)
- `npm i -D nodemon concurrently` run both backend and frontend at the same time - install as dev dependency
- `npm i dotenv` to use environment variables

# Instructions

- `npm run client` to run frontend
- `npm run server` to run backend
- `npm run dev` to run both frontend and backend using concurrently

# Converting commonjs to esm

```js
// package.json
{
  "type": "module"
}
```

- [Node.js v18.10.0 documentation](https://nodejs.org/api/packages.html#type)
