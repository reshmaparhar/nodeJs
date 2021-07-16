const express = require('express');
const app = express();
const router = express.Router();
const validation = require('../middlewares/validator/validation');
const schemas = require('../middlewares/validator/schema');
const multer = require('multer')
const path = require('path')
const uploadFunction = require('../middlewares/fileUpload')

/*const errorHandler = function(req, res,next) {
    upload.single('myFile')(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.end("Max file size 100kB allowed!");
        }
        else if (err) {
            return res.end(err.message);
        }
        else if (!req.file) {
            return res.end("Please select File");
        }
        else {
            
            next()
        }
    }

    )

}
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,`../images/uploadedImages`)
      );

    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.originalname.split(".")[0]}-${Date.now()}.${ext}`);
       
      },
      
      
  });
  const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "jpeg"||file.mimetype.split("/")[1] === "jpg"||file.mimetype.split("/")[1] === "png") {
      cb(null, true);
    } else {
        cb(new Error("Not a Image File!!"), false);
    }
  };
  const upload = multer({ storage: multerStorage,
    limits : {fileSize : 100000},
    fileFilter: multerFilter});*/

const {addProduct, updateProduct,deleteProduct,getProduct,getProductById}= require('../controller/product.js');
router.route('/getProduct').get(getProduct);
//router.route('/product').post(upload.single("myFile"),validation(schemas.addNewProduct),addProduct);
router.route('/product').post(uploadFunction,validation(schemas.addNewProduct),addProduct)
router.route('/:_id').get(validation(schemas.getId),getProductById).delete(validation(schemas.getId),deleteProduct).put(validation(schemas.editProduct),updateProduct);
module.exports = router;