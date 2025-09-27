// getting-started.js
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  name: String,
  orderDetails: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "order",
    },
  ],
});
const customer = mongoose.model("customer", customerSchema);
const order = mongoose.model("order", orderSchema);

const addcustomer = async () => {
  let cust1 = new customer({
    name: "rahul kumar",
  });
  let order1 = await order.findOne({ item: "samosa" });
  let order2 = await order.findOne({ item: "maggie" });

  cust1.orderDetails.push(order1);
  cust1.orderDetails.push(order2);

  let result = await cust1.save();
  console.log(result);
};
addcustomer();

// const addOrders = async () => {
//   let result = await order.insertMany([
//     {
//       item: "samosa",
//       price: 12,
//     },
//     {
//       item: "maggie",
//       price: 10,
//     },

//     {
//       item: "chocolate",
//       price: 85,
//     },
//   ]);
//   console.log(result);
// };
// addOrders();
