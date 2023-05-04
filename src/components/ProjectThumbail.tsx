import React from "react"
import styled from "styled-components/macro";
import { useNavigate, matchPath, useLocation, matchRoutes } from "react-router-dom";
import thumbnails from "../assets/projects/*/thumbnail.png";
import { kebabToTitle } from "../utils";


const ProjectThumbnailWrapper = styled.div`
    background: blue;
    position: relative;
    &:hover {
        cursor: pointer;
    }
`

const ProjectThumbnailImg = styled.img`
    justify-self: start;
    &:nth-of-type(2n) { justify-self: end; }
    max-width: 100%;
    background: tan;
    `

const ProjectThumbnailOverlay = styled.div<{$hoverColor: string}>`
    position: absolute;
    z-index: 1;
    background: ${props => props.$hoverColor};
    width: 100%;
    height: 100%;
    opacity: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    ${ProjectThumbnailWrapper}:hover & {
        opacity: 70%;
    }
`

const ProjectTitle = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    color: white;
    ${ProjectThumbnailWrapper}:hover & {
        opacity: 100%;
    }
`

export function ProjectThumbnail(props : any) {
    const { hoverColor, name } = props;
    const thumbnail = thumbnails[name];
    const navigate = useNavigate();
    const onThumbnailClicked = () => {
        navigate(name);
    };
    return (
            <ProjectThumbnailWrapper onClick={onThumbnailClicked}>
                <ProjectTitle>
                    <p>{kebabToTitle(name)}</p>
                </ProjectTitle>
                <ProjectThumbnailOverlay $hoverColor={hoverColor}/>
                <ProjectThumbnailImg src={thumbnail}/>
            </ProjectThumbnailWrapper>
    )
}
