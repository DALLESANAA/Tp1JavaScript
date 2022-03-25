process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
  

