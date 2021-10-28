import * as React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    position: fixed;
    z-index: 3;
    width: 100%;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 20px;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;

const Logo = styled.div`
    span {
        background: #000;
        color: #f5f3f1;
        padding: 6px;
        font-size: 0.7rem;
        white-space: nowrap;
    }
    @media (max-width: 550px) {
        display: flex;
        justify-content: center;
    }
`;

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 550px) {
        display: none;
    }
`;




export default function Header() {
    return (
        <HeaderStyles>
            <Row>
                <Logo>
                    <span>James Rogers</span>
                </Logo>

                <Item>
                    <ul>
                        <li>Digital Product Design</li>
                        <li>Web Development</li>
                    </ul>

                    <ul>
                        <li>Freelance: napacreativeco.com</li>
                        <li>Email: hello@napacreativeco.com</li>
                    </ul>
                </Item>
            </Row>

        </HeaderStyles>
    )
}