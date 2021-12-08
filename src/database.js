const mongooese = require('mongoose');

const URI= 'mongodb://localhost/Proyecto';

mongooese.connect(URI)
.then(db => console.log("DB conectada")).catch(
    err => console.error(err)
)

module.exports = mongooese;