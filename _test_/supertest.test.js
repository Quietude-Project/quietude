// const { object } = require('prop-types');

const request = require('supertest');
const express = require("express");
const { internalIP } = require('webpack-dev-server');
const app = express();

const server = 'http://localhost:8080';

describe('Route integration', () =>{
  describe('/', () => {
    describe('GET', () => {
      it('responde with 200 ok', () =>{
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      })
    })
  })
  describe('/dashboard', () => {
    describe('GET', () => {
      it('responde with 200 ok', () =>{
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      })
    })
  })
  describe('/login', () => {
    describe('GET', () => {
      it('responde with 200 ok', () =>{
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      })
    })
    describe('PUT', () => {
      it('responds with 200 status and application/json content type', () => {
         request(server)
          .put('/signup')
          .expect('Content-Type', /application\/json/)
          .expect(200);
              });
    })
  })
  describe('/signup', () => {
    describe('GET', () => {
      it('responde with 200 ok', () =>{
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      })
    })
    describe('PUT', () => {
      it('responds with 200 status and application/json content type', () => {
         request(server)
          .put('/signup')
          .expect('Content-Type', /application\/json/)
          .expect(200);
              });
    })
  })
  describe('/location', () => {
    describe('GET', () => {
      it('responde with 200 ok', () =>{
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      })
    })
  })
  describe('/users', () => {
    describe('GET', () => {
      it('responde with 200 ok', () =>{
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      })
    })
    describe('POST', () =>{
      it('responds with 200 status and application/json content type', () => {
        request(server)
         .put('/signup')
         .expect('Content-Type', /application\/json/)
         .expect(200);
             });
    })
  })
  describe('/comments', () => {
    describe('GET', () => {
      it('responde with 200 ok', () =>{
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      })
    })
    describe('POST', () =>{
      it('responds with 200 status and application/json content type', () => {
        request(server)
         .put('/signup')
         .expect('Content-Type', /application\/json/)
         .expect(200);
             });
    })
  })
  describe('/location', () => {
    describe('GET', () => {
      it('responde with 200 ok', () =>{
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      })
    })
    describe('POST', () =>{
      it('responds with 200 status and application/json content type', () => {
        request(server)
         .put('/signup')
         .expect('Content-Type', /application\/json/)
         .expect(200);
             });
    })
  })

  //test inspect body of signup

  const user = {
    username: 'Roberto',
    password: ''
  };
  it('users from signup contain username and password', () => {
    request(server)
    .get('/api/users/register')
    .send(user)
    .expect(response => {
      expect(200);
        expect(response.body).toEqual(user);
    });
})
})





// /**
//  * Read the docs! https://www.npmjs.com/package/supertest
//  */
// describe('Route integration', () => {
//   describe('/', () => {
//     describe('GET', () => {
//       // Note that we return the evaluation of `request` here! It evaluates to
//       // a promise, so Jest knows not to say this test passes until that
//       // promise resolves. See https://jestjs.io/docs/en/asynchronous
//       it('responds with 200 status and text/html content type', () => {
//         return request(server)
//           .get('/')
//           .expect('Content-Type', /text\/html/)
//           .expect(200);
//       });
//     });
//   });

//   describe('/markets', () => {
//     describe('GET', () => {
//       it('responds with 200 status and application/json content type', () => request(server)
//         .get('/markets')
//         .expect('Content-Type', /application\/json/)
//         .expect(200));
//     });

//     // For this test, you'll need to inspect
//     // the body of the response and
//     // ensure it contains the markets list. Check the markets.dev.json file
//     // in the dev database to get an idea of what shape you're expecting.


//     const dbJson = {
//       'location': 'Mumbai',
//       'cards' : 9
//     };
//     it('markets from "DB" json are in body of response', () => {
//       // return expect(fetchData()).resolves.toBe('object');
//       request(server)
//         .get('/markets')
//         .send(dbJson)
//         .expect(response => {
//           //expect(response.status).toBe(200);
//           expect(200);
//           expect(response.body).toEqual(dbJson);
//         // done();
//         });
//     });


//     describe('PUT', () => {
//       it('responds with 200 status and application/json content type', () => {
//         request(server)
//           .put('/markets')
//           .expect('Content-Type', /application\/json/)
//           .expect(200);
//       });

//       xit('responds with the updated market list', () => {

//       });

//       it('responds with the updated market list', () => {
//         const res = [{
//           location: 'Palestine',
//           cards: 25,
//         }];
//         return request(server)
//           .put('/markets')
//           .send(res)
//           .expect(response => {
//             expect(200);
//             return expect(response.body).toEqual(expect.arrayContaining(res));
//           });
//       });

//       xit('responds to invalid request with 400 status and error message in body', () => {
//       });
//     });
//   });
// });