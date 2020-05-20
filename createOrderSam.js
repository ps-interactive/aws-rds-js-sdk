const { Customer, Order, Product, client } = require('./store');

async function run() {
  try {
    // authenticate

    const customer = await Customer.findOne({ where: { name: 'Sam' } });
    const book = await Product.findOne({ where: { name: 'book' } });
    const computer = await Product.findOne({ where: { name: 'computer' } });

    let order = await Order.create({
      customerId: customer.id,
      status: 'CREATED',
    });

    // add products to order

  } catch (err) {
    console.log('Error: ' + err);
  } finally {
    // close connection

    console.log('Orders for Sam created successfully');
  }
}

run();
