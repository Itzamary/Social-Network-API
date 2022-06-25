const router = require('express').Router();
const {getAllThoughts, getThoughtById, addThought, updateThought, removeThought} = require('../../controllers/thought-controller');


// /api/thoughts/<userId>
router
.route('/:userId')
.get(getAllThoughts)
.post(addThought)

// /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)

module.exports = router;