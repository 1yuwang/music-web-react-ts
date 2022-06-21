import * as actionTypes from "./constants"

import { getTopBanners, getHotRecommends, getNewAlbum, getTopList } from "@/network/recommend"

const changeTopBannerAction = (res: any) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.data.banners
})

const changeHotRecommendAction = (res: any) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.data.result
})

const changeNewAlbumAction = (res: any) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.data.albums
})

export const getTopBannerAction = () => {
  return (dispatch: any) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendsAction = (limit: number) => {
  return (dispatch: any) => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit: number) => {
  return (dispatch: any) => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx: number) => {
  return (dispatch: any) => {
    getTopList(idx).then(res => {
      console.log(res)
    })
  }
}