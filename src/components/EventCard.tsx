import styled from 'styled-components'
import { type FC } from 'react'
import Button from './Button'

type EventCardProps = {
    eventId: number
    image: string
    title: string
    description: string
    vertical?: boolean
}

const EventCard: FC<EventCardProps> = ({ eventId, image, title, description, vertical }: EventCardProps) => (
    <StyledEventCard 
        className={`event-card ${(vertical && 'vertical') ?? ''}`}
    >
        <div className="event-card__image">
            <img src={image} />
        </div>
        <div className="event-card__content">
            <div className="event-card__content__title">{title}</div>
            <div className="event-card__content__description">{description}</div>
            <Button
                onClick={() => {
                    window.location.href = `/events/${eventId}`
                }}
            >
                More Details
            </Button>
        </div>
    </StyledEventCard>
)

const StyledEventCard = styled.div`
    border-radius: 2.5rem;
    border: 2px solid black;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;

    &.vertical {
        flex-direction: column;
        
        .event-card__image {
            width: 100%;
        }

        .event-card__content {
            width: 100%;
        }
    }
    
    .event-card {
        &__image {
            width: 68%;
            border-right: 2px solid black;
            overflow: hidden;

            img {
                border-top-left-radius: 2.5rem;
                border-bottom-left-radius: 2.5rem;

                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__content {
            width: 32%;
            display: flex;
            flex-direction: column;
            gap: 2.4rem;
            padding: 4rem 4.8rem;
            
            &__title {
                font-size: 1.8rem;
                font-weight: 700;
            }

            &__description {
                font-size: 1.6rem;
                line-height: 2rem;
            }
            
            button {
                /* box-sizing: border-box;
                border-radius: 1.4rem;
                border: 2px solid ${props => props.theme.dark};
                background-color: black;
                color: white;
                width: 19rem;
                font-size: 2.1rem;
                padding: 1.6rem 3.2rem;
                cursor: pointer;

                &:hover {
                    background-color: ${props => props.theme.yellowDeep};
                    color: ${props => props.theme.dark};
                } */
            }

        }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        /* border-radius: 2.5rem;
        border: 2px solid black;
        display: flex;
        overflow: hidden;
        box-sizing: border-box; */
        /* flex-direction: column;
        width: 100%; */

        &.vertical {
        /* flex-direction: column; */
        
        .event-card__image {
            /* width: 100%; */
        }

        .event-card__content {
            /* width: 100%; */
        }
    }
    
    .event-card {
        &__image {
            /* width: 68%;
            border-right: 2px solid black;
            overflow: hidden; */

            img {
                border-radius: 0;
                /* border-top-left-radius: 2.5rem;
                border-bottom-left-radius: 2.5rem; */
            }
        }

        &__content {
            /* width: 32%;
            display: flex;
            flex-direction: column;
            gap: 2.4rem;
            padding: 4rem 4.8rem; */
            
            &__title {
                /* font-size: 1.8rem;
                font-weight: 700; */
            }

            &__description {
                /* font-size: 1.6rem;
                line-height: 2rem; */
            }
        }
    }

    }
`

export default EventCard
