import mongoose from 'mongoose'

const AlbumSchema = new mongoose.Schema({
    images : { type : Array } ,
    count : { type : Number } ,
    name : { type : String } ,
    description : { type : String} ,
})

const Album = mongoose.model('Album',AlbumSchema);