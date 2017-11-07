import { TURN_EDIT_ALBUMS, TOGGLE_ADD_ALBUM_FORM } from "./types";

export default function(state = {}, action) {
  switch (action.type) {
    case TURN_EDIT_ALBUMS:
      return { ...state, albumsEdit: action.edit };
    default:
      return state;
    case TOGGLE_ADD_ALBUM_FORM: {
      return { ...state, albumFormData: state.albumFormData ? false : true };
    }
  }
}
