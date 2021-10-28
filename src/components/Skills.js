import React from "react"
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

    @media (max-width: 550px) {
        padding-top: 100px;
    }
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
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
                        <ul data-aos="fade-up">
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>AfterEffects</li>
                            <li>Premiere</li>
                        </ul>
                    </div>
                    <div>
                        <ul data-aos="fade-up" data-aos-delay="300">
                            <li>Figma</li>
                            <li>WordPress</li>
                            <li>React</li>
                            <li>Gatsby</li>
                        </ul>
                    </div>
                    <div>
                        <ul data-aos="fade-up" data-aos-delay="600">
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