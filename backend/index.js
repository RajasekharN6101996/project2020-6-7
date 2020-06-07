const express=require('express');
const app=express();

const userRoute=require('./routes/userorder');
const orderRoute=require('./routes/orders');


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(userRoute);
app.use(orderRoute);

const port = process.env.HTTP_PORT || 3400;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})