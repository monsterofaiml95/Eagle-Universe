const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  dp: {
    type: String, // Assuming dp is a URL or a file path, adjust as needed
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});
userSchema.plugin(plm)
const User = mongoose.model('User', userSchema);


module.exports = User;
