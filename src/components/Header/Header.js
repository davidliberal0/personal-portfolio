import Link from "next/link";
import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillCode,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
    Container,
    Span,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
} from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "20px",
                    }}
                >
                    <AiFillCode size="3rem" /> <Span>David Liberal</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#projects">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#projects">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/davidliberal0">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/david-liberal-2380b21b3/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/nightly.dev/">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
