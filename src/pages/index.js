import React from "react"
import Layout from "../components/layout"

import Hero from "../components/Hero"
import RecentWork from "../components/RecentWork"
import Skills from "../components/Skills"
import Resume from "../components/Resume"
import Contact from "../components/Contact"



const IndexPage = () => {

    return (
        <Layout>
            <Hero />

            <RecentWork />

            <Skills />

            <Resume />

            <Contact />
        </Layout>
    )
}

export default IndexPage
