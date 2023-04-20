const http=require('http');
//const fs=require('fs');
const server=http.createServer((req,res)=> {
    const url =req.url;

if(url==='/')
{   res.setHeader ('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Asssignment</title></head>');
    res.write('<body> <h1>Good Morning</h1><br><form action="/create-user" method="POST"><input type="text" name="usernmae" ></input><button type="submit" name="button">submit</button></form></body>');         
    res.write ('</html>');
    return  res.end();  
    
}
if(url==='/users')
{
    res.setHeader ('Content-Type', 'text/html')  ;
    res.write('<html>');
    res.write('<head><title> Asssignment</title></head>');
    res.write('<body> <ul><li>User1</li></ul><ul><li>User2</li></ul><ul><li>User3</li></ul></body>') ;        
    res.write ('</html>');
    return  res.end();  
    
}

if(url==='/create-user')
{
const body=[];
req.on('data',chunk=>{
    body.push(chunk);
});
req.on('end',()=>{
    const parsebody=Buffer.concat(body).toString();
    console.log(parsebody.split('=')[1]);
    
});
res.statusCode=302;
res.setHeader('Location','/create-user');
res.end();
}
});
server.listen(3000);



    

  


