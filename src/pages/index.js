import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import "../style.css"
import Aos from "aos"
import "aos/dist/aos.css"

import Hero from "../components/Hero"
import Header from "../components/Header"
import RecentWork from "../components/RecentWork"
import Skills from "../components/Skills"
import Resume from "../components/Resume"
import Contact from "../components/Contact"

import CustomCursor from "../components/CustomCursor";
import CustomCursorManager from "../components/CustomCursor/context/manager";


const pageStyles = {
    margin: "0",
    position: "relative"
}

const LoadingStyles = styled.div`
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background:#e5e5e5;
    height: 100vh;
    width: 100vw;
    z-index: 99999;
`;

const IndexPage = () => {

    const [loading, setLoading] = useState('1');
    const [loaded, setLoaded] = useState('flex');

    useEffect(() => {
      setTimeout(() => {
          setLoading('0');
          setLoaded('none');
        }, 1000);

      Aos.init({ duration: 1000 });
    }, [])

    return ( 
        <CustomCursorManager>
        <main style={pageStyles}>

            <LoadingStyles className="preloader" style={{ 'opacity': `${loading}`, 'display': `${loaded}` }}>
                LOADING
            </LoadingStyles>

            <CustomCursor />

            <Header  />

            <Hero />

            <RecentWork />

            <Skills />

            <Resume />

            <Contact />

        </main>
        </CustomCursorManager>
    )
}

export default IndexPage
