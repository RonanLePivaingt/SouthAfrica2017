var path = require('path');
var multer = require('multer');
var upload = multer( { dest: './public/images/' } );

var stopoverController = require('./controllers/stopoverController');

// Routes
module.exports = function(app){
  app.get('/stopover/list', stopoverController.list);
  app.get('/admin/stopover/list', stopoverController.list);
  app.post('/admin/stopover/new', stopoverController.new);
  app.post('/admin/stopover/delete', stopoverController.delete);

  // Images upload
  app.post('/admin/upload', upload.single( 'file' ), function(req, res, next){
    // Metadata about the uploaded file can now be found in req.file
    console.log(req.file);
    return res.status( 200 ).send( req.file );
  });
};