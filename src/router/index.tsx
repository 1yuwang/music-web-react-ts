import Discover from "@/pages/discover";
import Recommend from "@/pages/discover/children/recommend"
import Ranking from "@/pages/discover/children/ranking"
import Songs from "@/pages/discover/children/songs"
import Djradio from "@/pages/discover/children/djradio"
import Artist from "@/pages/discover/children/artist";
import Album from "@/pages/discover/children/album"

import Mine from "@/pages/mine";
import Friend from "@/pages/friend";
import { Navigate } from  "react-router-dom"
const routes = [
  {
    path: "/",
    element: <Navigate to="/discover"/>
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover/recommend",
        element: <Recommend />
      },
      {
        path: "/discover/ranking",
        element: <Ranking />
      },
      {
        path: "/discover/songs",
        element: <Songs />
      },
      {
        path: "/discover/djradio",
        element: <Djradio />
      },
      {
        path: "/discover/artist",
        element: <Artist />
      },
      {
        path: "/discover/album",
        element: <Album />
      }
    ]  
  },
  {
    path: "/mine",
    element: <Mine />
  },
  {
    path: "/friend",
    element: <Friend />
  },
]

export default routes