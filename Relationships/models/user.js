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
const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});
const user = mongoose.model("user", userSchema);

const addusers = async () => {
  let user1 = new user({
    username: "salman",
    addresses: [
      {
        location: "sopre gur seer raiway colony BM 92",
        city: "srinager",
      },
    ],
  });

  user1.addresses.push({ location: "BM 92 BABA MUHALLA RAILYWAY COLONY" });

  let result = await user1.save();
  console.log(result);
};

addusers();
