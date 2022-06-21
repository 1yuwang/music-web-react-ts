import { memo } from "react" 
import { Provider } from "react-redux"

import routes from "./router";
import { useRoutes } from "react-router-dom";
import store from './store'

import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";
import AppPlayerBar from "./pages/player/app-player-bar";

export default memo(function App() {
  const element = useRoutes(routes)
  return (
    <Provider store={store}>
      <HYAppHeader />
        {element}
      <HYAppFooter />
      <AppPlayerBar />
    </Provider>    
  );
})

