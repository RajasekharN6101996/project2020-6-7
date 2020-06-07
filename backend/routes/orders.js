const express=require('express');
const routes=express.Router();
const {createOrder,readAllOrders,info,upinorders}=require('../modal/order');

routes.post('/createOrder',(req,res)=>{
    createOrder(req.body)
    .then((result)=>{
        console.log(result);
        res.send(result);
    })
    .catch((e)=>{
        res.send(e);
    })
})

routes.get('/Orders',(req,res)=>{
    readAllOrders()
    .then((result)=>{
        console.log(result);
        res.send(result)
    })
    .catch((e)=>{
        res.send(e);
    })
})

routes.get('/info',(req,res)=>{
    info()
    .then((result)=>{
        console.log(result);
        res.send(result)
    })
    .catch((e)=>{
        res.send(e);
    })
})

routes.put('/update',(req,res)=>{
    upinorders()
    .then((result)=>{
        console.log(result);
        res.send(result)
    })
    .catch((e)=>{
        res.send(e);
    })
})



module.exports=routes;
