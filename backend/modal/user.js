const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/origa')
.then(()=>console.log('connected to mongodb'))
.catch((e)=>console.log('Error to connect'));

const userSchema=new mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    noOfOrders:{
        type:Number,
        default:0
    }
})

const userModel=mongoose.model('user',userSchema);

async function createUser(data){
    try{
        console.log(data);
        const exist=await userModel.findOne({userId:data.userId});
        console.log(exist);

        if(!exist){
            const application=new userModel(data);
            const result=await application.save();
            console.log(result);
            return result;
        }
        
    }
    catch(e){
        throw ("Error userid exist's");
    }
}

async function readAll(){
    try{
        const all=await userModel.find();
        console.log(all);
        return all;
    }
    catch(e){
        throw ("no data exist");
    }
}


async function update(data,i){

    let selection=await userModel.findOne({userId:data[i].userId});

    selection.set({
        noOfOrders:data[i].noOforders
    })

    const result=await selection.save()
    return result;
    
}

module.exports={createUser,readAll,update}