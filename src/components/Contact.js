import * as React from "react"
import styled from "styled-components"

const ContactStyles = styled.section`
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
        text-decoration: none;
        color: inherit;
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

const ContactList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

export default function Contact() {
    return (
        <ContactStyles>
                
            <Row>
                <div>
                    <h1>Contact</h1>
                </div>

                <ContactList>
                    <div>
                        <ul data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
                            <li>
                                <a href="https://www.napacreativeco.com" title="Napa Creative Company">Napa Creative Co.</a>
                            </li>
                            <li>
                                <a href="https://www.dribbble.com/jamesadamrogers" title="Dribbble">Dribbble</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jamesadamrogers/" title="LinkedIn">LinkedIn</a>
                            </li>
                            <li>
                                <a href="mailto:hello@napacreativeco.com" title="Email">Email</a>
                            </li>
                        </ul>
                    </div>
                </ContactList>

            </Row>
        </ContactStyles>
    )
}