const express = require('express'); 
const userRouter =require('./routers/userRouter');
const doctorRouter =require('./routers/doctorRouter');
const slotRouter =require('./routers/slotRouter');
const appointmentRouter =require('./routers/appointmentRouter');
const reportRouter =require('./routers/reportRouter');
const cors =require('cors');



const app = express();

const port = 5000;

//middleware
app.use(cors({ origin:['http://localhost:3000'] }));
app.use(express.json());
app.use('/user',userRouter);
app.use('/doctor',doctorRouter);
app.use('/slot',slotRouter);
app.use('/appointment',appointmentRouter);
app.use('/report',reportRouter);
// route or endpoint
app.get('/',(req, res)=>{
    res.send('respond from express');
})

app.get('/add',(req, res)=>{
    res.send('respond from add');
})

app.get('/getall',(req, res)=>{
    res.send('respond from getall');
})

app.get('/delete',(req, res)=>{
    res.send('respond from delete');
})

app.listen(port, ()=>{
    console.log('server started');
});

