import {
  TURN_EDIT_ALBUMS,
  TOGGLE_ADD_ALBUM_FORM,
  ALBUMS_LOADING,
  ALBUMS_LOADED,
  ALBUM_SENDING,
  ALBUM_SENDED,
} from "./types";

export default function(state = {}, action) {
  switch (action.type) {
    case TURN_EDIT_ALBUMS:
      return { ...state, albumsEdit: action.edit };
    default:
      return state;
    case TOGGLE_ADD_ALBUM_FORM: {
      return { ...state, albumFormData: state.albumFormData ? false : true };
    }
    case ALBUMS_LOADING: {
      return { ...state, albumsLoading: true };
    }
    case ALBUMS_LOADED: {
      return { ...state, albumsLoading: false, albumsLoaded: true };
    }
    case ALBUM_SENDING : {
      return {...state ,albumSending : true ,albumSended : false}
    }
    case ALBUM_SENDED : {
      return { ...state, albumSending: false,albumSended: true}
    }
  }
}
