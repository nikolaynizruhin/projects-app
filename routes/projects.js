const express = require('express')
const router = express.Router()
const asyncMiddleware = require('../utils/asyncMiddleware');
const Project = require('../models/project')

/* GET projects listing. */
router.get('/', asyncMiddleware(async (req, res, next) => {
  const projects = await Project.findAll()

  res.json(projects)
}))

/* GET project view. */
router.get('/:id', asyncMiddleware(async (req, res, next) => {
  const project = await Project.findById(req.params.id)

  res.json(project)
}))

/* POST project add. */
router.post('/', asyncMiddleware(async (req, res, next) => {
  const project = await Project.create({ name: req.body.name })

  res.json(project)
}))

/* PUT project edit. */
router.put('/:id', asyncMiddleware(async (req, res, next) => {
  let project = await Project.findById(req.params.id)
  project = await project.update({ name: req.body.name })

  res.json(project)
}))

/* DELETE project delete. */
router.delete('/:id', asyncMiddleware(async (req, res, next) => {
  let project = await Project.findById(req.params.id)
  await project.destroy()

  res.json({ message: "success" })
}))

module.exports = router;