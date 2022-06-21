import React, { memo, useEffect, useRef } from "react";

import { getNewAlbumAction } from "../../store/actionCreators";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AlbumWrapper } from './style'
import { Carousel } from "antd"
import AlbumCover from "@/components/album-cover";

const NewAlbum = memo(() => {
  // state
  // redux hooks
  const { newAlbum } = useSelector((state: any) => ({
    newAlbum: state.getIn(['recommend', 'newAlbum'])
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hooks
  const pageRef = useRef<any>()
  useEffect(() => {
    dispatch(getNewAlbumAction(10) as any);
  }, [dispatch]);
  //
  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={ e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return(
                  <div key={item} className="page">
                    {
                      newAlbum.slice(item * 5, (item + 1) * 5).map((iten: any) => {
                        return(
                          <AlbumCover key={iten.id} 
                                      info={iten}
                                      size={100}
                                      width={118}
                                      bgp="-570px"></AlbumCover>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel> 
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  );
});

export default NewAlbum;
