import React from "react";
import logo from '../Countdown/logo.png';
import { BiArrowBack } from 'react-icons/bi';

import {
    AboutContainer,
    AboutWrapper,
    HeadRow,
    LogoRow,
    WebsiteRow,
    DescriptionRow,
    WebsiteButton,
    BackButton,
    Content,
    Img,
} from './AboutElements';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()

    return (
        <>
            <AboutContainer>
                <HeadRow>
                    <BackButton onClick={() => navigate(-1)}><BiArrowBack /></BackButton>
                </HeadRow>
                <AboutWrapper>
                    <LogoRow>
                        <Img style={{ height: 150 }} src={logo} />
                    </LogoRow>
                    <DescriptionRow>
                        <Content>Brainware University announces the imminent, and the most awaited event, two-day Inter-university/college Annual Technology Festival and Exhibition-“Texibition’ 2K23”, to be held in the varsity campus on February 28th & March 1st, 2023. This coveted fest is to be organized jointly by the Institute Innovation Cell and the Tech-Club, a collaborative programme widely by the students, of the students, and for the students. Braced highly by the teachers and support staff, the platform shall offer an exposure to the new generation of students to display their innovative ideas not only in the domains of engineering but also in the fields of Biotechnology, Pharmacy, Allied Health Sciences, Multimedia, Nursing, Management, Physics, Mathematics, English, Computer Science, Law and Journalism.</Content>
                    </DescriptionRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About