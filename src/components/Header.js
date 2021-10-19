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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
`;

const Logo = styled.div`
    span {
        background: #000;
        color: #f3e1d4;
        padding: 6px;
        font-size: 1.2rem;
    }
`;

const Item = styled.div`

    @media (max-width: 550px) {
        display: none;
    }
`;

const MobileItem = styled.div`
    display: none;
    padding: 0px 0px 0px 20px;
    p {
        padding: 0;
        margin: 0;
    }

    @media (max-width: 550px) {
        display: flex;
    }
`;




export default function Header() {
    return (
        <HeaderStyles>
            <Row>
                <Logo>
                    <span>James Rogers</span>
                </Logo>

                <Item style={{ 'marginRight': '10px'}}>
                    <ul>
                        <li>Front-End Development</li>
                        <li>Product Design</li>
                    </ul>
                </Item>

                <Item>
                    <ul>
                        <li>napacreativeco.com</li>
                        <li>hello@napacreativeco.com</li>
                    </ul>
                </Item>
            </Row>
            <MobileItem>
                <p>Front-End Development, Product Design</p>
            </MobileItem>

        </HeaderStyles>
    )
}