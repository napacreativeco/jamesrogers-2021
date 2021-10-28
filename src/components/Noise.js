import React from "react"
import styled from "styled-components"

import noiseGif from '../images/noise.gif';

const NoiseStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    width: 100vw;
    height: 100vh;
    opacity: 0.2;
    background-blend-mode: screen;
`;

export default function Noise() {
    return (
        <NoiseStyle style={{ 'background': `url(${noiseGif})`}}>
            
        </NoiseStyle>
    )
}