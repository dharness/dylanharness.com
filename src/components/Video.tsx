import React from "react";
import Vimeo from "@u-wave/react-vimeo";

export function Video(props: any) {
  const { vimeoId } = props;
  const vimeoSettings = {
    video: vimeoId,
    autoplay: false,
    volume: 1,
    autopause: true,
    controls: true,
    responsive: true,
    playsInline: false,
  };
  return (
    <>
      <Vimeo {...vimeoSettings} />
    </>
  );
}
