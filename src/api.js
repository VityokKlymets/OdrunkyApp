import axios from "axios";
export default {
  albums: {
    getAlbums: () => {
      return axios.get("/Albums");
    },
    addAlbum: params => {
      return axios.post("/Albums", { params });
    },
    deleteAlbum: params => {
      return axios.delete(`/Albums/${params.id}`);
    },
    deleteAlbumPhoto: params => {
      return axios.delete(`/Albums/${params.albumId}/${params.photoId}/${params.photoName}`);
    },
    addPhotoToAlbum: params => {
      return axios.post("/Albums/photos/", { params });
    },
    changeAlbumData : params =>{
      return axios.post("/Albums/change",{params});
    },
   }
  ,
  bookmarks : {
    addBookmark : params =>{
      return axios.post("/Bookmarks",{params});
    },
    getBookmarks : ()=>{
      return axios.get("/Bookmarks");
    },
    deleteBookmark : params =>{
      return axios.delete(`/Bookmarks/${params.id}`);
    },
    changeBookmarkData : params =>{
      return axios.post("/Bookmarks/change",{params});
    }
  }
};
