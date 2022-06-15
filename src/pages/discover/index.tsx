import React, { memo, useEffect } from 'react'

import { discoverMenu } from "@/common/local-data"

import xhr from "@/network"

import { NavLink, Outlet, } from 'react-router-dom'

import { DiscoverWrapper, TopMenu } from "./style"

const Discover = memo((props) => {

  useEffect(() => {
    xhr.get({
      url: "/banner"
    }).then((res: any) => {
      console.log(res)
    })
  })

  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map(item => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  )
})

export default Discover