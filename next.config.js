/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_CLIENT: "mysql",
    DB_HOST: "localhost",
    DB_USERNAME: "root",
    DB_PASSWORD: "",
    DB_NAME: "iqra-next",
    JWT_SECRET: "secret",
  },
};

module.exports = nextConfig;
