const express =require('express');
const path =require('path');
const app = express();
const port  = 3000;


app.use('/js',express.static(path.join(__dirname, 'root/js')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'root/index.html'))
});

app.listen(port,()=>{
    console.log('app has been stared & running as localhost:'+port)
});