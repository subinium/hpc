import styled from 'styled-components'
import EventCard from '../components/EventCard'
import EventFilter from '../components/EventFilter'
import Pagination from '../components/Pagination'
import events from '../assets/variable/events'
import { useState } from 'react'

function EventsView () {

  const [currFilter, setCurrFilter] = useState('In progress')  
    const [currPage, setCurrPage] = useState(0)

    return (
      <StyledEventsView>
        <div className="container">
          <div className="page-title">Events</div>
          <div className="events-view__subtitle-filter-wrapper">
            <div className="events-view__subtitle">30 Events in progress</div>
            <EventFilter 
              currFilter={currFilter}
              setCurrFilter={setCurrFilter}
            />
          </div>
          <div className="events-view__events">
                {events.map(({ id, image, title, description}) => (
                  <EventCard 
                    vertical
                    eventId={id}
                    image={image}
                    title={title}
                    description={description}
                  />
                ))}
          </div>
          <Pagination currPage={currPage} setCurrPage={setCurrPage} />
        </div>
      </StyledEventsView>
    )
  }

const StyledEventsView = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 9.2rem;

  .page-title:first-of-type {
    background-color: ${props => props.theme.yellow};
    align-self: flex-start;
  }
  
  .container {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      padding: 8rem 0;
  
      .pagination {
        margin: 3rem 0;
      }
  }
  

  .events-view {
    &__subtitle {
      font-size: 2.4rem;
      font-weight: 700;
      background-color: ${props => props.theme.gray};
    }

    &__subtitle-filter-wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__events {
      display: flex;
      column-gap: 2.4rem;
      row-gap: 3.2rem;
      flex-wrap: wrap;

      &__row {
        display: flex;
      
      }

      .event-card {
        flex-grow: 1;
        max-width: calc((100% - 6rem) / 3);
        height: 46.1rem;

        &__content {
          width: unset;
        }

        img {
          border-bottom-left-radius: 0;
        }
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
    padding-top: ${props => props.theme.heightMobileHeader};
    /* padding-top: 0; */

    .container {
      /* display: flex;
      flex-direction: column;
      gap: 3.2rem;
      padding: 8rem 0; */
      padding: 3.2rem 0 10rem;
  
      .pagination {
        /* margin: 3rem 0; */
        margin: 0;
        /* margin-bottom: 6rem; */
      }
    }

    .page-title:first-of-type {
      text-align: center;
      border-radius: 7px;
      align-self: stretch;
    }
  

    .events-view {
      &__subtitle {
        font-size: 1.8rem;
        /* font-size: 2.4rem;
        font-weight: 700; */
        text-align: center;
        border-radius: 7px;
      }

      &__subtitle-filter-wrapper {
        /* display: flex;
        justify-content: space-between; */
        flex-direction: column;
        gap: 3.2rem;
      }

      &__events {
        flex-direction: column;
        flex-wrap: nowrap;
        /* display: flex;
        column-gap: 2.4rem;
        row-gap: 3.2rem;
        flex-wrap: wrap; */

        &__row {
          /* display: flex; */
        }

        .event-card {
          /* flex-grow: 1;
          max-width: calc((100% - 6rem) / 3);
          height: 46.1rem; */
          flex-direction: column;
          max-width: 100%;
          height: 42.9rem;
          /* width: 100%; */

          &__image {
            height: 18rem;
          }

          &__content {
            padding: 1.6rem 3.2rem;
            width: unset;

            &__description {
              /* border: 1px solid red; */
              /* width: 100%; */
            }
          }
        }
      }
    }
  }
  
`
  
export default EventsView
  