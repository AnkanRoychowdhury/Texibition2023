import React, { useState } from 'react';
import hackathon from '../images/webp/code-golf.webp';
import concert from '../images/webp/cod.webp';
import ideate from '../images/webp/Ideate.webp';

import {
    HighlightsContainer,
    HighlightsWrapper,
    HighlightsCard,
    HighlightsH1,
    HighlightsIcon,
    HighlightsH2,
    HighlightsP,
    HighlightsBtnWrapper,
    HighlightsButton,
} from './HighlightsElements';

const Highlights = () => {
    const  [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HighlightsContainer id='highlights'>
            <HighlightsH1>Highlights</HighlightsH1>
            <HighlightsWrapper>
                <HighlightsCard>
                    <HighlightsIcon src={hackathon}/>
                    <HighlightsH2>Code Golf</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='hackathon' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            onClick={() => window.open("https://forms.gle/bYqjQJd3MA9gyRmc7", "_self")}
                        >
                            Register Now
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
                <HighlightsCard>
                    <HighlightsIcon src={concert}/>
                    <HighlightsH2>Call Of Duty</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='concert' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            onClick={() => window.open("https://forms.gle/AD7u5qp2ewg6XfYX9", "_self")}
                        >
                            Register Now
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
                <HighlightsCard>
                    <HighlightsIcon src={ideate}/>
                    <HighlightsH2>Ideate</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='mun' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            onClick={() => window.open("https://forms.gle/dgdNJVJwJiMxV2vR7", "_self")}
                        >
                            Register Now
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
            </HighlightsWrapper>
        </HighlightsContainer>
    )
}

export default Highlights