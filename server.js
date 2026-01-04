const http = require("http");
const mongodb = require('mongodb');

const url = "mongodb+srv://max:EA2ZlPIuRcja27VH@cluster0.w8ebtog.mongodb.net/Reja";

mongodb.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err){
        console.log("Error:", err);
    }
    else{
        module.exports = client;
        const app = require('./app');
        console.log("Connected to MongoDB");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, () => {
            console.log(`The server is running seccesfully on port: ${PORT}, http://localhost:${PORT}`);    
        });
    }
});
