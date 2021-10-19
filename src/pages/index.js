import * as React from "react"
import "../style.css"
import styled from 'styled-components'

import Header from "../components/Header"
import RecentWork from "../components/RecentWork"
import Skills from "../components/Skills"
import Resume from "../components/Resume"
import Contact from "../components/Contact"

const pageStyles = {
    margin: "0",
}

const IndexPage = () => {
    return ( 
        <main style={pageStyles}>
            <Header />

            <RecentWork />

            <Skills />

            <Resume />

            <Contact />
        </main>
    )
}

export default IndexPage
