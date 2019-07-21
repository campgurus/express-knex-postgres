const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

const fixtures = require('./fixtures');

describe('CRUD Stickers', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        return knex.seed.run();
      }).then(() => done());
  });

  it('Lists all Records', (done) => {
    request(app)
      .get('/api/v1/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(fixtures.posts);
        done();
      });
  });

  // it('Show one record by id', (done) => {
  //   request(app)
  //     .get('/api/v1/posts/1')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).to.be.a('object');
  //       expect(response.body).to.deep.equal(fixtures.posts[0]);
  //       done();
  //     });
  // });

  // it('Show one record by id', (done) => {
  //   request(app)
  //     .get('/api/v1/posts/5')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).to.be.a('object');
  //       expect(response.body).to.deep.equal(fixtures.posts[4]);
  //       done();
  //     });
  // });

  // it('Creates a record', (done) => {
  //   request(app)
  //     .post('/api/v1/posts')
  //     .send(fixtures.post)
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).to.be.a('object');
  //       fixtures.post.id = response.body.id;
  //       expect(response.body).to.deep.equal(fixtures.post);
  //       done();
  //     });
  // });

  // it('Updates a record', (done) => {
  //   fixtures.post.rating = 5;
  //   request(app)
  //     .put('/api/v1/posts/10')
  //     .send(fixtures.post)
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).to.be.a('object');
  //       expect(response.body).to.deep.equal(fixtures.post);
  //       done();
  //     });
  // });

  // it('Deletes a record', (done) => {
  //   request(app)
  //     .delete('/api/v1/posts/10')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).to.be.a('object');
  //       expect(response.body).to.deep.equal({
  //         deleted: true
  //       });
  //       done();
  //     });
  // });
});