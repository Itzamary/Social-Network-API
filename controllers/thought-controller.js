const {User, Thought} = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        console.log(req, 'getAllThoughtsReq');
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtData => {
            console.log(dbThoughtData, 'dbthoughtData')
            if (!dbThoughtData) {
                res.status(404).json({message: 'No thought found with this id'});
                return;
            }
            return res.json(dbThoughtData)
        })
        .catch(err => {
            console.log(err, 'error');
            res.status(400).json(err);
        });
    },
    getThoughtById({params}, res ) {
        Thought.findOne({_id: params.thoughtId})
        .populate({
            path: 'reactions',
            select: ('-__v')
        })
        .select('-__v')
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({message: 'No thought found with this id'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err, 'error2');
            res.status(400).json(err);
        });
    },
    addThought({ params, body}, res) {
        console.log(params, 'addthoughtparams')
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: params.userId},
                { $push: {thoughts: _id}},
                {new: true}
            );
        })
        .then(dbUserData => {
            if (!dbUserData){
                res.status(404).json({message: "No user found with this id!"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err, 'errorAddingComment');
            return res.json(err);
        })
    },
    updateThought({params, body}, res) {
        console.log(params, 'updateThoughtParams');
        console.log(body, 'updatethoughtBody');
        Thought.findOneAndUpdate({_id: params.thoughtId}, body, {new: true})
        .then(updatedThought => {
            console.log(updatedThought, 'updatedThought');
            if(!updatedThought) {
                return res.status(404).json({message: "no thought with this id!"});
            }
            res.json(updatedThought);
        })
        .catch(err => {
            console.log(err, "errorUpdatingThought");
            res.status(400).json(err);
        })
    },
    removeThought({params}, res){
        Thought.findOneAndDelete({_id: params.thoughtId})
        .then(deletedThought => {
            console.log(deletedThought, 'deletedThought');
            if(!deletedThought) {
                return res.status(404).json({message: "no thought with this id!"});
            }
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$pull: {thoughts: params.commentId}},
                {new: true}
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: "No user found with this id!"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err, 'errorDeletingComment');
            return res.json(err);
        })
    }
};

module.exports = thoughtController;