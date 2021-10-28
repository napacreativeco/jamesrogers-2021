import * as React from "react"
import styled from "styled-components"

import Scroll from '../images/scroll.svg';

const HeroStyles = styled.section`
    width: 100%;
    height: 100vh;
    padding: 60px;

    #mouse {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
    a {
        margin: 0;
        padding: 0;
    }
    transition: all 0.7s;
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

const Icon = styled.img`
    position: absolute;
    bottom: 20px;
    width: 120px;
    
    animation: bob infinite 1s;
    @keyframes bob {
        0% {bottom:20px;}
        100% {bottom:10px;}
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export default function Hero() {
    
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;

        document.getElementById("mouse").style.opacity = 1 - currentScrollPos / 250;

        console.log(currentScrollPos);
    }

    return (
        <HeroStyles>
            <div id="mouse">
                <h1 className="target">Digital  Product Design,<br />Web Development</h1>
                <p>James Rogers.</p>
                <Icon data-aos="fade-up" data-aos-delay="5000" src={Scroll} alt="" width="200px" />
            </div>
            
        </HeroStyles>
    )
}