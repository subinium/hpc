import styled from 'styled-components'
// import arrow from '../assets/img/arrow.png'
import EventCard from '../components/EventCard'
import events from '../assets/variable/events'
import SeeAllEventsButton from '../components/SeeAllEventsButtton'
import speechBubbleLeft from '../assets/icon/speech_bubble_left.svg'
import speechBubbleRight from '../assets/icon/speech_bubble_right.svg'

function MainView () {
    return (
      <StyledMainView>
          <div className="main-view__wrapper--1">
            <div className="container"></div>
          </div>
          <div className="main-view__wrapper--2">
            <div className="container">
              <div className="speech-bubble--left">
                <img src={speechBubbleLeft} />
                <div className="speech-bubble__title">
                  Welcome to HASHED Potato Club!
                </div>
                <div className="speech-bubble__content">
                  Hashed Potato Club is an exclusive social club for Hashed<br></br>
                  portfolio founders & partners. It aims to build a strong bond<br></br>
                  between the participants nd ultimately create virtuous<br></br>
                  synergies.
                </div>
              </div>  
              <div className="speech-bubble--right">
                  <img src={speechBubbleRight} />
                  <div className="speech-bubble__title">
                    <div className="speech-bubble__content__text">
                      Let’s make things happen
                    </div>
                  </div>
                  <div className="speech-bubble__content">
                    <img src={speechBubbleRight} />
                    <div className="speech-bubble__content__text">
                      Get to know Hashed's partners through various events<br></br>
                      and create positive synergy at the Hashed Potato Club!
                    </div>
                  </div>
              </div>
              <div className="events__header">
                <div className="events__header__title page-title">Upcoming Events</div>
                <SeeAllEventsButton />
              </div>
              <div className="events__content">
                {events.slice(0, 3).map(({ id, image, title, description}) => (
                  <EventCard
                    eventId={id}
                    image={image}
                    title={title}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
      </StyledMainView>
    )
  }

  const StyledMainView = styled.div`
    .main-view__wrapper {
      &--1 {
        background-color: #FFF7DA;
        height: 66.4rem;
      }

      &--2 {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 4rem;

        .speech-bubble {
          &--left, &--right {
            color: #191A23;
            position: relative;
            position: relative;
            width: 69rem;

            img {
              position: absolute;
              top: 0;
              left: 0;
              z-index: -1;
              width: 69rem;
            }
          }

          &--left {
            padding-top: 3.5rem;
            padding-bottom: 3.8rem;
            padding-left: 8.8rem;
            height: 20rem;

            img {
              height: 20rem;
            }
          }

          &--right {
            padding-top: 3.8rem;
            padding-bottom: 5.5rem;
            padding-left: 8rem;
            height: 18rem;

            img {
              height: 18rem;
            }
          }

          &__title {
            margin-bottom: 1.6rem;
            top: 3rem;
            font-size: 2.4rem;
            font-weight: 700;
          }

          &__content {
            font-size: 1.6rem;
          }
        }

        .events {
          &__header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3.5rem;

            &__title {
              font-size: 3.6rem;
              font-weight: 700;
            }
          }

          &__content {
            display: flex;
            flex-direction: column;
            gap: 2.4rem;
            margin-bottom: 8rem;

            .event-card {
              width: 100%;
              height: 29rem;

              &:nth-child(1) {
                height: 31.3rem;

                img { 
                  width: 110%;
                  margin: -5rem 0 0 -5rem;
                }
              }

              &:nth-child(2) {
                img {
                  width: 110%;
                  margin: -5rem 0 0 -4rem;
                }
              }

              &:nth-child(3) {
                img {
                  width: 100%;
                  margin: -4rem 0 0 0;
                }
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
      .main-view__wrapper {
        &--1 {
          /* background-color: #FFF7DA;
          height: 66.4rem; */
        }

        &--2 {
          /* display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4rem; */

          .speech-bubble {
            &--left, &--right {
              /* color: #191A23;
              position: relative;
              position: relative;
              width: 69rem; */
              border: 1px solid red;
              /* width: ${props => props.theme.widthMobileScreen}; */
              width: ${props => props.theme.widthContainerMobileScreen};
              height: 28.5rem;

              img {
                /* width: ${props => props.theme.widthMobileScreen}; */
                /* width: ${props => props.theme.widthContainerMobileScreen}; */
                width: 100%;
                height: 100%;
                /* position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                width: 69rem; */
              }
            }

            &--left {
              /* padding-top: 3.5rem;
              padding-bottom: 3.8rem;
              padding-left: 8.8rem;
              height: 20rem; */

              img {
                /* height: 20rem; */
              }
            }

            &--right {
              /* padding-top: 3.8rem;
              padding-bottom: 5.5rem;
              padding-left: 8rem;
              height: 18rem; */

              img {
                /* height: 18rem; */
              }
            }

            &__title {
              /* margin-bottom: 1.6rem;
              top: 3rem;
              font-size: 2.4rem;
              font-weight: 700; */
            }

            &__content {
              /* font-size: 1.6rem; */
            }
          }

          .events {
            &__header {
              /* width: ${props => props.theme.widthContainerMobileScreen}; */
              flex-direction: column;
              align-items: flex-end;
              /* width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 3.5rem; */
              /* border: 1px solid red; */

              &__title {
                /* font-size: 3.6rem;
                font-weight: 700; */
                border: 1px solid red;
                width: 100%;
              }
            }

            &__content {
              display: flex;
              flex-direction: column;
              gap: 2.4rem;
              margin-bottom: 8rem;

              .event-card {
                width: 100%;
                height: 29rem;

                &:nth-child(1) {
                  height: 31.3rem;

                  img { 
                    width: 110%;
                    margin: -5rem 0 0 -5rem;
                  }
                }

                &:nth-child(2) {
                  img {
                    width: 110%;
                    margin: -5rem 0 0 -4rem;
                  }
                }

                &:nth-child(3) {
                  img {
                    width: 100%;
                    margin: -4rem 0 0 0;
                  }
                }
              }
            }
          }
        }
    }
    }
  `
  
  export default MainView
  