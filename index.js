// getting-started.js
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const user = mongoose.model("user", userSchema);
// const Employe = mongoose.model("Employe", userSchema);

const user2 = new user({
  name: "sehrish",
  email: "sehrish12@gmail.com",
  age: 21,
});

user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
