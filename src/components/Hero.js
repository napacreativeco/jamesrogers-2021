import * as React from "react"
import styled from "styled-components"

const HeroStyles = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 60px;
    h1 {
        font-size: 4rem;
        margin: 0;
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 3.5rem;
            margin: 0;
        }
    }
    @media (max-width: 550px) {
        h1 {
            font-size: 3rem;
            margin: 0;
        }
    }
`;

export default function Hero() {
    return (
        <HeroStyles>
            <h1 className="target">Front-End Development, Product &amp; Promotional Design</h1>
            <p>James Rogers.</p>
        </HeroStyles>
    )
}