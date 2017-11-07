import express from "express";
import bodyParser from "body-parser";
import config from "./config";
import mongoose from 'mongoose';
import Promise from 'bluebird';
import * as dbContext from "./utils/dbContext";
mongoose.Promise = Promise;
dbContext.setUpConnection();

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/Albums", (req, res) => {
  dbContext.listAlbums().then(data => res.send(data));
});
app.post("/Albums/photos/",(req,res)=>{
  let albumId = req.body.params.albumId;
  let images  = req.body.params.images;
  dbContext.addPhoto(albumId,images)
  .then((images)=>{
    res.status(200).send({success : true, images,albumId})
  })
})
app.post("/Albums/change/",(req,res)=>{
  console.log(req.body)
  const name = req.body.params.name;
  const description = req.body.params.description;
  const albumId = req.body.params.albumId;
  dbContext.changeAlbumData(albumId,name,description)
  .then(()=>{
    res.status(200);
  })
})
app.post("/Albums", (req, res) => {
  console.log(req.body.params);
  dbContext.addAlbum(req.body.params).then(
    (data) => {
      res.status(200).json({ success: true ,data});
    },
    error => {
      res.json({ error });
    }
  );
});
app.delete("/Albums/:albumId", (req, res) => {
  dbContext.removeAlbum(req.params.albumId,()=>{
    res.status(200).json({success:true,id :req.params.albumId })
})
});
app.delete("/Albums/:albumId/:photoId",(req,res)=>{
    let albumId = req.params.albumId,
        photoId = req.params.photoId;
    dbContext.removeAlbumPhoto(albumId,photoId)
    .then(()=>res.status(200).send({albumId,photoId,success : true}))
})
app.listen(config.serverPort, () => {
  console.log(`Running on ${config.serverPort}`);
});
