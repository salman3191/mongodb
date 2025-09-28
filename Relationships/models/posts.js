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
  email: String,
});

const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});
const user = mongoose.model("user", userSchema);
const post = mongoose.model("post", postSchema);

const addData = async () => {
  let User = await user.findOne({ username: "rahul kumar" });

  let post2 = new post({
    content: "katil kara husn",
    likes: 200000890,
  });

  post2.user = User;

  await post2.save();
};
addData();
