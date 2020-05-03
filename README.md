Sample API Tests ![Node.js CI](https://github.com/freestyler164/sample-tests-api/workflows/Node.js%20CI/badge.svg?branch=master)
===================

Sample API Test project using postman newman. 

## Quick Start

*To run the tests:*

1. Install node v12.x or later. You can download it from [here](https://nodejs.org/en/download/)
 
2. Clone the git repo — `git clone https://github.com/freestyler164/sample-tests-api.git` or Download the [zip](https://github.com/freestyler164/sample-tests-api.git)

3. Install the dependencies ```npm install```

4. Run the test ```npm run test```

*To View or edit tests*

1. Install [Postman](https://www.postman.com/downloads/) desktop app.

2. Launch the postman app.

3. Click import and import the collection ```test/NAVPriceListTests.postman_collection.json``` 

4. You should be able to see the tests. 

*Schema generation*

The test uses tv4 for schema validation of the response. The schema is generated using [Jsonschema.net](https://jsonschema.net/home). The schema is added to the test as a pre-request script.
 
## Features

- Uses Postman and Newman
- Environment can be configured in```'enviroment/Production.postman_environment.json'```. This is passed to the tests through ```run-test.js```