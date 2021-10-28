import React from "react"
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
    &:hover {
        transform: scale(1.1) rotate(2deg);
    }
    position: relative;

    padding-top: 75%; /* 4:3 Aspect Ratio (divide 3 by 4 = 0.75) */
    
`;

const SlideLabel = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    background: #000;
    color: #fff;
`;

const SlideMask = styled.div`

    overflow: hidden;
`;

export default function RecentWork() {

    const mouseGrow = () => {
        const cursors = document.querySelector('.main-cursor .main-cursor-background');
        cursors.style.width = '100px';
        cursors.style.height = '100px';
    }
    const mouseShrink = () => {
        const cursors = document.querySelector('.main-cursor .main-cursor-background');
        cursors.style.width = '20px';
        cursors.style.height = '20px';
    }


    return (
        <RecentStyles>

            <Row>
                <div>
                    <h1>Recent Work</h1>
                </div>

                <Slides data-aos="fade-up">
                    <SlideMask>
                        <Slide
                            onMouseEnter={mouseGrow}
                            onMouseLeave={mouseShrink}
                            className="target"
                            style={{
                                'background': `url(${TaskMatte})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            <SlideLabel className="slideLabel">TaskMatte</SlideLabel>
                        </Slide>
                    </SlideMask>

                    <SlideMask>
                        <Slide 
                            onMouseEnter={mouseGrow}
                            onMouseLeave={mouseShrink}
                            className="target"
                            style={{ 
                                'background': `url(${WebIllustration})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            &nbsp;
                        </Slide>
                    </SlideMask>

                    <SlideMask>
                        <Slide
                            onMouseEnter={mouseGrow}
                            onMouseLeave={mouseShrink}
                            className="target"
                            style={{ 
                                'background': `url(${Farma})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            &nbsp;
                        </Slide>
                    </SlideMask>

                    <SlideMask>
                        <Slide
                            onMouseEnter={mouseGrow}
                            onMouseLeave={mouseShrink}
                            className="target"
                            style={{
                                'background': `url(${Amex})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            &nbsp;
                        </Slide>
                    </SlideMask>

                    <SlideMask>
                        <Slide
                            onMouseEnter={mouseGrow}
                            onMouseLeave={mouseShrink}
                            className="target"
                            style={{ 
                                'background': `url(${FHGT})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            &nbsp;
                        </Slide>
                    </SlideMask>
                    
                    <SlideMask>
                        <Slide
                            onMouseEnter={mouseGrow}
                            onMouseLeave={mouseShrink}
                            className="target"
                            style={{
                                'background': `url(${Thrifty})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center'
                            }}
                        >
                            &nbsp;
                        </Slide>
                    </SlideMask>

                </Slides>

            </Row>

        </RecentStyles>
    )
}