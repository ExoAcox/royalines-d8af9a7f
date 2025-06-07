"use client"

import { Wrapper } from "@components/layout"
import { AboutRoyalines, WhatWeOffer } from "@features/about/components"
import { Footer } from "@features/home/components"


const About: React.FC<Page> = ({ }) => {

    return <Wrapper >
        <AboutRoyalines />
        <WhatWeOffer />
        <Footer />
    </Wrapper>

}

export default About