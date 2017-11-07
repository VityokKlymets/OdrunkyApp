import mongoose from "mongoose";
import config from "../config";
import "../models/Album";

const Album = mongoose.model("Album");

export function setUpConnection() {
  mongoose.connect(
    `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
  );
}

export function listAlbums() {
  return Album.find();
}
export function addAlbum(data) {
  return new Promise((resolve,reject)=>{
    const album = new Album({
        images: data.images,
        count: 0,
        name: data.name,
        description: data.description
      });
    album.save((err,obj)=>{
        if(err) reject;
        resolve(album);
    })
  })
}
export function removeAlbum(id,callback){
    Album.findOne({'_id':id},(err,res)=>{
        if(err) {
            console.log(err);
            return;
        }
        return res.remove(callback());
    });
}
export function removeAlbumPhoto(albumId,photoId,callback)
{
    return new Promise((resolve,reject)=>{
        Album.findOne({'_id':albumId},(err,album)=>{
            if(err) reject();
            let newValue = album.images.slice();
            newValue.splice(photoId,1);
            album.images = newValue;
            album.save((err,obj)=>{
                if(err) reject();
                resolve();
            });
        })
    })
}
export function addPhoto(albumId,image){
    return new Promise((resolve,reject)=>{
        Album.findOne({'_id':albumId},(err,res)=>{
            if(err) reject();
            res.images.push(image);
            res.save((err,obj)=>{
                if(err) reject();
                resolve(image);
            })
        })
    })
}
export function changeAlbumData(albumId,name,description){
    return new Promise((resolve,reject)=>{
        Album.findOne({'_id':albumId},(err,res)=>{
            if(err) reject();
            res.name = name;
            res.description = description;
            res.save(err=>{
                if(err) reject;
                resolve();
            })
        })
    })
}