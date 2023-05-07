import React from "react";

export function Video(props: any) {
  const { width, height, style, src } = props;
  const defaultStyle = { width: "100%", height: "100%" };

  const videoSettings = {
    muted: true,
    controls: false,
    autoPlay: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: { ...defaultStyle },
  };
  return (
    <>
      <div style={{ width, height, ...style }}>
        <video {...videoSettings}>
          {src.map((s: string) => (
            <source src={s} />
          ))}
        </video>
      </div>
    </>
  );
}

Video.defaultProps = {
  width: "",
  height: "",
};
