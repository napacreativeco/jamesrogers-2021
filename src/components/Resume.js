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
    a { color: inherit; text-decoration: none; border: 2px solid #000; border-radius: 25px; padding: 10px 18px; }
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
                        <li>
                            <a href="/resume_2021.pdf" title="Download Resume">Download now</a>
                        </li>
                    </ul>
                </div>

            </Row>
        </ResumeStyle>
    )
}