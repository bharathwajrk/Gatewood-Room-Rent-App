var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');
var router = express.Router();

/* GET rooms listing. */
router.get('/rooms', function(req, res, next) {
  //res.send('respond with a resource');
  let roomList = fs.readFileSync("./components/rooms.json");
  // roomList = JSON.parse(roomList);
  res.json(JSON.parse(roomList));
  // res.json(roomList);
});

router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

/* Post a room in the rooms.json */
router.post('/room', function(req, res, next) {
  //res.send('respond with a resource');
  // console.log(req );
  let bodyMessage = {};
  for(var key in req.body){
    bodyMessage = JSON.parse(key);
  }

  if(bodyMessage !== null && bodyMessage !== {}){
    let rawRoomList = fs.readFileSync("./components/rooms.json");
    let roomList = JSON.parse(rawRoomList);
    roomList.push(bodyMessage);
    // fs.writeFile("./components/rooms.json", JSON.stringify(roomList, null, 2));
    fs.writeFile("./components/rooms.json", JSON.stringify(roomList, null, 2), (err) => {
      if (err) throw err;
      res.send({ 'response' : 'Room added successfully'});
    });
  }
  else{
    res.send({ 'response' : 'No room data received to add'});
  }
});

module.exports = router;
