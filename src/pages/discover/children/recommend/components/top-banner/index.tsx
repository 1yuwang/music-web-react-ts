import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopBannerAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { CarouselRef } from "antd/lib/carousel";

const TopBanner = memo((props) => {
  const [ currentIndex, setCurrentIndex] = useState(0)
  const { topBanners } = useSelector(
    (state: any) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const bannerRef = useRef<any>()
  useEffect(() => {
    dispatch(getTopBannerAction() as any);
  }, [dispatch]);

  const bannerChange = useCallback((from: number, to: number) => {
    setCurrentIndex(to)
  }, [])

  const bgImage: string = topBanners[currentIndex]?.imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item: any) => {
                return(
                  <div key={item.targetId} className="banner-item">
                    <img className="image" src={item.imageUrl} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={ e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={ e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBanner;
