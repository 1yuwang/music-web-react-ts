import { Map} from "immutable"

import * as actionTypes from "./constants"

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbum: []
});

function reducer(state = defaultState, action: any) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum)
    default:
      return state
  }
}

export default reducer