import * as React from "react"
import styled from "styled-components"

const SkillsStyles = styled.section`
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
        padding-bottom: 20px;
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

const SkillList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

export default function Skills() {
    return (
        <SkillsStyles>
                
            <Row>
                <div>
                    <h1>Skills</h1>
                </div>

                <SkillList>
                    <div>
                        <ul data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>AfterEffects</li>
                            <li>Premiere</li>
                        </ul>
                    </div>
                    <div>
                        <ul data-sal="slide-up" data-sal-delay="600" data-sal-easing="ease">
                            <li>Figma</li>
                            <li>WordPress</li>
                            <li>React</li>
                            <li>Gatsby</li>
                        </ul>
                    </div>
                    <div>
                        <ul data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease">
                            <li>HTML</li>
                            <li>CSS, SCSS</li>
                            <li>JavaScript, jQuery</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </SkillList>

            </Row>
        </SkillsStyles>
    )
}