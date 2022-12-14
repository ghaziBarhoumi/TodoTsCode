import { model, Schema } from "mongoose";
import {ITodo} from '../types/todos'

const todoSchema : Schema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : Boolean,
        required : true
    },
},
{
    timestamps : true
})

export default model<ITodo>('Todo', todoSchema)