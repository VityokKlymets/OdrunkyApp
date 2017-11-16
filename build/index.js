"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _rimraf = require("rimraf");

var _rimraf2 = _interopRequireDefault(_rimraf);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _dbContext = require("./utils/dbContext");

var dbContext = _interopRequireWildcard(_dbContext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;
dbContext.setUpConnection();
var app = (0, _express2.default)();
app.use(_bodyParser2.default.json({ limit: "50mb" }));
app.use(_bodyParser2.default.urlencoded({ limit: "50mb", extended: true }));

app.use("/static", _express2.default.static(_path2.default.join(__dirname, "static")));
app.get("/", function (req, res) {
  res.sendFile(_path2.default.join(__dirname, "/index.html"));
});
app.get("/Albums", function (req, res) {
  dbContext.listAlbums().then(function (data) {
    return res.send(data);
  });
});
app.post("/Albums/photos/", function (req, res) {
  var albumId = req.body.params.albumId;
  var images = req.body.params.images;
  dbContext.addPhotoToAlbum(albumId, images).then(function (data) {
    res.status(200).send(data);
  });
});
app.post("/Albums/change/", function (req, res) {
  var name = req.body.params.name;
  var description = req.body.params.description;
  var albumId = req.body.params.albumId;
  dbContext.changeAlbumData(albumId, name, description).then(function () {
    res.status(200);
  });
});
app.post("/Albums", function (req, res) {
  dbContext.addAlbum(req.body.params).then(function (data) {
    res.status(200).json({ data: data });
  }, function (error) {
    res.json({ error: error });
  });
});
app.delete("/Albums/:albumId", function (req, res) {
  var albumId = req.params.albumId;
  dbContext.removeAlbum(albumId).then(function () {
    var albumPath = _path2.default.join(_config2.default.albumFolder, albumId);
    (0, _rimraf2.default)(albumPath, function (error) {
      if (error) console.log(error);
    });
    res.status(200).json({ id: albumId });
  });
});
app.delete("/Albums/:albumId/:photoId/:photoName", function (req, res) {
  var albumId = req.params.albumId,
      photoId = req.params.photoId,
      photoName = req.params.photoName;
  var photoPath = _path2.default.join(_config2.default.albumFolder, albumId, photoName);
  _fs2.default.unlink(photoPath);
  dbContext.removeAlbumPhoto(albumId, photoId).then(function () {
    return res.status(200).send({ albumId: albumId, photoId: photoId });
  });
});
app.listen(_config2.default.serverPort, function () {
  console.log("Running on " + _config2.default.serverPort);
});