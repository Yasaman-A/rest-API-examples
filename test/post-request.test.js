const { app, server, db } = require('../app');
const request = require('supertest');


beforeAll(async () => {
    await server;
    console.log('--------------> Before All --------------');
});



beforeEach(() => {
    console.log('--------------> Before Each2');
})

describe('Employee endpoint', () => {
    test("should create a new employee on valid post requests", () => {
        const toAdd = { "name": "Super Test", "email": "user@test.ca", "phone": "243234345676", "address": "43 Street SW" }

        return request(app).post('/api/employees/').send(toAdd).then(
            (got) => {
                expect(got.status).toBe(200);
                expect(got.body).toEqual({ "result": "Employee added successfully!" });
            }
        )
    })
});



afterEach(() => {
    console.log('--------------> After Each --------------');
});

afterAll(async (done) => {
    let srv = await server;
    await srv.close(done);
    app.delete(done);
    done();
})

