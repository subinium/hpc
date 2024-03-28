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
import Calendar from "../components/Calendar";
import orbit from '../assets/icon/orbit.svg'
import circleOrange from '../assets/icon/circle_orange.svg'
import circleYellow from '../assets/icon/circle_yellow.svg'
import starBlack from '../assets/icon/star_black.svg'

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
            <img src={orbit} className="orbit" />
            <img src={circleOrange} className="circle orange top" />
            <img src={circleOrange} className="circle orange bottom" />
            <img src={circleYellow} className="circle yellow" />
            <img src={starBlack} className="star black" />
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
                                        <Calendar
                                            month='9'
                                            date='05'
                                        />
                                        <div>{selectedEvent.start_date} ~ {selectedEvent.end_date}</div>
                                    </div>
                                    <div className="event-detail-view__selected-event__rsvp__description__note">
                                        <div className="event-detail-view__selected-event__rsvp__description__note__image-container">
                                            <img src={pin} />
                                        </div>
                                        <div>{selectedEvent.location}</div>
                                    </div>
                                </div>
                            </div>
                            {/* <Calendar
                                month='9'
                                date='05'
                            /> */}
                        </div>
                        <Button
                            onClick={
                                () => {
                                    window.open(selectedEvent.url, '_blank', 'noopener,noreferrer');
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
                            {selectedEvent.detail}
                            {/* Factomind, a market specialist providing data-driven growth strategies to the Web3 builders, is hosting a brunch event for KBW participants! KBW Amuse-Bouche serves as an appetizer to KBW, a delightful prelude to the main event. Enjoy a variety of food and drinks while networking with builders, founders, investors, and Web3 enthusiasts. It would strike a much lighter note, so come casually. */}
                        </div>
                    </div>
                    <div className="event-detail-view__selected-event__details">
                        <div className="event-detail-view__selected-event__details__header">
                            Details
                        </div>
                        <div className="event-detail-view__selected-event__details__content">
                            {/* <div>
                                <img src={calendar} />
                                <div>{selectedEvent.start_date}</div>
                            </div> */}
                            <div>
                                <img src={quote} />
                                <div>{selectedEvent.event_type}</div>
                            </div>
                            <div>
                                <img src={pin} />
                                <div>{selectedEvent.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-detail-view__other-events__header">
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
    position: relative;

    & > img {
        position: absolute;
        z-index: -1;
        &.orbit {
            width: 57.4rem;
            right: -8rem;
            animation: float 4s ease-in-out infinite;
        }

        &.circle {
            animation: float 2s ease-in-out infinite;
            &.yellow {
                width: 3.1rem;
                right: 40rem;
                top: 12rem;
            }
            &.orange {
                &.top {
                    animation: float 4s ease-in-out infinite;
                    width: 4.7rem;   
                    top: 11rem;
                    right: 46rem;
                }
                &.bottom {
                    width: 7.1rem;
                    right: 8rem;
                    top: 49rem;
                }
            }
        }

        &.star {
            &.black {
                width: 3.6rem;
                right: 2rem;
                top: 49rem;
                animation: float 2s ease-in-out infinite;
            }
        }
    }

    .container {
        padding: 8rem 0;
        display: flex;
        flex-direction: column;

        & > .page-title {
            align-self: flex-start;
            background-color: ${props => props.theme.yellow};
        }
    }

    .event-detail-view {
        &__other-events {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &__header {
                display: flex;
                justify-content: space-between;
            }

            &__subtitle {
                font-size: 2.4rem;
                margin: 3.2rem 0;
                /* padding: 3.2rem 0; */
                background-color: ${props => props.theme.yellow};
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

                    .calendar {
                        display: none;
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

                img {
                    border-bottom-left-radius: 0;
                }

                &__content {
                    width: unset;
                }
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        padding-top: ${props => props.theme.heightMobileHeader};

        & > img {
            display: none;
        }

        .container {
            padding-top: 3.2rem;

            & > .page-title {
                width: 100%;
                text-align: center;
                border-radius: 7px;
            }
        }

        .event-detail-view {
            &__other-events {
                flex-direction: column;

                &__subtitle {
                    margin: 6rem 0 1rem;
                    width: 100%;
                    text-align: center;
                    border-radius: 7px;
                    /* margin-top: 6rem; */
                }

                &__header {
                    display: flex;
                    /* border: 1px solid red; */
                    align-items: flex-end;
                    flex-direction: column;
                    margin-bottom: 3.2rem;
                }

                .event-card {
                    flex-direction: column;
                    width: unset;
                }
                
                /* align-items: flex-end; */
                /* display: flex;
                align-items: center;
                justify-content: space-between; */

                &__subtitle {
                    /* font-size: 2.4rem;
                    padding: 3.2rem 0; */
                }
            }

            &__selected-event {
                
                &__image {
                    height: 16.8rem;
                    /* overflow: hidden;
                    height: 60rem; */
                }

                &__rsvp {
                    &__info-calendar-wrapper {
                        & > div:nth-child(2) {
                            display: none;
                        }
                    }

                    &__description {
                        /* display: flex;
                        flex-direction: column;
                        gap: 0.8rem;
                        margin-top: 0.8rem; */

                        & > div {
                            /* font-size: 1.6rem;
                            display: flex;
                            align-items: center;
                            gap: 1.2rem; */
                        }

                        &__date {
                            img {
                                display: none;
                            }

                            .calendar {
                                display: block;
                            }
                        }

                        &__note {
                            &__image-container {
                                /* border: 1px solid red; */
                                /* width: 4rem;
                                height: 4rem; */
                                min-width: 4.9rem;
                                height: 4.2rem;
                                border-radius: 0.8rem;
                                /* min-height: 4rem; */
                                /* height: 5rem; */
                                background-color: ${props => props.theme.gray};
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                /* border: 1px solid red; */
                            }
                            /* background-color: red; */
                        }
                    }      

                    button {
                        /* width: 100%;
                        margin-top: 3.2rem; */
                    }
                }

                &__description-details-wrapper {
                    flex-direction: column;
                    /* display: flex;
                    gap: 2.4rem;
                    margin-top: 2.4rem;
                    padding-bottom: 3.2rem;
                    border-bottom: 2px solid ${props => props.theme.dark}; */
                }   

                &__description, &__details {
                    width: unset;
                    /* padding: 3.2rem 4.8rem;
                    border: 2px solid ${props => props.theme.dark};
                    border-radius: 2.5rem; */
                    
                    &__header {
                        /* font-size: 2.4rem;
                        font-weight: 700;
                        border-bottom: 2px solid ${props => props.theme.dark};
                        padding-bottom: 1.6rem; */
                    }

                    &__content {
                        /* padding-top: 1.6rem;
                        font-weight: 400; */
                    }
                }

                &__description {
                    /* width: unset; */
                    /* font-size: 1.6rem;
                    width: calc((100% - 2.4rem) * 0.66); */
                }

                &__details {
                    /* width: calc((100% - 2.4rem) * 0.34); */
                    

                    &__content {
                        /* display: flex;
                        flex-direction: column;
                        gap: 0.8rem; */

                        & > div {
                            /* gap: 1.2rem;    
                            display: flex;
                            align-items: center;
                            font-size: 1.6rem;
                            font-weight: 400;
                            line-height: 2rem; */
                        }
                    }
                }

            }

            &__other-events {
                padding-bottom: 2.2rem;
                /* display: flex;
                gap: 2.4rem; */

                .event-card {
                    /* height: 46.1rem;
                    width: calc((100% - 4.8rem) / 3); */

                    &__image {
                        height: 18rem;
                        border-bottom: 2px solid black;

                        img {
                            height: 18rem;
                        }
                    }

                    

                    &__content {
                        /* width: unset; */
                    }
                }
            }
        }

    }
`

export default EventDetailView
