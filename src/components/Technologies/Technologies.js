import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaRegImage } from "react-icons/fa";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>I've worked with the following technologies:</SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        React.js <br />
                        Tailwind.css <br />
                        Bootstrap.css
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node.js <br />
                        MongoDB <br />
                        RESTFUL APIs
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <FaRegImage size="2.5rem" />
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Figma <br />
                        Adobe XD <br />
                        Adobe Photoshop
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
