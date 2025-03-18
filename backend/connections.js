const mongoose = require('mongoose');

const url = "mongodb+srv://animeshverma122004:Animesh1626@cluster0.wg5rj.mongodb.net/doctor?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});

module.exports=mongoose;