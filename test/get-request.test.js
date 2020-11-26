const { app, server, db } = require('../app');
const request = require('supertest');
// const database = require("./src/database");
// let db = await database.setup();

// beforeAll(async () => {
//     process.env.NODE_ENV = 'test';
//     await server;
// })

beforeAll(() => {
    console.log('--------------> Before All');
})


beforeEach(() => {
    console.log('--------------> Before Each');
})


afterAll(() => {
    console.log('--------------> After All');
})


afterEach(() => {
    console.log('--------------> After Each');
})


// const seedDb = db => {
//     //db.run('CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)');
//     //db.run('DELETE FROM persons');
//     db.run('DELETE FROM rest_emp where id = 3');
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

        //seedDb(db);

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
        // seedDb(db);
        const toAdd = { "name": "Super Test", "email": "user@test.ca", "phone": "243234345676", "address": "43 Street SW" }

        return request(app).post('/api/emp/').send(toAdd).then(
            (got) => {
                expect(got.status).toBe(200);
                expect(got.body).toEqual({ "result": "Employee added successfully!" });
            }
        )
    }, 1)
});

// afterAll(async (done) => {
// })