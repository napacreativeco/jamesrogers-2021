import * as React from "react"
import styled from "styled-components"

const GridBG = styled.div`
    opacity: 0.1;
    position: fixed;
    z-index: -2;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: stretch;

    @media (max-width: 550px) {
        display: none;
    }
`;

export default function GridBackground() {
    return (
        <GridBG>
            <div style={{ 'border-left': '2px solid #000', 'border-right': '1px solid #000' }}></div>

            <div style={{ 'display': 'grid', 'grid-template-columns': '1fr 1fr', 'alignItems': 'stretch' }}>
                <div style={{ 'border-right': '1px solid #000' }}></div>
            </div>
        </GridBG>
    )
}