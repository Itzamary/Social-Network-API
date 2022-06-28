const router = require('express').Router();
const {getAllUsers, getUserById, createUser, addFriend, updateUser, deleteUser, removeFriend} = require('../../controllers/user-controller');

// set up GET and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);


// set up GET ONE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)


module.exports = router;