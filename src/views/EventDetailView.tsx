import { FC } from "react";
import { styled } from "styled-components";
import events from "../assets/variable/events";

import { useParams } from "react-router-dom";
import EventsView from "./EventsView";
import EventCard from "../components/EventCard";
import SeeAllEventsButton from "../components/SeeAllEventsButtton";
import Button from "../components/Button";
import calendar from '../assets/icon/calendar.svg'
import pin from '../assets/icon/pin.svg'
import quote from '../assets/icon/quote.svg'

const EventDetailView: FC = () => {
    
    const { eventId } = useParams()

    if (!eventId) {
        window.location.href = '/events'
        return <EventsView />
    } 

    const selectedEvent = events.find(event => event.id === parseInt(eventId))

    if (!selectedEvent) {
        window.location.href = '/events'
        return <EventsView />
    } 

    return (
        <StyledEventDetailView>
            <div className="container">
                <div className="page-title">Events</div>
                <div className="event-detail-view__selected-event">
                    <div className="event-detail-view__selected-event__image">
                        <img src={selectedEvent.image} />
                    </div>
                    <div className="event-detail-view__selected-event__rsvp">
                        <div className="event-detail-view__selected-event__rsvp__info-calendar-wrapper">
                            <div className="event-detail-view__selected-event__rsvp__info">
                                <div className="page-title">
                                    {selectedEvent.title}
                                </div>
                                <div className="event-detail-view__selected-event__rsvp__description">
                                    <div className="event-detail-view__selected-event__rsvp__description__date">
                                        <img src={calendar} />
                                        <div>September 5, 2023 ~ August 5, 2023</div>
                                    </div>
                                    <div className="event-detail-view__selected-event__rsvp__description__note">
                                        <img src={pin} />
                                        <div>Only for Hashed Potato Club Members</div>
                                    </div>
                                </div>
                            </div>
                            <div className="event-detail-view__selected-event__rsvp__calendar">
                                <div className="event-detail-view__selected-event__rsvp__calendar__month">9월</div>
                                <div className="event-detail-view__selected-event__rsvp__calendar__date page-title">05</div>
                            </div>
                        </div>
                        <Button 
                            onClick={
                                () => { console.log('RSVP') 
                            }}
                        >
                            RSVP
                        </Button>
                    </div>
                </div>
                <div className="event-detail-view__selected-event__description-details-wrapper">
                    <div className="event-detail-view__selected-event__description">
                        <div className="event-detail-view__selected-event__description__header">Description</div>
                        <div className="event-detail-view__selected-event__description__content">
                        Factomind, a market specialist providing data-driven growth strategies to the Web3 builders, is hosting a brunch event for KBW participants! KBW Amuse-Bouche serves as an appetizer to KBW, a delightful prelude to the main event. Enjoy a variety of food and drinks while networking with builders, founders, investors, and Web3 enthusiasts. It would strike a much lighter note, so come casually.
                        </div>
                    </div>
                    <div className="event-detail-view__selected-event__details">
                        <div className="event-detail-view__selected-event__details__header">
                            Details
                        </div>
                        <div className="event-detail-view__selected-event__details__content">
                            <div>
                                <img src={calendar} />
                                <div>Sep 4, 10AM - 12PM</div>
                            </div>
                            <div>
                                <img src={quote} />
                                <div>Networking Event</div>
                            </div>
                            <div>
                                <img src={pin} />
                                <div>3F, Milim Tower 14 Teheran-ro 4gil, Gangnam-gu, Seoul</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-detail-view__other-events">
                    <div className="event-detail-view__other-events__subtitle"> Other Events</div>
                    <SeeAllEventsButton />
                </div>
                <div className="event-detail-view__other-events">
                    {events.slice(0, 3).map(({ id, image, title, description }) => (
                        <EventCard
                            vertical
                            key={id}
                            eventId={id}
                            image={image}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </StyledEventDetailView>
    )
}

const StyledEventDetailView = styled.div`
    padding-top: 9.2rem;
    display: flex;
    justify-content: center;

    .container {
        padding: 8rem 0;
    }

    .event-detail-view {

        &__other-events {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &__subtitle {
                font-size: 2.4rem;
                padding: 3.2rem 0;
            }
        }

        &__selected-event {
            margin-top: 3.2rem;
            border: 2px solid ${props => props.theme.dark};
            border-radius: 2.5rem;
            overflow: hidden;
            
            &__image {
                overflow: hidden;
                height: 60rem;
            }

            &__rsvp {
                display: flex;
                flex-direction: column;
                padding: 3.2rem 4.8rem;

                &__info-calendar-wrapper {
                    display: flex;
                    justify-content: space-between;
                }

                &__description {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    margin-top: 0.8rem;

                    & > div {
                        font-size: 1.6rem;
                        display: flex;
                        align-items: center;
                        gap: 1.2rem;
                    }
                }      

                &__calendar {
                    border-radius: 1.6rem;
                    border: 1px solid ${props => props.theme.dark};
                    width: 8rem;
                    height: 9rem;
                    overflow: hidden;

                    &__month {
                        text-align: center;
                        border-bottom: 1px solid ${props => props.theme.dark};
                        font-size: 1.8rem;
                        font-weight: 700;
                        background-color: #F3F3F3;
                        height: 3.6rem;
                        line-height: 3.6rem;
                    }

                    &__date {
                        text-align: center;
                        background-color: #FFE99A;
                        color: ${props => props.theme.orange};
                        height: 5.4rem;
                        line-height: 5.4rem;
                    }
                }

                button {
                    width: 100%;
                    margin-top: 3.2rem;
                }
            }

            &__description-details-wrapper {
                display: flex;
                gap: 2.4rem;
                margin-top: 2.4rem;
                padding-bottom: 3.2rem;
                border-bottom: 2px solid ${props => props.theme.dark};
            }   

            &__description, &__details {
                    padding: 3.2rem 4.8rem;
                    border: 2px solid ${props => props.theme.dark};
                    border-radius: 2.5rem;
                    
                    &__header {
                        font-size: 2.4rem;
                        font-weight: 700;
                        border-bottom: 2px solid ${props => props.theme.dark};
                        padding-bottom: 1.6rem;
                    }

                    &__content {
                        padding-top: 1.6rem;
                        font-weight: 400;
                    }
            }

            &__description {
                font-size: 1.6rem;
                width: calc((100% - 2.4rem) * 0.66);
            }

            &__details {
                width: calc((100% - 2.4rem) * 0.34);
                

                &__content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;

                    & > div {
                        gap: 1.2rem;    
                        display: flex;
                        align-items: center;
                        font-size: 1.6rem;
                        font-weight: 400;
                        line-height: 2rem;
                    }
                }
            }

        }

        &__other-events {
            display: flex;
            gap: 2.4rem;

            .event-card {
                height: 46.1rem;
                width: calc((100% - 4.8rem) / 3);
            }
        }
    }
` 

export default EventDetailView
