import React from "react";

import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
    { number: 20, text: "JavaScript" },
    { number: 1000, text: "TypeScript" },
    { number: 1900, text: "Python" },
    { number: 5000, text: "C++" },
];

const Acomplishments = () => (
    <Section>
        <SectionTitle>Languages</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{card.text}</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Acomplishments;
