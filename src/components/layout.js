import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"
import "../style.css"

import Header from "../components/Header"
import CustomCursor from "../components/CustomCursor";
import CustomCursorManager from "../components/CustomCursor/context/manager";


const pageStyles = {
    margin: "0",
    position: "relative"
}

const LoadingStyles = styled.div`
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background:#e5e5e5;
    height: 100vh;
    width: 100vw;
    z-index: 99999;
`;


export default function Layout({ children }) {

    const [loading, setLoading] = useState('1');
    const [loaded, setLoaded] = useState('flex');

    useEffect(() => {
      setTimeout(() => {
          setLoading('0');
          setLoaded('none');
        }, 1000);

      Aos.init({ duration: 1000 });
    }, []);

    return (
        <CustomCursorManager>      

            <LoadingStyles className="preloader" style={{ 'opacity': `${loading}`, 'display': `${loaded}` }}>
                LOADING
            </LoadingStyles>

            <CustomCursor />

            <Header  />
            
            <main style={pageStyles}>
                {children}
            </main>

        </CustomCursorManager>
    )
}