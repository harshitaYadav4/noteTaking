import mongoose from "mongoose";

const notSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
        trim : true
    },
    content : {
        type: String,
        require: true
    }
},{
    timestamps : true
})

const Note = mongoose.model("Note", notSchema);

export default Note;