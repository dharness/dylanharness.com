import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import styled from "styled-components/macro";
import { AspectRatio } from "../projectData";

const NoJump = styled.div<{ $heightRatio: number }>`
  min-height: min(
    calc(${(props) => props.$heightRatio} * 80vw),
    calc(${(props) => props.$heightRatio} * 900px)
  );
`;

export function VimeoVideo(props: any) {
  const { vimeoId, aspectRatio } = props;
  const heightRatio = aspectRatio == AspectRatio.$1x1 ? 1 : 0.75;
  const vimeoSettings = {
    video: vimeoId,
    autoplay: false,
    volume: 1,
    autopause: true,
    controls: true,
    responsive: true,
    playsInline: false,
    loop: true,
  };
  return (
    <NoJump $heightRatio={heightRatio}>
      <Vimeo {...vimeoSettings} />
    </NoJump>
  );
}
