const mongoose = require("mongoose");

const Gallery = {
  backGroungImageUrl: String,
  fontColor: String,
  fontFamily: String,
  fontSize: Number,
  galleryTitle: String,
  googleFontLink: String,
};

module.exports = mongoose.model("Gallery", Gallery);
