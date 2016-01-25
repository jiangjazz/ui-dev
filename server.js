//环境配置参数
process.env.NODE_ENV =  process.env.NODE_ENV || 'development';


//公共模块引入
var http = require('http');

//私有模块引入
var express = require('./config/express'),
    app = express();

//参数变量
var host = '127.0.0.1',
    post = 8080;



//http.createServer(server).listen(post);



console.log('success');
app.listen(post, host);

module.exports = app;
//开启服务
/*function server(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    res.end('Hello World\n');
}*/



