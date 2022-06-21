import React, { memo } from "react";

import { 
  PlaybarWrapper, 
  Control, 
  PlayInfo, 
  Operator 
} from "./style";

const AppPlayerBar = memo(() => {
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={ true }>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo></PlayInfo>
        <Operator sequence={1}></Operator>
      </div>
    </PlaybarWrapper>
  );
});

export default AppPlayerBar;
