const multer = require('multer')
const path = require('path')
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
    fileFilter: multerFilter});

const uploadFunction = function(req, res,next) {
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
module.exports = uploadFunction;