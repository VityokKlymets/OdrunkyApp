"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUpConnection = setUpConnection;
exports.listAlbums = listAlbums;
exports.addAlbum = addAlbum;
exports.removeAlbum = removeAlbum;
exports.removeAlbumPhoto = removeAlbumPhoto;
exports.addPhotoToAlbum = addPhotoToAlbum;
exports.changeAlbumData = changeAlbumData;
exports.getBookmarks = getBookmarks;
exports.addBookmark = addBookmark;
exports.removeBookmark = removeBookmark;
exports.changeBookmark = changeBookmark;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

require("../models/Album");

require("../models/Bookmark");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SERVER_ROOT = _config2.default.serverRoot;
var DEVELOPMENT_ROOT = _config2.default.developmentRoot;
var Album = _mongoose2.default.model("Album");
var Bookmark = _mongoose2.default.model("Bookmark");
function setUpConnection() {
  _mongoose2.default.connect("mongodb://" + _config2.default.db.host + ":" + _config2.default.db.port + "/" + _config2.default.db.name);
}

function listAlbums() {
  return Album.find();
}
function decodeBase64Image(image) {
  var responce = {
    data: "",
    format: ""
  };
  var matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var format = "." + matches[1].substring(matches[1].indexOf("/") + 1);
  responce.format = format === ".jpeg" ? ".jpg" : format;
  responce.data = new Buffer(matches[2], "base64");
  return responce;
}
function SaveFiles(albumId, files) {
  return new Promise(function (resolve, reject) {
    var relativePath = _path2.default.join("/", "static", "media", "albums", albumId.toString());
    var outputPath = _path2.default.join(SERVER_ROOT, relativePath);
    if (!_fs2.default.existsSync(outputPath)) {
      _fs2.default.mkdirSync(outputPath);
    }
    var output = [];
    for (var i = 0; i < files.length; i++) {
      var responce = decodeBase64Image(files[i]);
      var fileName = new Date().getTime().toString() + responce.format;
      var filePath = _path2.default.join(outputPath, fileName);
      _fs2.default.writeFile(filePath, responce.data, "base64");
      output.push(_path2.default.join(relativePath, fileName).replace(/\\/g, "/"));
    }
    resolve(output);
  });
}
function addAlbum(data) {
  return new Promise(function (resolve, reject) {
    var album = new Album({
      images: [],
      count: 0,
      name: data.name,
      description: data.description
    });
    SaveFiles(album._id, data.images).then(function (output) {
      album.images = output;
    }).then(function () {
      album.save(function (err, obj) {
        if (err) reject(err);
        resolve(album);
      });
    });
  });
}
function removeAlbum(id) {
  return new Promise(function (resolve, reject) {
    Album.findOne({ _id: id }, function (err, res) {
      if (err) {
        reject(err);
      }
      res.remove(resolve());
    });
  });
}
function removeAlbumPhoto(albumId, photoId, callback) {
  return new Promise(function (resolve, reject) {
    Album.findOne({ _id: albumId }, function (err, album) {
      if (err) reject();
      var newValue = album.images.slice();
      newValue.splice(photoId, 1);
      album.images = newValue;
      album.save(function (err, obj) {
        if (err) reject();
        resolve();
      });
    });
  });
}
function addPhotoToAlbum(albumId, images) {
  return new Promise(function (resolve, reject) {
    Album.findOne({ _id: albumId }, function (err, res) {
      if (err) reject();
      SaveFiles(albumId, images).then(function (output) {
        res.images = res.images.concat(output);
        return {
          albumId: albumId,
          images: output
        };
      }).then(function (responce) {
        res.save(function (err, obj) {
          if (err) reject();
          resolve(responce);
        });
      });
    });
  });
}
function changeAlbumData(albumId, name, description) {
  return new Promise(function (resolve, reject) {
    Album.findOne({ _id: albumId }, function (err, res) {
      if (err) reject();
      res.name = name;
      res.description = description;
      res.save(function (err) {
        if (err) reject;
        resolve();
      });
    });
  });
}

function getBookmarks() {
  return new Promise(function (resolve, reject) {
    Bookmark.find({}, function (err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
}
function addBookmark(data) {
  return new Promise(function (resolve, reject) {
    var bookmark = new Bookmark({
      head: data.head,
      text: data.text
    });
    bookmark.save(function (err, obj) {
      if (err) reject(err);
      resolve(obj);
    });
  });
}
function removeBookmark(id) {
  return new Promise(function (resolve, reject) {
    Bookmark.findOne({
      _id: id
    }, function (err, res) {
      if (err) reject(err);
      res.remove(resolve({ id: id }));
    });
  });
}
function changeBookmark(data) {
  return new Promise(function (resolve, reject) {
    var id = data.id;
    Bookmark.findOne({
      _id: id
    }, function (err, res) {
      if (err) reject(err);
      res.head = data.head ? data.head : res.head;
      res.text = data.text ? data.text : res.text;
      res.save(resolve(res));
    });
  });
}