const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../../.env');
const result = dotenv.config({ path: envPath });
console.log(result);