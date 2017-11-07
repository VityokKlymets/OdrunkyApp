import {
  PROMISE,
  CHANGE_ALBUM_DESCRIPTION,
  CHANGE_ALBUM_NAME,
  REMOVE_ALBUM_PHOTO,
  REMOVE_ALBUM,
  TURN_EDIT_ALBUMS,
  TOGGLE_ADD_ALBUM_FORM
} from "../../reducers/types";
import api from "../../../api";
export const addAlbum = params => {
  return {
    type: PROMISE,
    loadState: ["ALBUM_SENDING", "ALBUM_SENDED", "ALBUM_SEND_FAILURE"],
    apiFunc: api.albums.addAlbum,
    params
  };
};
export const addPhotoToAlbum = params =>{
  return {
    type : PROMISE,
    loadState : ["PHOTO_SENDING", "PHOTO_SENDED", "PHOTO_SEND_FAILURE"],
    apiFunc : api.albums.addPhotoToAlbum,
    params
  }
}
export const changeAlbumData = params =>{
  return {
    type : PROMISE,
    loadState : ["ALBUM_CHANGING","ALBUM_CHANGED","ALBUM_CHANGE_FAILURE"],
    apiFunc : api.albums.changeAlbumData,
    params
  }
}
export const deleteAlbum = id =>{
    return {
        type : PROMISE,
        loadState: ["ALBUM_DELETE_LOADING","ALBUM_DELETED","ALBUM_DELETE_FAILURE"],
        apiFunc : api.albums.deleteAlbum,
        params : { id}
    }
}
export const deleteAlbumPhoto = (albumId, photoId) => {
  return{
    type: PROMISE,
    loadState: ["PHOTO_DELETE_LOADING","PHOTO_DELETED","PHOTO_DELETE_FAILURE"],
    apiFunc : api.albums.deleteAlbumPhoto,
    params : {
      albumId,
      photoId
    }
  };
};
export const loadAlbums = () => {
  return {
    type: PROMISE,
    loadState: ["ALBUMS_LOADING", "ALBUMS_LOADED", "ALBUMS_LOAD_FAILURE"],
    apiFunc: api.albums.getAlbums
  };
};

export const changeAlbumDescription = (albumIdx, text) => {
  return {
    type: CHANGE_ALBUM_DESCRIPTION,
    albumIdx,
    text
  };
};
export const changeAlbumName = (albumIdx, text) => {
  return {
    type: CHANGE_ALBUM_NAME,
    albumIdx,
    text
  };
};
export const removeAlbum = albumIdx => {
  return {
    type: REMOVE_ALBUM,
    albumIdx
  };
};

export const turnEditAlbums = edit => {
  return {
    type: TURN_EDIT_ALBUMS,
    edit
  };
};

export const toggleAddAlbumForm = ()=> {
  return {
    type : TOGGLE_ADD_ALBUM_FORM
  }
}