'use strict ';
const express=require('express');
const app=express();

const notFoundHandelar=require('./error-handlers/404');
const errorHandelar=require('./error-handlers/500');
const loggerMiddleWre=require('./middleware/logger');
const foodRoute=require('./routes/food');
const clothesRoute=require('./routes/clothes');

app.use(loggerMiddleWre);

app.get('/',(req,res)=>{
    res.status(200).send('Hello world')
});




app.use(express.json());
app.use(foodRoute);
app.use(clothesRoute);

app.use('*',notFoundHandelar);
app.use(errorHandelar);

function start (PORT){
    app.listen(PORT,()=>console.log(`listening on port ${PORT}`))
}

module.exports={
    start,
    app
}