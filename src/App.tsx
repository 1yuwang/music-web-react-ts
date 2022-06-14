import { memo } from "react" 

import routes from "./router";
import { useRoutes } from "react-router-dom";

import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";

export default memo(function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <HYAppHeader />
        {element}
      <HYAppFooter />
    </div>    
  );
})

