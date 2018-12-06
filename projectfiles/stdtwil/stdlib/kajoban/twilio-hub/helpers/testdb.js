module.exports = () => {

    let m = require('../helpers/mongo');
    let resp = m.getAll();
    return resp

}
