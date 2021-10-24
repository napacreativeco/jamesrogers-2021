import * as React from "react"
import "../style.css"
import AnimatedCursor from "react-animated-cursor"

import Header from "../components/Header"
import RecentWork from "../components/RecentWork"
import Skills from "../components/Skills"
import Resume from "../components/Resume"
import Contact from "../components/Contact"
import GridBackground from "../components/GridBG"


const pageStyles = {
    margin: "0",
    position: "relative"
}

const IndexPage = () => {
    return ( 
        <main style={pageStyles}>

            <AnimatedCursor
            innerSize={15}
            outerSize={20}
            color='0, 0, 0'
            outerAlpha={0.2}
            innerScale={2}
            outerScale={3}
            />

            <GridBackground />

            <Header />

            <RecentWork />

            <Skills />

            <Resume />

            <Contact />

        </main>
    )
}

export default IndexPage
