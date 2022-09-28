import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hello, I am <br />
                David Liberal
            </SectionTitle>
            <SectionText>
                I design, create, and develop applications for the web. I am a
                software developer and designer specializing in Front-End Web
                Technologies and Frameworks.
            </SectionText>
            <Button
                onClick={() =>
                    (window.location = "https://github.com/davidliberal0")
                }
            >
                Contact Me
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
