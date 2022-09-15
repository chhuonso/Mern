const mongoose = require('mongoose');

module.exports = (DB) => {

    mongoose.connect(`mongodb://localhost/${DB}`)
    .then(()=> console.log(`👏 👏 👏 Data connected to ${DB}`))
    .catch(err=> console.log(`🤬 🤬 🤬 There was an error cannot connect ${DB}`, err))
}
