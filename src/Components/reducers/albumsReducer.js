import {
  REMOVE_ALBUM_PHOTO,
  CHANGE_ALBUM_DESCRIPTION,
  CHANGE_ALBUM_NAME,
  REMOVE_ALBUM,
  ALBUMS_LOADED,
  ALBUM_SENDED,
  ALBUM_DELETED,
  PHOTO_DELETED,
  PHOTO_SENDED,
  ALBUM_CHANGED
} from "./types";
export default function(state = [], action) {
  let dataState = state.slice();
  switch (action.type) {
    case REMOVE_ALBUM_PHOTO:
      dataState[action.albumIdx].images.splice(action.photoIdx, 1);
      return dataState;
    case REMOVE_ALBUM:
      dataState.splice(action.albumIdx, 1);
      return dataState;
    case CHANGE_ALBUM_NAME:
      dataState[action.albumIdx].name = action.text;
      return dataState;
    case CHANGE_ALBUM_DESCRIPTION:
      dataState[action.albumIdx].description = action.text;
    case ALBUMS_LOADED:
      return action.data;
    case ALBUM_CHANGED:
      return dataState.map(album => {
        if (album._id === action.data.albumId) {
          album.name = action.data.name;
          album.description = action.data.description;
        }
      });
    case ALBUM_SENDED:
      dataState.push(action.data.data);
      return dataState;
    case PHOTO_DELETED:
      let photoId = parseInt(action.data.photoId);
      return dataState.map((album, idx) => {
        if (album._id === action.data.albumId) {
          album.images.splice(photoId, 1);
        }
        return album;
      });
    case ALBUM_DELETED:
      return dataState.filter(elem => {
        return elem._id != action.data.id;
      });
    case PHOTO_SENDED:
      return dataState.map(album => {
        if (album._id === action.data.albumId) {
          console.log(album._id);
          action.data.images.map(image => {
            album.images.push(image);
          });
        }
        return album;
      });

    default:
      return dataState;
  }
}
