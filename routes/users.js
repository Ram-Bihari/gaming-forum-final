let mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/gamingforum1');
mongoose.connect('mongodb+srv://pratiknew:pratik@pratik.7m6lk.mongodb.net/gamingforumsid?retryWrites=true&w=majority')

let userSchema = mongoose.Schema(
  {
    gamename: {
      type: String,
      required: true 
    },
    review: {
      type: String,
      required: true
    }
  }
)

module.exports = mongoose.model('user', userSchema);
