import React, { memo, useEffect } from "react";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { HotRecommendWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendsAction } from "../../store/actionCreators";
import SongsCover from "@/components/songs-cover";

const HotRecommend = memo(() => {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(
    (state: any) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(8) as any);
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {
          hotRecommends.map((item: any) => {
            return(
              <SongsCover key={item.id} info={item}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  );
});

export default HotRecommend;
