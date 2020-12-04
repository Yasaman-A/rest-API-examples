const { app, server, db } = require('../app');
const request = require('supertest');

let testdb;


beforeAll(async () => {
    await server;
    testdb = await db;
    seedDb();
    console.log('--------------> Before All --------------');
});

beforeEach(() => {
    console.log('--------------> Before Each --------------');
});

const seedDb = () => {
    testdb.query("CREATE TABLE IF NOT EXISTS rest_emp (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255) not null, phone varchar(12), email varchar(255) not null, address varchar(255)not null)");
    testdb.query("insert into rest_emp(name, phone, email, address) values ('DemoDemo', '1111111111', 'demo.user@test.com', '100 Street')");
}


describe('Employee endpoint', () => {
    test("should return get result when employee exist", () => {
        const want = [
            { id: 66, name: "Super Test", email: "user@test.ca", phone: "243234345676", address: "43 Street SW" }
        ]
        return request(app).get('/api/emp/66').then(
            (actualValue) => {
                expect(actualValue.status).toBe(200);
                expect(actualValue.body).toEqual(want);
            }
        )
    });

    test("should return empty result when employee does not exist", () => {
        const want = []
        return request(app).get('/api/emp/190').then(
            (got) => {
                expect(got.status).toBe(200);
                expect(got.body).toEqual(want);
            }
        )
    })
});

afterEach(() => {
    console.log('--------------> After Each --------------');
});


afterAll(async (done) => {
    await testdb.end();
    let srv = await server;
    await srv.close(done);
    app.delete(done);
    done();
})
