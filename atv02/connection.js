const http = require('http')
const fs = require('fs')
const path = require('path')
const PORTA = 8181


http.createServer(function (req, res){
    if(req.url === '/' || req.url === '/index.html'){
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if(err){
                console.log(err)
                return
            }
            res.end(data)
        })
    }else if(req.url === '/style.css'){
        fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
            if(err){
                console.log(err)
                return
            }
            res.end(data)
        })
    }else if(req.url === '/script.js'){
        fs.readFile(path.join(__dirname, 'script.js'), (err, data) => {
            if(err){
                console.log(err)
                return
            }
            res.end(data)
        })
    }else{
        res.end('Erro 404')
    }
 
}).listen(PORTA)


console.log('Servidor ligado.')

/*fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err){
            console.log(err)
            return
        }
        res.end(data)
    })*/