const express=require('express');
const routes=express.Router();
const {createUser,readAll,update}=require('../modal/user');

routes.post('/createUser',(req,res)=>{
    createUser(req.body)
    .then((result)=>{
        console.log(result);
        res.send(result);

    })
    .catch((e)=>{
        res.send(e);
    })
})

routes.get('/Users',(req,res)=>{
    readAll()
    .then((result)=>{
        console.log(result);
        res.send(result)
    })
    .catch((e)=>{
        res.send(e);
    })
})
module.exports=routes;