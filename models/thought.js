const {Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            require: true
        },
        reactions: {}
    }
);

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});