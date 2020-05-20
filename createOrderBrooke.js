const { Customer, Order, Product, client } = require('./store');

async function run() {
  try {
    // authenticate

    const customer = await Customer.findOne({ where: { name: 'Brooke' } });
    // find guitar

    // create order

    // add product to order

  } catch (err) {
    console.log('Error: ' + err);
  } finally {
    // close connection

    console.log('Orders for Brooke created successfully');
  }
}

run();
