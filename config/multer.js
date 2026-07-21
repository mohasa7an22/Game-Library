const storage = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}`
    );
  },
});
const upload = multer({ storage: storage });

module.exports = upload