const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/origa')
.then(()=>console.log('connected to mongodb'))
.catch((e)=>console.log('Error to connect'));

const {readAll,update}=require('./user');

const orderSchema=new mongoose.Schema({
    orderId:{
        type:Number,
        required:true
    },
    userid:{
        type:Number,
        required:true
    },
    subtotal:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    }

})

const orderModel=mongoose.model('order',orderSchema);

async function createOrder(data){
    try{
        const exist=await orderModel.findOne({orderId:data.orderId});
        if(!exist){
            const orders=new orderModel(data);
            const result=await orders.save();
            console.log(result);
            return result;
        }
        
    }
    catch(e){
        throw ("Error userid exist's");
    }
}

async function readAllOrders(){
    try{
        const all=await orderModel.find();
        console.log(all);
        return all;
    }
    catch(e){
        throw ("no data exist");
    }
}

async function info(){
    var ho=await readAll();
    details=[];
    for(let i=0;i<ho.length;i++){
        const all=await orderModel.find({userid:ho[i].userId});
    var total=0;

        for(let j=0;j<all.length;j++){
            total=total+all[j].subtotal;
        }
        averageBillValue=total/(all.length);
        var userId=all[0].userid;
        var name=ho[i].name;
        var noOforders=all.length;
        const object={
            userId,
            name,
            noOforders,
            averageBillValue
        }
        details.push(object);

    }
    // console.log(details);
    return details;
    
}

async function upinorders(){
    for(let i=0;i<details.length;i++){
     update(details,i);

}
const final= await readAll();
return final;

}

module.exports={createOrder,readAllOrders,info,upinorders}
