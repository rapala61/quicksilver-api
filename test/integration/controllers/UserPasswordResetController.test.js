/**
 * RootController.test.js
 */
var request = require('supertest');
var should = require('should');

/**
 * Test invalid /user/password endpoint.
 */
describe('Requests to the root (/user/password) path with missing required body parameters.', function() {
  
  it('POST: Invalid password reset request with missing body parameters returns expected 422 - Unprocessable due to request validation error results.', function(done) {

    request(sails.hooks.http.app)
      .post('/api/v1/user/password')
      .send({
      })
      .expect(422)
      .expect("content-type", /json/)
      .end(function(err, res) {
        if (err) throw err;
        res.status.should.equal(422);
        res.body[0].should.have.property('error');
        done();
      });
  });
  
});

/**
 * Test /user/password endpoint.
 */
describe('Requests to the root (/user/password) path', function() {
  
  it('POST: Valid password request with only user_id returns expected results.', function(done) {

    request(sails.hooks.http.app)
      .post('/api/v1/user/password')
      .send({
        "user_id": "1234567"
      })
      .expect(200)
      .expect("content-type", /json/)
      .end(function(err, response) {
        if (err) {
          throw err;
        }
        response.status.should.equal(200)
        response.body.should.equal("OK")
        done();
      });
  });
  
  it('POST: Valid password request with only email returns expected results.', function(done) {

    request(sails.hooks.http.app)
      .post('/api/v1/user/password')
      .send({
        "email": "test@test.com"
      })
      .expect(200)
      .expect("content-type", /json/)
      .end(function(err, response) {
        if (err) {
          throw err;
        }
        response.status.should.equal(200)
        response.body.should.equal("OK")
        done();
      });
  });
  
  it('POST: Valid password request with only mobile returns expected results.', function(done) {

    request(sails.hooks.http.app)
      .post('/api/v1/user/password')
      .send({
        "mobile": "1234567890"
      })
      .expect(201)
      .expect("content-type", /json/)
      .end(function(err, response) {
        if (err) {
          throw err;
        }
        response.status.should.equal(200)
        response.body.should.equal("OK")
        done();
      });
  });
  
});