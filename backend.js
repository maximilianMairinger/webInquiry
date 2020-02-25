const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require("crypto")
const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


function createSessionKey() {
  return crypto.createHash('sha512').update(Math.random().toString() + "d726aloskjhe8721").digest("hex").toUpperCase();
}


const data = {
  
}

app.post("/createSession", (req, res) => {
  let userKey = createSessionKey()
  data[userKey] = {}
  res.send({userKey})
})

app.post('/log', (req, res) => {
  console.log(req.body)
  res.send('{"ok": "okok"}')
});


function sendFile(res, p) {
  res.sendFile(path.join(__dirname + "/" + p));
}

app.use('/dist', express.static('test/dist'))

app.get('/', (req, res) => {
  sendFile(res, "test/index.html")
});



app.listen(port);
console.log("Listening on Port: " + port);