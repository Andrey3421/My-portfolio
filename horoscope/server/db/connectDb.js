const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://29andreykorotkiy:0znfMPWFtXk8F7YK@cluster0.dzm4zvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

var connectDb = async () => {
    await client.connect();
    return client.db('horoscopes');
};
var closeDb = async () => {
    await client.close();
};


module.exports = {
    connectDb,
    closeDb,
};