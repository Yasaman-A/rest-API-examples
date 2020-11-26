const { app, server } = require('../app');
const request = require('supertest');
//const db = new sqlite3.Database(':memory:');
// const database = require("./src/database");
// let db = await database.setup();

beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    await server;
})

// const seedDb = db => {
//     db.run('CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)');
//     db.run('DELETE FROM persons');
// }

describe('Simple samples', () => {
    test("It adds two numbers", () => {
        expect(1 + 1).toBe(2);
    });

    test("It checks a boolean value", () => {
        expect(true).toBeTruthy();
    });
});


describe('Employee endpoint', () => {
    test("should return get result when employee exist", () => {
        // db.serialize(async () => {
        // seedDb(db);
        // const got = await request(app).get('/api/emp');

        const want = [
            { id: 1, name: "Joe", email: "joedoe@test.ca", phone: "243234345676", address: "43 Street SW" }
        ]
        return request(app).get('/api/emp/1').then(
            (got) => {
                expect(got.status).toBe(200);
                expect(got.body).toEqual(want);
            }
        )
    })

    test("should create a new employee on valid post requests", () => {
        // db.serialize(async () => {
        // seedDb(db);
        // const got = await request(app).get('/api/emp');

        const toAdd = { "name": "SUPERTEST_USER", "email": "joedoe@test.ca", "phone": "243234345676", "address": "43 Street SW" }

        return request(app).post('/api/emp/').send(toAdd).then(
            (got) => {
                expect(got.status).toBe(201);
                //expect(got.body).toEqual('Employee added successfully!');
            }
        )
    })
});

// afterAll(async (done) => {
//     // console.log("====================>1");
//     // let srv = await server;
//     // console.log("====================>2");
//     // let close = await srv.close(done);
//     // console.log("====================>3");
//     // done();
//     // console.log("====================>4");
//     // app.delete(done);
//     // console.log("====================>5");
//     // app.delete(done);
//     // console.log("====================>6");
//     //await (await server).close(done);

// })