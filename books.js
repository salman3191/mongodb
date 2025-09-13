// getting-started.js
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
});
const Book = mongoose.model("Book", bookSchema);

let book2 = new Book({
  title: "sufhusie sbihrfiuashefiu ksudfh iushfiuh uihfiushf",

  price: 399,
});
book2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
