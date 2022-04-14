module.exports = {
  staging: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-05.cleardb.net",
      port: 3306,
      user: "ba80cda7d248ed",
      password: "41b108c9",
      database: "heroku_d5759c96f214167",
    },
  },

  development: {
    client: process.env.DB_CLIENT || "mysql",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: 3306,
      user: process.env.DB_USERNAME || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "iqra-next",
    },
  },
};
