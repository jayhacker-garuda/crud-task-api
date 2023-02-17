const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.set('strictQuery',false)

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')
    .then(() => console.log("DB Connected Successfully"))
    .catch(err => console.log(err));



module.exports = mongoose