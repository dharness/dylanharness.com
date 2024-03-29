import React, { useState, useEffect } from "react";
import styled from "styled-components";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  float: right;
  margin-left: 20px;
  max-width: 100%;
  video {
    border-radius: 14px;
  }
  @media (max-width: 767px) {
    margin: auto;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const Layout = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

const renderDescription = () => {
  return (
    <>
      Mr. Makes-A-Word is a fun and colorful word game for iOS. In addition to
      13 cooky characters to unlock, the game features over 100 levels that
      increase in difficulty with the player&rsquo;s skill. <br />
      <br />
      It's made with <a href="https://unity.com/">Unity</a> and <b>C#</b> and
      uses a redux-like state management system that I built.
      <br />
      1000s of boards were procedurally generated, solved, and ranked based on
      difficulty - then a selection of those boards were put into the game, with
      a difficulty curve structured to keep the player engaged. The dataset was
      generated by combining existing word lists, and then filtering out words
      that were too long or too short, scientific terminology, outdated, or
      otherwise anomalous. Manual ranking of words was also done, along with
      several other word-metrics.
    </>
  );
};

const MrMakesVideo = ({}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <Layout>
        <VideoWrapper>
          <video
            width="100%"
            controls="controls"
            preload="none"
            poster="software/mr-makes/video-thumbnail.png"
          >
            <source src="software/mr-makes/portrait_v1.mp4" type="video/mp4" />
            Sorry, your browser doesn&apos;t support embedded videos.
          </video>
        </VideoWrapper>
        {isMobile ? <p>{renderDescription()}</p> : renderDescription()}
      </Layout>
    </>
  );
};

export default MrMakesVideo;
