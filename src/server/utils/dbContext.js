import mongoose from "mongoose";
import config from "../config";
import path, { relative } from "path";
import fs, { copyFileSync, read } from "fs";
import "../models/Album";
import "../models/Bookmark";
const SERVER_ROOT = config.serverRoot;
const DEVELOPMENT_ROOT = config.developmentRoot;
const Album = mongoose.model("Album");
const Bookmark = mongoose.model("Bookmark");
export function setUpConnection() {
  mongoose.connect(
    `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
  );
}

export function listAlbums() {
  return Album.find();
}
function decodeBase64Image(image) {
  let responce = {
    data: "",
    format: ""
  };
  let matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  let format = "." + matches[1].substring(matches[1].indexOf("/") + 1);
  responce.format = format === ".jpeg" ? ".jpg" : format;
  responce.data = new Buffer(matches[2], "base64");
  return responce;
}
function SaveFiles(albumId, files) {
  return new Promise((resolve, reject) => {
    const relativePath = path.join(
      "/",
      "static",
      "media",
      "albums",
      albumId.toString()
    );
    const outputPath = path.join(SERVER_ROOT, relativePath);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath);
    }
    let output = [];
    for (let i = 0; i < files.length; i++) {
      let responce = decodeBase64Image(files[i]);
      let fileName = new Date().getTime().toString() + responce.format;
      let filePath = path.join(outputPath, fileName);
      fs.writeFile(filePath, responce.data, "base64");
      output.push(path.join(relativePath, fileName).replace(/\\/g, "/"));
    }
    resolve(output);
  });
}
export function addAlbum(data) {
  return new Promise((resolve, reject) => {
    const album = new Album({
      images: [],
      count: 0,
      name: data.name,
      description: data.description
    });
    SaveFiles(album._id, data.images)
      .then(output => {
        album.images = output;
      })
      .then(() => {
        album.save((err, obj) => {
          if (err) reject(err);
          resolve(album);
        });
      });
  });
}
export function removeAlbum(id) {
  return new Promise((resolve, reject) => {
    Album.findOne({ _id: id }, (err, res) => {
      if (err) {
        reject(err);
      }
      res.remove(resolve());
    });
  });
}
export function removeAlbumPhoto(albumId, photoId, callback) {
  return new Promise((resolve, reject) => {
    Album.findOne({ _id: albumId }, (err, album) => {
      if (err) reject();
      let newValue = album.images.slice();
      newValue.splice(photoId, 1);
      album.images = newValue;
      album.save((err, obj) => {
        if (err) reject();
        resolve();
      });
    });
  });
}
export function addPhotoToAlbum(albumId, images) {
  return new Promise((resolve, reject) => {
    Album.findOne({ _id: albumId }, (err, res) => {
      if (err) reject();
      SaveFiles(albumId, images)
        .then(output => {
          res.images = res.images.concat(output);
          return {
            albumId,
            images: output
          };
        })
        .then(responce => {
          res.save((err, obj) => {
            if (err) reject();
            resolve(responce);
          });
        });
    });
  });
}
export function changeAlbumData(albumId, name, description) {
  return new Promise((resolve, reject) => {
    Album.findOne({ _id: albumId }, (err, res) => {
      if (err) reject();
      res.name = name;
      res.description = description;
      res.save(err => {
        if (err) reject;
        resolve();
      });
    });
  });
}

export function getBookmarks(){
  return new Promise((resolve,reject)=>{
    Bookmark.find({},(err,res)=>{
      if(err) reject(err);
      resolve(res);
    })
  })
}
export function addBookmark(data){
  return new Promise((resolve,reject)=>{
    const bookmark = new Bookmark({
      head : data.head,
      text : data.text
    })
    bookmark.save((err,obj)=>{
      if(err) reject(err);
      resolve(obj);
    })
  })
}
export function removeBookmark(id){
  return new Promise((resolve,reject)=>{
    Bookmark.findOne({
      _id : id
    },(err,res)=>{
      if(err) reject(err);
      res.remove(resolve({id}));
    })
  })
}
export function changeBookmark(data){
  return new Promise((resolve,reject)=>{
    let id = data.id;
    Bookmark.findOne({
      _id : id
    },(err,res)=>{
      if(err) reject(err);
      res.head = data.head ? data.head : res.head;
      res.text = data.text ? data.text : res.text;
      res.save(resolve(res));
    })
  })
}