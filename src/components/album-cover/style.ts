import styled from 'styled-components';
import { PropsTypes } from "./type"

export const AlbumWrapper = styled.div`
  width: ${(props: PropsTypes) => props.width};

  .album-image {
    position: relative;
    width: ${(props: PropsTypes) => props.width};
    height: ${(props: PropsTypes) => props.size};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props: PropsTypes) => props.size};
      height: ${(props: PropsTypes) => props.size};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props: PropsTypes) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props: PropsTypes) => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`