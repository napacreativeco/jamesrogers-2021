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
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
    height: 100%;
    width: 100%;
    padding: 20px;
`;

export default function Resume() {
    return (
        <ResumeStyle>
            <Row>
                <div>
                    <h1>Resume</h1>
                </div>

                <div>
                    <ul>
                        <li data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">Download now</li>
                    </ul>
                </div>

            </Row>
        </ResumeStyle>
    )
}