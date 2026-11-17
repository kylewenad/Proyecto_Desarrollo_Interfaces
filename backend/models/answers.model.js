const mongoose = require ('mongoose');

const answerSchema = new.mongoose.Schema(
    {
        ticket: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"ticket",
            required:true
        },
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        message: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Answer = mongoose.model("answer",answerSchema);
module.exports = Answer;