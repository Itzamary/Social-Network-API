const {Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]

    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

// virtual that retrieves the length of the users friends array field on querry.
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


// create the User model using the schema
const User = model('User', UserSchema);

module.exports = User;

