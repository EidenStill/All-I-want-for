# Aliwant
Aliwant is a "wish list" bookmarking system that allows customers to save desired products and receive automatic notifications when discounts or vouchers become available.


## Setup
Database: MySQL

1. Clone this repository.
2. Go into the directory using `cd All-I-want-for`.
3. Install the necessary libraries stated below.
4. Create an empty database in `MySQL`, the table named as `aliwant`.
5. Go into the directories for the client and server, `cd client`, and `cd server` respectively.
6. Run the app locally using `npm start` on both client and server side.
   > This runs the client at `http://localhost:3000`, and the server at `http://localhost:8000`.
8. Open the web app on your desired browser using the URL above.

## Dependencies

These are the necessary libraries that must be installed to run this application locally.

> Note: Please go to the corresponding directories to install the libraries


| Field       | Values                      | Required | Default     | Description                       |
| ----------- | --------------------------- | -------- | ----------- | --------------------------------- |
| PORT        | `number`                    |          | `4000`      | Port number                       |
| NODE_ENV    | `dev`, `test`, `production` |          |             | Running environment of the server |
| DB_USERNAME | `string`                    |          | `postgres`  | Database Username for Postgres    |
| DB_PASSWORD | `string`                    |          | ` `         | Password for Postgres             |
| DB_HOSTNAME | `string`                    |          | `localhost` | Hostname for Postgres             |
| DB_DATABASE | `string`                    | ✅       |             | Database name for Postgres        |
| DB_PORT     | `number`                    |          | `5432`      | Postgres running port             |

## License

[GNU General Public License v3.0](https://github.com/LaplaceXD/WakieWakie/blob/master/LICENSE)
