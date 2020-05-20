const { Sequelize, DataTypes } = require('sequelize');

const database = '';
const user = '';
const password = '';
const host = '';

const pgClient = new Sequelize(database, user, password, {
  host: host,
  dialect: 'postgres',
  logging: false,
});

const Customer = pgClient.define('customers', {
  name: DataTypes.STRING,
});

const Order = pgClient.define('orders', {
  status: DataTypes.STRING,
});

Order.Customer = Order.belongsTo(Customer);

const OrderProduct = pgClient.define('order_products', {
  price: DataTypes.INTEGER,
});

const Product = pgClient.define('products', {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

Order.belongsToMany(Product, { through: OrderProduct });

module.exports = {
  Customer,
  Order,
  Product,
  client: pgClient,
};
