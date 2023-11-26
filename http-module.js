const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('This is the about page ')
    }
    
    res.end(`<h1>Error ... Invalid Page.</h1>
        <a href='/'> Back home </a>
     `)

    
});

server.listen(5000)