const multer = require('multer');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const validTypes = ['image/png', 'image/jpg'];

const validTypesFilter = (req, file, cb) => {
  if (validTypes.includes(file.minetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = ({ multerStorage, validTypesFilter });
