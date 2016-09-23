
//node.js需要自己创建一个http服务器
var http = require("http");
var url = require("url");
var fs = require("fs");
var express = require("express");
var app = express();

app.use(express.static('images'));

app.get('/',function(req,res){
	res.send("你好啊，小伙子！\n Hello Express");
})

var server = app.listen(8081,function(){
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例方位地址为：http://%s:%s",host,port)
})



// http.createServer(function (request,response){
// 	//解析请求
// 	var pathname = url.parse(request.url).pathname;
// 	console.log("Request for" + pathname + "received");

// 	fs.readFile(pathname.substr(1),function(err,data){
// 		if (err) {
// 			console.log(err);
// 			response.writeHead("404",{"Content-Type":"text/html"});
// 		}else{
// 			//接收request，并response返回结果
// 			response.writeHead(200,{'Content-Type':'text/html'});
// 			response.write(data.toString());
// 		}

// 		//发送响应数据
// 	response.end();
// 	});
	
// }).listen(8888);//监听8888端口

// console.log("服务器已经在端口8888启动：");