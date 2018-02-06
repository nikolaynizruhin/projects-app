const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const should = chai.should();
const Project = require('../models/project')

chai.use(chaiHttp)

describe('Projects', () => {
  beforeEach((done) => {
    Project.sync({force: true}).then(() => {
      done()
    });
  });

  describe('/GET projects', () => {
    it('it should GET all the projects', (done) => {
      Project.create({
        name: 'Project A'
      }).then(project => {
        chai.request(app)
          .get('/api/projects')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body[0].should.have.property('name').eql('Project A');
            res.body.length.should.be.eql(1);
            done();
        });
      });
    });
  });

  describe('/GET project', () => {
    it('it should GET a project', (done) => {
      Project.create({
        name: 'Project A'
      }).then(project => {
        chai.request(app)
          .get('/api/projects/' + project.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name').eql('Project A');
            done();
        });
      });
    });
  });

  describe('/POST project', () => {
    it('it should POST a project', (done) => {
      let project = { name: 'Project A' }

      chai.request(app)
        .post('/api/projects')
        .send(project)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql('Project A');
          done();
      });
    });
  });

  describe('/PUT project', () => {
    it('it should PUT a project', (done) => {
      Project.create({
        name: 'Project A'
      }).then(project => {
        chai.request(app)
          .put('/api/projects/' + project.id)
          .send({ name: 'Updated' })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name').eql('Updated');
            done();
        });
      });
    });
  });

  describe('/DELETE project', () => {
    it('it should DELETE a project', (done) => {
      Project.create({
        name: 'Project A'
      }).then(project => {
        chai.request(app)
          .delete('/api/projects/' + project.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('success');
            done();
        });
      });
    });
  });
});