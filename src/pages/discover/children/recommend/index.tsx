import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import TopBanner from './components/top-banner'
import HotRecommend from './components/hot-recommend'
import NewAlbum from './components/new-album';
import RecommendRanking from './components/recommend-ranking';

const Recommend = memo((props: any) => {
  
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend
// const mapStateToProps = (state: any) => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = (dispatch: any) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))




