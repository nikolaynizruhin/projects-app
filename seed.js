const Project = require('./models/project');

Project.sync({force: true}).then(() => {
  Project.create({
    name: 'Project A'
  });

  Project.create({
    name: 'Project B'
  });

  Project.create({
    name: 'Project C'
  });
});