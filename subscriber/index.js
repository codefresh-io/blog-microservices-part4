const express = require('express');
var app = express();
var notifications = [];
app.post('/tickets/notify', (req, res)=>{
   console.log('was notified');
   notifications.push(req.body);
   res.send(JSON.stringify(req.body) + " added");
})
app.get('/tickets/notifications', (req, res)=>{

   res.send(JSON.stringify(notifications));
})
app.post('/tickets/notify', (req, res)=>{
   notifications.push(req.body);
   res.send(JSON.stringify(notifications));
})

app.get('/', (req, res)=>{
   res.send('subscribe server , use /tickets/notify with POST verb');
})
app.listen(5555, ()=>{
  console.log('subscriber is up');
})
