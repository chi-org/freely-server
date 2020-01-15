const {MongoClient} = require('mongodb');
const request = require('request');

const testUser = {
    username: "Testuser61",
    _id: "5e1bf4d15e7481e9e562497c"
}

describe('activities', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect("mongodb://localhost", {
            useNewUrlParser: true,
        });
        db = await connection.db("freely");
        request({
            method: "post",
            headers: {'content-type' : 'application/x-www-form-urlencoded'},
            url: "http://localhost:3030/API/auth/login",
            body: {
                username: "testuser10000",
                password: "4me2test"
            }
        })
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    it('should find a user', async () => {
        const users = db.collection('users');

        const username = testUser.username;

        const foundUser = await users.findOne({username: 'Testuser61'});
        expect(foundUser.username).toEqual(username);
    });

    it('show my students', async () => {
        let data = await request.get('http://localhost:3030/API/students/my')
        console.log(data)
    })

    //
    // it("should register a user", async () => {
    //     const users = db.collection('users');
    //     const user = "ThisIsATestUser" + Math.random();
    //     await request.post({
    //         'headers': {
    //             'Content-Type': 'application/json'
    //         },
    //         url: "http://localhost:3030/auth/register",
    //         body: JSON.stringify({
    //             username: user,
    //             password: user
    //         })})
    //     const newUser = await users.findOne({username: user});
    //     expect(newUser.username).toEqual(user);
    // })
});
