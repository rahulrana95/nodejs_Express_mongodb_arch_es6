const server = require('./server');
import './database';
const configConstants = require('./constants/config');

server.listen(configConstants.PORT, () => {
    console.log(`Server started at PORT:${configConstants.PORT}`)
})
