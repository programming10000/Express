const express=require('express');
const app=express();

const router=require('./routes/index');
app.use('/',router)
const routera=require('./routes/a');
app.use('/a',routera)
const routerb=require('./routes/b');
app.use('/b',routerb)


app.listen(3000,() => console.log('app listen on port 3000'));