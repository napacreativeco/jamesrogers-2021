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
        font-size: 4vw;
        margin: 0;
    }
    p {
        font-size: 2vw;
    }
    @media (max-width: 768px) {
        padding: 20px;
        h1 {
            font-size: 5vw;
            margin: 0;
        }
        p {
            font-size: 3vw;
        }
    }
    @media (max-width: 550px) {
        padding: 10px;
        h1 {
            font-size: 2rem;
            margin: 0;
        }
        p {
            font-size: 4vw;
        }
    }
`;

export default function Hero() {
    return (
        <HeroStyles>
            <h1 className="target">Front-End Development,<br />Product Design</h1>
            <p>James Rogers.</p>
        </HeroStyles>
    )
}