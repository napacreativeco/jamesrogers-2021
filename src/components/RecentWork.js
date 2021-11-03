import React, { useState } from "react"
import styled from "styled-components"

import WebIllustration from "../images/web-illustration.png"
import Farma from "../images/farmapothica.jpg"
import Amex from "../images/amex.png"
import FHGT from "../images/fhgt.jpg"
import Thrifty from "../images/thrifty.jpg"
import TaskMatte from "../images/taskmatte.png"


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
    grid-template-columns: 1fr 4fr;
    height: 100%;
    width: 100%;
    padding: 20px;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

const Slides = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    grid-gap: 4px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

const Slide = styled.div`
    background-color: #000;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s;
    height: 100%;
    position: relative;
    &:hover {
        transform: scale(1.1) rotate(2deg);
    }

    padding-top: 75%; /* 4:3 Aspect Ratio (divide 3 by 4 = 0.75) */
    
`;

const SlideLabel = styled.div`
    display: none;
    flex-direction: column;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    position: absolute;
    transform: rotate(-2deg);
    padding: 20px;
    h2 {
        padding: 0px;
        margin: 0px;
    }
    p {

    }
    a { 
        border: 2px solid #fff;
        border-radius: 50px;
        padding: 6px 10px;
    }
    a:hover {
        color: #000 !important;
        background: #fff;
    }
`;

const SlideMask = styled.div`
    overflow: hidden;
`;


export default function RecentWork() {

    const mouseGrow = () => {
        const cursors = document.querySelector('.main-cursor .main-cursor-background');
        cursors.style.width = '60px';
        cursors.style.height = '60px';
    }
    const mouseShrink = () => {
        const cursors = document.querySelector('.main-cursor .main-cursor-background');
        cursors.style.width = '20px';
        cursors.style.height = '20px';
    }

    const [one, setOne] = useState({display: 'none', animation: 'none'});
    const [two, setTwo] = useState({display: 'none'});
    const [three, setThree] = useState({display: 'none'});
    const [four, setFour] = useState({display: 'none'});
    const [five, setFive] = useState({display: 'none'});
    const [six, setSix] = useState({display: 'none'});

    return (
        <RecentStyles id="recent-work">

            <Row>
                <div>
                    <h1>Recent Work</h1>
                </div>

                <Slides data-aos="fade-up">
                    <SlideMask>
                        <Slide
                            onMouseEnter={e => {
                                mouseGrow();
                                setOne({ display: 'flex', animation: 'fadeUp 1s ease' });
                            }}
                            onMouseLeave={e => {
                                mouseShrink();
                                setOne({ display: 'none' })
                            }}
                            style={{
                                'background': `url(${TaskMatte})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            <SlideLabel style={one} className="slideLabel">
                                <h2>TaskMatte</h2>
                                <p>UI Design</p>

                                <div style={{ 'marginTop': '10px' }}>
                                    <a href="/taskmatte/" style={{ 'color': '#fff' }}>+ Read more</a>
                                </div>
                            </SlideLabel>
                        </Slide>
                    </SlideMask>

                    <SlideMask>
                        <Slide 
                            onMouseEnter={e => {
                                mouseGrow();
                                setTwo({ display: 'flex', animation: 'fadeUp 1s ease' });
                            }}
                            onMouseLeave={e => {
                                mouseShrink();
                                setTwo({ display: 'none' })
                            }}
                            style={{ 
                                'background': `url(${WebIllustration})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >   
                            <SlideLabel style={two} className="slideLabel">Illustration</SlideLabel>
                        </Slide>
                    </SlideMask>

                    <SlideMask>
                        <Slide
                            onMouseEnter={e => {
                                mouseGrow();
                                setThree({ display: 'flex', animation: 'fadeUp 1s ease' });
                            }}
                            onMouseLeave={e => {
                                mouseShrink();
                                setThree({ display: 'none' })
                            }}
                            style={{ 
                                'background': `url(${Farma})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            <SlideLabel style={three} className="slideLabel">Farmapothica</SlideLabel>
                        </Slide>
                    </SlideMask>

                    <SlideMask>
                        <Slide
                            onMouseEnter={e => {
                                mouseGrow();
                                setFour({ display: 'flex', animation: 'fadeUp 1s ease' });
                            }}
                            onMouseLeave={e => {
                                mouseShrink();
                                setFour({ display: 'none' })
                            }}
                            style={{
                                'background': `url(${Amex})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            <SlideLabel style={four} className="slideLabel">Sharpen.design Challenges</SlideLabel>
                        </Slide>
                    </SlideMask>

                    <SlideMask>
                        <Slide
                            onMouseEnter={e => {
                                mouseGrow();
                                setFive({ display: 'flex', animation: 'fadeUp 1s ease' });
                            }}
                            onMouseLeave={e => {
                                mouseShrink();
                                setFive({ display: 'none' })
                            }}
                            style={{ 
                                'background': `url(${FHGT})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            <SlideLabel style={five} className="slideLabel">Firm Hands Gentle Touch</SlideLabel>
                        </Slide>
                    </SlideMask>
                    
                    <SlideMask>
                        <Slide
                            onMouseEnter={e => {
                                mouseGrow();
                                setSix({ display: 'flex', animation: 'fadeUp 1s ease' });
                            }}
                            onMouseLeave={e => {
                                mouseShrink();
                                setSix({ display: 'none' })
                            }}
                            style={{
                                'background': `url(${Thrifty})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            <SlideLabel style={six} className="slideLabel">Thriftly</SlideLabel>
                        </Slide>
                    </SlideMask>

                </Slides>

            </Row>

        </RecentStyles>
    )
}