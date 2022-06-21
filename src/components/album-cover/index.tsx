import { getSizeImage } from '@/utils/format-utils'
import React, { memo } from 'react'

import { AlbumWrapper } from './style'

const AlbumCover = memo((props: any) => {
  const { info, size = 130, width = 153, bgp = '-845px' } = props
  return (
    <AlbumWrapper size={size + 'px'} width={width + 'px'} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} />
        <a href="/todo" className='cover image_cover'></a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist text-norwap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover