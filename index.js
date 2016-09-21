var express = require('express');

var map = { "1": { id: 1, name: "test" }, "2": { id: 2, name: "test" } }

var app = express();

app.use('/node_modules', express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
})

app.get('/devices', function(req, res) { //Restful Get方法,查找整个集合资源  
    res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
    res.send(map)
})

app.get('/devices/:id', function(req, res) { //Restful Get方法,查找一个单一资源  
    res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
    res.send(map[req.param('id')])
        //console.log(req.param('id'))  
})

app.listen(8888);