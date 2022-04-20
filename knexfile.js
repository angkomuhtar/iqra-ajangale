module.exports = {
  production: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "iqra-sql",
      database: "iqra",
    },
  },

  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "",
      database: "iqra-next",
    },
  },
};
