import mongoose from 'mongoose'

const BookmarkSchema = new mongoose.Schema({
   head : {type: String},
   text : {type: String}
})

const Bookmark = mongoose.model('Bookmark',BookmarkSchema);