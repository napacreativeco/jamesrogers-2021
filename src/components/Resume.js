import * as React from "react"
import styled from "styled-components"

const ResumeStyle = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        font-size: 1.8rem;
        padding-bottom: 14px;
    }
    h1 {
        margin: 0;
        padding: 0;
    }
    a { 
        color: inherit;
        text-decoration: none;
        border: 3px solid #000;
        border-radius: 25px;
        padding: 10px 18px;
        cursor: none;
    }
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
    width: 100%;
    padding: 20px;
`;

export default function Resume() {

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
        <ResumeStyle>
            <Row>
                <div>
                    <h1>Resume</h1>
                </div>

                <div>
                    <ul data-aos="fade-up">
                        <li>
                            <a onMouseEnter={mouseGrow} onMouseLeave={mouseShrink} href="/resume_2021.pdf" title="Download Resume">Download now</a>
                        </li>
                    </ul>
                </div>

            </Row>
        </ResumeStyle>
    )
}