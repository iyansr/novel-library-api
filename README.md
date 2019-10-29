# 📚Novel Library API

A Collection Of Novels API Using NodeJS MySQL ExpressJS

<p align="center">
  <a href="https://nodejs.org/">
    <img title="Restful API" height='200' src="https://raw.githubusercontent.com/iyansr/novel-library-api/master/img.jpg">
  </a>
</p>
<p align="center">
  <a href="http://opensource.org/licenses/MIT">
    <img title="MIT license" src="http://img.shields.io/badge/license-MIT-brightgreen.svg">
  </a>
    <a href="#">
    <img alt="David" src="https://img.shields.io/david/dev/iyansr/novel-library-api">
  </a>
  <a href="#">
    <img title="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102">
  </a>
  <a href="https://github.com/iyansr?tab=followers">
    <img title="Followers" src="https://img.shields.io/github/followers/iyansr?style=social">
  </a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="#">
    <img title="Repo Size" src="https://img.shields.io/github/repo-size/iyansr/novel-library-api">
  </a>

</p>

## Table Of Contents

- [Novel Library Api](#novel-library-api)
  - [Table Of Content](#table-of-content)
  - [Build Setup](#build-setup)
  - [Stacks](#stacks)
  - [Dependencies](#dependencies)
  - [Aplication Structure](#aplication-Structure)
  - [API Docs](#api-docs)
    - [Novel](#novel)
    - [Genre](#genre)

## Build Setup

1. Clone repository
   `$ git clone https://github.com/iyansr/novel-library-api.git`

2. Install depedencies

```bash
# with npm
$ npm install

# or with yarn
$ yarn install
```

3. Setup your environment variable in `.env` files (if not exists, create your own).

```env
DB_HOST      = 'localhost'
DB_USER      = 'root'
DB_PASSWORD  = 'xxx'
DB_DATABASE  = 'dbname'
```

4. Start API server

```bash
$ npm run server
```

## Stacks

- NodeJS
- MySQL
- ExpressJS

## Dependencies

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests
- [morgan](https://www.npmjs.com/package/morgan) - a HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application
- [dotenv](https://www.npmjs.com/package/dotenv) - is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [momentjs](https://www.npmjs.com/package/moment) - To convert dateTime from javascript format to mysql format easily
- [mysql](https://www.npmjs.com/package/mysql) - NodeJs driver for MySQL
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
- [nodemon](https://www.npmjs.com/package/nodemon) - is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Aplication Structure

- `app.js` - Entry point of our aplication
- `src/Config` - This folder contain configuration files of our app, such as mysql connection
- `src/Models` - This folder containt files that define query of MysQL
- `src/Routes` - Route of our app going here
- `src/Helpers` - This folder contain file that help you simplify your code such as define the error handling
- `src/Controllers` - This folder contain configuration files that links Models to Route

---

## API Docs

### **Novel**

| Method | Endpoint      | Description      | Request Param    | Request Body                                                                                                                 | Request Query                                                    |
| ------ | ------------- | ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| GET    | /api/novel    | Get Novels       | -                | -                                                                                                                            | `title`:STRING `author`:STRING `genre`: INTEGER `status`:INTEGER |
| POST   | /api/novel    | Add New Novel    | -                | `title`:STRING (Required) `author`:STRING (Required) `image_url`:STRING `status`:STRING (Required) `genre`:STRING (Required) | -                                                                |
| PUT    | api/novel/:id | Edit Novel By ID | `id`: INT (UUID) | `title`:STRING (Required) `author`:STRING (Required) `image_url`:STRING `status`:STRING (Required) `genre`:STRING (Required) | -                                                                |
| DELETE | api/novel     | Delete Novel     | -                | `id`:INT                                                                                                                     | -                                                                |

### **Genre**

| Method | Endpoint   | Description    | Request Param | Request Body              | Request Query |
| ------ | ---------- | -------------- | ------------- | ------------------------- | ------------- |
| GET    | /api/genre | Get All Genres | -             | -                         | -             |
| POST   | /api/genre | Add New Genre  | -             | `genre`:STRING (Required) | -             |

---

Copyright © 2019 by I Putu Saputrayana (Iyan Saputra)
