import React from "react";
import styled from "styled-components/macro";

const StyledVideo = styled.video`
  width: 100%;
  min-width: 100%;
  max-height: 100%;
`;

export function Video(props: any) {
  const { width, height, style, src, img } = props;

  const videoSettings = {
    muted: true,
    controls: false,
    autoPlay: true,
    loop: true,
    playsInline: true,
    preload: "auto",
  };
  return (
    <>
      <div style={{ width, height, ...style }}>
        <StyledVideo {...videoSettings}>
          {src.map((s: string) => (
            <source src={s} key={s} />
          ))}
          {img && <img src={img} alt="" />}
        </StyledVideo>
      </div>
    </>
  );
}

Video.defaultProps = {
  width: "",
  height: "",
};
