const mongoose = require('mongoose');

const data = 'mongodb://127.0.0.1:27017/login'
mongoose.connect(data, {
  useNewUrlParser: true,useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))