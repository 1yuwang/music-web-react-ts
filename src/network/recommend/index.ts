import request from "../index";

export function getTopBanners() {
  return request.get({
    url: "/banner"
  })
}

export function getHotRecommends(limit: number) {
  return request.get({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbum(limit: number) {
  return request.get({
    url: "/top/album",
    params: {
      limit
    }
  })
}

export function getTopList(idx: number) {
  return request.get({
    url: "/top/list",
    params: {
      idx
    }
  })
}