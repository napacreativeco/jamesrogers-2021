import * as React from "react"
import styled from "styled-components"

import WebIllustration from "../images/web-illustration.png"
import Farma from "../images/farmapothica.jpg"
import Amex from "../images/amex.png"
import SonomaPac from "../images/sonomapac.jpg"
import FHGT from "../images/fhgt.jpg"
import Thrifty from "../images/thrifty.jpg"


const RecentStyles = styled.section`
    min-height: 100vh;
    width: 100%;
    display: block;
    padding-top: 10vh;
    h1 {
        margin: 0;
        padding: 0;
    }
    @media (max-width: 375px) {
        margin-bottom: 100px;
    }
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
    width: 100%;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

const Slides = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Slide = styled.div`
    @media (min-width: 1300px) {
        height: 450px;
    }
    height: 300px;
    background-color: #000;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function RecentWork() {
    return (
        <RecentStyles>

            <Row>
                <div style={{ 'padding': '20px' }}>
                    <h1>Recent Work</h1>
                </div>

                <Slides>
                    <Slide style={{ 'background': `url(${WebIllustration})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}>&nbsp;</Slide>
                    <Slide style={{ 'background': `url(${Farma})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}>&nbsp;</Slide>
                    <Slide style={{ 'background': `url(${Amex})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}>&nbsp;</Slide>
                    <Slide style={{ 'background': `url(${SonomaPac})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}>&nbsp;</Slide>
                    <Slide style={{ 'background': `url(${FHGT})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}>&nbsp;</Slide>
                    <Slide style={{ 'background': `url(${Thrifty})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}>&nbsp;</Slide>
                </Slides>

            </Row>

        </RecentStyles>
    )
}