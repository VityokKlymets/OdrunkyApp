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
      return axios.delete(`/Albums/${params.albumId}/${params.photoId}`);
    },
    addPhotoToAlbum: params => {
      console.log(params);
      return axios.post("/Albums/photos/", {params });
    },
    changeAlbumData : params =>{
      console.log(params);
      return axios.post("/Albums/change",{params});
    }
  }
};
