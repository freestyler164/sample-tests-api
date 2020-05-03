const newman = require('newman')

newman.run({
    collection: require('./test/NAVPriceListTests.postman_collection.json'),
    environment: require('./environment/Production.postman_environment.json'),
    reporters: 'cli',
})