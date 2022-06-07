require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3308,
  define: {
    timestamps: true,
    underscored: true,
  },
  dialectOptions: {},
  // eslint-disable-next-line no-console
  logging: console.log,
};
