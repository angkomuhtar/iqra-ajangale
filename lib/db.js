var knex = require("knex")({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  //   client: process.env.DB_CLIENT || "mysql",
  //   connection: {
  //     host: process.env.DB_HOST || "us-cdbr-east-05.cleardb.net",
  //     port: 3306,
  //     user: process.env.DB_USERNAME || "ba80cda7d248ed",
  //     password: process.env.DB_PASSWORD || "41b108c9",
  //     database: process.env.DB_NAME || "heroku_d5759c96f214167",
  //   },
});

export default knex;
