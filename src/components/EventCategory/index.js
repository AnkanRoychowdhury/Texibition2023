import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { EventsData } from './EventsData';
import { FaRupeeSign } from 'react-icons/fa';
import Image from 'react-bootstrap/Image'
import { 
    EventCategoryContainer,
    EventCategoryWrapper,
    EventCategoryRow,
    Column1,
    Column2,
    TextWrapper,
    CategoryTitle,
    CategorySubtitle,
    CategoryDescription,
    EventCardWrapper,
    EventCardImage,
    EventCardTextWrapper,
    EventCardTextTitle,
    EventCardTextSubtitle,
    EventCardTextBody,
    EventCardTextEventCriteria1,
    EventCardTextEventCriteria2,
    EventCardTextEventCriteria3,
    EventCardButtonWrapper,
    EventCardButton,
    EventCardButtonText,
    ImgWrap,
    Img,
} from './EventCategoryElements';

import EventRules from "./EventRules_Texibition2K23.pdf";

const EventCategory = ({
    bg, 
    imgStart, 
    darkTitle,
    darkSubtitle,
    darkDescription,
    darkEventTitle,
    darkEventSubtitle,
    darkEventDescription,
}) => {

    return (
        <div>
            {EventsData.map(data => {
                return (
                    <EventCategoryContainer bg={bg} id={data.id}>
                        <EventCategoryWrapper>
                            <EventCategoryRow imgStart={imgStart}>
                                <Column1 key={data.name}>
                                {/* <ImgWrap>
                                    <Image src={data.image} fluid={true} />
                                </ImgWrap> */}
                                <TextWrapper>
                                    <CategoryTitle darkTitle={darkTitle}>{data.name}</CategoryTitle>
                                    {/* <CategorySubtitle darkSubtitle={darkSubtitle}>{categorySubtitle}</CategorySubtitle> */}
                                    {/* <CategoryDescription darkDescription={darkDescription}>{categoryDescription}</CategoryDescription> */}
                                </TextWrapper>
                                </Column1>
                                <Column2>
                                    <Carousel fade interval='1500' touch={true} indicators={false}>
                                            {data.events.map(event => {
                                                return (
                                                    <Carousel.Item key={event.name}>
                                                        <EventCardWrapper>
                                                            <EventCardImage img={ event.image } onClick={() => window.open(`${event.registerUrl}`, "_self")}/>
                                                            <EventCardTextWrapper onClick={() => window.open(`${event.registerUrl}`, "_self")}>
                                                
                                                                    <EventCardTextTitle darkEventTitle={darkEventTitle}>{event.name}</EventCardTextTitle>
                                                                    {
                                                                        event.description ?
                                                                        <EventCardTextBody darkEventDescription={darkEventDescription}>Co-Event : {event.description}</EventCardTextBody>
                                                                        :
                                                                        <EventCardTextEventCriteria1 style={{fontSize: '1.3rem'}}>{event.slogan}</EventCardTextEventCriteria1>
                                                                    } 
                                                                    <EventCardTextSubtitle darkEventSubtitle={darkEventSubtitle}><FaRupeeSign />{event.price}</EventCardTextSubtitle>
                                                                    <EventCardTextEventCriteria1>{event.group}</EventCardTextEventCriteria1>                    
                                                                    <EventCardTextEventCriteria2>{event.size}</EventCardTextEventCriteria2>
                                                                    <EventCardTextEventCriteria3 onClick={() => window.open(`${event.registerUrl}`, "_self")}>Register Now</EventCardTextEventCriteria3>
                                                            </EventCardTextWrapper>
                                                            <EventCardButtonWrapper>
                                                                <EventCardButton href={EventRules} download="EventRules" target='_blank'>
                                                                    Check Events Rule
                                                                </EventCardButton>
                                                            </EventCardButtonWrapper>
                                                        </EventCardWrapper>
                                                    </Carousel.Item>  
                                                );
                                            })}
                                    </Carousel>
                                </Column2>
                            </EventCategoryRow>
                        </EventCategoryWrapper>
                    </EventCategoryContainer>
                );
            })};
        </div>
    )
}

export default EventCategory;