const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/origa')
.this(()=>console.log('connected to mongodb'))
.catch((e)=>console.log('Error to connect'))