# **_api-mobile-store_**

# **_END POINTS MOBILES _**

| HTTP     | ENDPOINT                              |                                                                    |
| -------- | ------------------------------------- | ------------------------------------------------------------------ |
| GET      | http://localhost:4001/api/mobiles     | Get all mobiles in DB                                              |
| GET      | http://localhost:4001/api/mobiles/:id | Get from DB mobile with the id choosen                             |
| POST     | http://localhost:4001/api/mobiles     | Create a new mobile in DB with the body data                       |
| PUT      | http://localhost:4001/api/mobiles/:id | Update the mobile in the DB with the id choosen with the body data |
| DELETE   | http://localhost:4001/api/mobiles/:id | Delete from DB mobile with the id choosen                          |
| * (404) | http://localhost:4001/bad-path        | Return a 404 Error message                                         |

# **_END POINTS MANUFACTURERS _**

| HTTP     | ENDPOINT                                    |                                                                          |
| -------- | ------------------------------------------- | ------------------------------------------------------------------------ |
| GET      | http://localhost:4001/api/manufacturers     | Get all manufacturers in DB                                                 |
| GET      | http://localhost:4001/api/manufacturers/:id | Get from DB manufacturer with the id choosen                             |
| POST     | http://localhost:4001/api/manufacturers     | Create a new manufacturer in DB with the body data                       |
| PUT      | http://localhost:4001/api/manufacturers/:id | Update the manufacturer in the DB with the id choosen with the body data |
| DELETE   | http://localhost:4001/api/manufacturers/:id | Delete from DB manufacturer with the id choosen                          |
| * (404) | http://localhost:4001/bad-path              | Return a 404 Error message                                               |
