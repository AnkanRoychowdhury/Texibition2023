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
                        <Img style={{ height: 145, width: 350 }} src={logo} />
                    </LogoRow>
                    <DescriptionRow>
                        <Content>
                            A two day Inter University Annual Technical Festival and Exhibition- “TEXIBITION 2K23” is to be held in February 28th and March 1st from 10:00am – 5:00pm both days by Tech Club , Google developer club and Institution’s Innovation Council of the University. The festival will be a high profile event which would attract students from our University and other colleges/Universities as well to compete on a big scale and showcase their talent. This will be the fourth Edition of TEXIBITION 2K23, the Annual Tech Fest of the University. Last year,the event was attended by 2500 students and this year the festival is expected to be attended by more students’ participants. Possible footfall expected on that day as a whole is 7000 approx. The festival is a forum for similar minds to interact, share and discuss the latest happenings not only in the field of Science and Technology but also cover areas like Health and life science, Bio technology, Green Technology, Renewable and Non-renewable Energy, Waste management etc. The events like The Architect (Prototype Competition), The Ideate (Idea Competition) ,The Legends (Gaming Competition), The Bluster  (Coding Competition) will give the participant the opportunity to excel & present their vivid and advanced imaginations.
                        </Content>
                    </DescriptionRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About