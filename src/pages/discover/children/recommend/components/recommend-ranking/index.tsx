import React, { memo, useEffect } from 'react'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'
import { useDispatch } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'

const RecommendRanking = memo(() => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0) as any)
    dispatch(getTopListAction(2) as any)
    dispatch(getTopListAction(3) as any)
  }, [dispatch])
  return (
    
    <RankingWrapper>
      <ThemeHeaderRcm title="榜单"/>
    </RankingWrapper>
  )
})


export default RecommendRanking