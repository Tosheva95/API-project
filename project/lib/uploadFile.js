const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./services/upload/storage"); 
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
  });
  
  const filefilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/gif'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
  
  const fileSize = 1 * 1000 * 1000;
  
  const upload = multer({ storage: storage, limits: { fileSize: fileSize }, fileFilter: filefilter });
  
  module.exports = { upload }