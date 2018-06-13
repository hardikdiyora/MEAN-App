const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const multer  = require('multer');

const storage = multer.diskStorage({ 
        destination: function (req, file, cb) {
            cb(null, './public/uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });


const upload = multer({ storage: storage });

const Defect = require('../models/defect');

Defect.resetCount(function(err, nextCount) {
    nextCount === 1; 
  });

// Report
router.post('/report', passport.authenticate('jwt', {session:false}), (req, res, next) => {

  let newDefect = new Defect({
    summary: req.body.summary,
    description: req.body.description,
    username: req.body.username,
    severity: req.body.severity,
    components: req.body.components,
    attachments: req.body.attachments,
    state: "New",
    comments: "No comments yet..",
  });
  Defect.addDefect(newDefect, (err, defect) => {
    if(err){
      res.json({success: false, msg:'Failed to report defect'});
    } else {
      res.json({success: true, msg:'Defect reported'});
    }
  });
});

//Delete the defect
router.delete('/delete/:_id', passport.authenticate('jwt', {session:false}), function(req, res) {
  var id = req.params._id;
  console.log('Delete request received for defect ID:' + id);
  Defect.deleteDefect(id, (err) => {
    if(err){
      res.json({success: false, msg:'Failed to delete defect'});
    } else {
      res.json({success: true, msg:'Defect deleted'});
    }
  });
});


// Get All the Defects data
router.get('/listDefects', function(req, res){
  Defect.getAllDefects(function(err, defects){
    if (err) throw err;
    res.json(defects);
  });
});

// Get a specific Defect data by GET /listDefects/592c51c99a9fe22ff049e771 
// Get a specific username defects by listDefects/5?username=test1
router.get('/listDefects/:_id', function(req, res){
  if(req.query.username){
      const username = req.query.username;
      Defect.getDefectsByUsername(username, function(err, defects){
      if (err) throw err;
      res.json(defects);
    });
  }else {
    Defect.getDefectById(req.params._id, function(err, defect){
      if (err) throw err;
      res.json(defect);
    });
  } 
});


//Update the defect
router.put('/update/:_id', passport.authenticate('jwt', {session:false}), function(req, res) {
  var id = req.params._id;
  var updateDefect = req.body;
  console.log('Update request received for defect ID:' + id);
  Defect.updateDefect(id, updateDefect, {}, (err, defect) => {
    if(err){
      res.json({success: false, msg:'Failed to update defect'});
    } else {
      res.json({success: true, msg:'Defect updated'});
    }
  });
});

//Update the defect
router.post('/attachment', upload.any(), function(req, res) {
  var attach = [];
  req.files.forEach(function (file){
    attach.push(file.filename);
  });
  res.send(attach);
});


//Distinct and Count defects per User
router.get('/distAndcount', passport.authenticate('jwt', {session:false}), function(req, res){
    Defect.distinctCount(function(err, count_distinct){
    if (err) throw err;
     res.json(count_distinct);
  });
});


module.exports = router;
