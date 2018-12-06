let m = require('../helpers/mongo');

module.exports = (callback) => {

    m.getAll((err, documents) => {
        if (err) {
            return callback(err);
        }
        return callback(null, JSON.stringify(documents));
    });
     
};
