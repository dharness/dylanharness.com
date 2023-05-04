import React from "react";
import ReactPlayer from "react-player";

export function Video(props: any) {
  const { width, height, style } = props;
  const videoSettings = {
    url: props.src,
    playing: true,
    loop: true,
    volume: 0,
    playsinline: true,
    height,
    width,
    style,
  };
  return (
    <>
      <ReactPlayer {...videoSettings} />
    </>
  );
}

Video.defaultProps = {
  width: "",
  height: "",
};
