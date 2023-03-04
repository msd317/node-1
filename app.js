const http= require('http')

const server = http.createServer((req,res) =>{
if(req.url==='/'){
    res.end('welcome to the home page my n')
}
if(req.url==='/about'){
    res.end('this is the about page my n')
}
res.end(`<h1>Oops!</h1> 
<p>the page you are trying to login to does not exist</p>
<a href="/">go back to homepage</a>`)


})

server.listen(4000)