let http = require('http');
const server = http.createServer(function(req,resp){
    resp.write("Hello SF Dev");
    resp.end();
});
server.listen(8088,function(){
    console.log("listening to port 8088");
});