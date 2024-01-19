import mongoose,{Schema} from 'mongoose';
const pollSchema=new Schema({
    pollTitle:{
        type:String,
        required:true
    },
    options:[
        {
            type: String,
            required: true,
          }
    ]
},{
    timestamps:true
})

export default mongoose.model('Poll',pollSchema);