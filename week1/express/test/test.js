/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../src/server/server');

const should = chai.should();

chai.use(chaiHttp);

describe('Users component', () => {
    it('register user', (done) => {
        chai.request(server)
            .post('/v1/users/register')
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 's1d2v3@gmail.com',
                passwordHash: 'Doe123456',
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('user');

                done();
            });
    });
});

// 401 - Unauthorized
describe('Tasks component', () => {
    it('create task', (done) => {
        chai.request(server)
            .post('/v1/tasks/create')
            .send({
                assignee: '5f7a1d6c2a7f4e4b4c4a4a4a',
                title: 'Test task',
                description: 'Test task description',
                estimatedTime: 30,
                createdBy: 'Project manager',
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('task');

                done();
            });
    });
});
