var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit',(req, res) => {
    console.log(req.body);
    res.send("hello")
   
client.connect()
    .then(() =>{client.db("FibinServer").collection("user").insertOne(req.body);
    console.log("submitted")}
    )

    .catch((error) =>{ console.log('Failed to connect', error)})


   
   
  })

module.exports = router;
