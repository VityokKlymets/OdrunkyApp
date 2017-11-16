import path from "path";
import express from "express";
import bodyParser from "body-parser";
import config from "./config";
import mongoose from "mongoose";
import Promise from "bluebird";
import rimraf from "rimraf";
import fs from "fs";
import * as dbContext from "./utils/dbContext";
mongoose.Promise = Promise;
dbContext.setUpConnection();
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/static", express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/Albums", (req, res) => {
  dbContext.listAlbums().then(data => res.send(data));
});
app.post("/Albums/photos/", (req, res) => {
  let albumId = req.body.params.albumId;
  let images = req.body.params.images;
  dbContext.addPhotoToAlbum(albumId, images).then(data => {
    res.status(200).send(data);
  });
});
app.post("/Albums/change/", (req, res) => {
  const name = req.body.params.name;
  const description = req.body.params.description;
  const albumId = req.body.params.albumId;
  dbContext.changeAlbumData(albumId, name, description).then(() => {
    res.status(200);
  });
});
app.post("/Albums", (req, res) => {
  dbContext.addAlbum(req.body.params).then(
    data => {
      res.status(200).json({ data });
    },
    error => {
      res.json({ error });
    }
  );
});
app.delete("/Albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
  dbContext.removeAlbum(albumId).then(() => {
    const albumPath = path.join(config.albumFolder, albumId);
    rimraf(albumPath, error => {
      if(error) console.log(error);
    });
    res.status(200).json({ id: albumId });
  });
});
app.delete("/Albums/:albumId/:photoId/:photoName", (req, res) => {
  let albumId = req.params.albumId,
    photoId = req.params.photoId,
    photoName = req.params.photoName;
    const photoPath = path.join(config.albumFolder, albumId,photoName);
    fs.unlink(photoPath);
  dbContext
    .removeAlbumPhoto(albumId, photoId)
    .then(() => res.status(200).send({ albumId, photoId}));
});
app.listen(config.serverPort, () => {
  console.log(`Running on ${config.serverPort}`);
});
