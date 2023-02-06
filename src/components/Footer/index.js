import react from "react";
import {
    FooterContainer,
    CopyrightWrap,
    WebsiteRights,
} from './FooterElements';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <CopyrightWrap>
                <WebsiteRights>
                    <FaCopyright /> Texibition {new Date().getFullYear()} All Rights Reserved | Developed By Ankan Roychowdhury
                </WebsiteRights>           
            </CopyrightWrap>
        </FooterContainer>
    )
}

export default Footer