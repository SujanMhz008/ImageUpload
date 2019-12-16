var imageModel = require('../models/ImageModel.js');

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage })

var imageName = upload.single('image');

var imageNames = upload.array('images', 4);

function uploadImage(req, res, next) {
  //  console.log(req.file)
  imageModel.image.create({
    image: req.file.filename

  })
    .then(function (result) {
      res.json({
        status: 300,
        message: "Image has been uploaded"
      })
    })
    .catch(function (err) {
      console.log(err);
    })
  next();
}
function uploadImages(req, res, next) {
  // console.log(req.files)
  imageModel.image.bulkCreate({
    image: req.files.filename

  })
    .then(function (result) {
      res.json({
        status: 300,
        message: "Images has been uploaded"
      })
    })
    .catch(function (err) {
      console.log(err);
    })
  next();
}

module.exports = {
  imageNames,
  uploadImages,
  uploadImage,
  imageName
};