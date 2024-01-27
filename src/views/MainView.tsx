import styled from 'styled-components'
import EventCard from '../components/EventCard'
import events from '../assets/variable/events'
import SeeAllEventsButton from '../components/SeeAllEventsButtton'
import speechBubbleLeft from '../assets/icon/speech_bubble_left.svg'
import speechBubbleRight from '../assets/icon/speech_bubble_right.svg'
import logo from '../assets/icon/logo.svg'
import logoMobile from '../assets/icon/logo_mobile.svg'
import discord from '../assets/icon/discord.svg'
import hashed from '../assets/gif/hashed.gif'
import shoestring from '../assets/gif/shoestring.gif'
import speechBubbleUp from '../assets/icon/speech_bubble_up.svg'
import speechBubbleDown from '../assets/icon/speech_bubble_down.svg'

function MainView () {
    return (
      <StyledMainView>
          <div className="main-view__wrapper--1">
            <div className="container">
              <img src={logo} className="logo desktop"/>
              <img src={logoMobile} className="logo mobile"/>
              <div className="hashed-discord-shoestring-wrapper">
                <div className="discord-speech-bubble-wrapper">
                  <img src={discord} className="discord"/>
                  <img src={speechBubbleUp} className="speech-bubble-up" />
                  <img src={speechBubbleDown} className="speech-bubble-down" />
                  <div className="discord-speech-bubble-wrapper__text">
                    Join HASHED Potato Club's<br></br>
                    Discord Channel to communicate<br></br>
                    with Hashed partners
                  </div>
                  
                </div>
                <div className="hashed-shoestring">
                  <img src={hashed} className="hashed"/>
                  <img src={shoestring} className="shoestring"/>
                </div>
                {/* <img src={shoestring} className="shoestring"/> */}
              </div>
            </div>
          </div>
          <div className="main-view__wrapper--2">
            <div className="container">
              <div className="speech-bubble--left">
                <img src={speechBubbleLeft} />
                <div className="speech-bubble__title">
                  {'Welcome to\nHASHED Potato Club!'}
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
                      {'Let’s make\nthings happen'}
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
                    key={id}
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
        padding-top: ${props => props.theme.heightHeader};
        display: flex;
        justify-content: center;
        /* height: 66.4rem; */

        img {
          &.logo {
            &.desktop {
              height: 16.7rem;
            }
            &.mobile {
              display: none;
            }
          }

          &.hashed {
            width: 38.8rem;
            height: 37rem;
          }

          &.shoestring {
            width: 35.1rem;
            height: 37.6rem;
          }

          &.discord {
            width: 10rem;
            height: 10rem;
          }

          &.speech-bubble-up {
            width: 30.3rem;
            height: 13rem;
            /* z-index: 1; */
            position: absolute;
            top: 13.2rem;
          }

          &.speech-bubble-down {
            display: none;
          }
        }

        .hashed-discord-shoestring-wrapper {
          /* border: 1px solid red; */
          /* display: flex; */
          margin-top: 3.2rem;
          position: relative;
          /* justify-content: center; */
          
          .hashed-shoestring {
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }

          .discord-speech-bubble-wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            
            /* position: relative; */
            /* position: relative; */

            &__text {
              text-align: center;
              font-size: 1.6rem;
              margin-top: 8.1rem;
              /* border: 1px solid red; */
              z-index: 9;

              /* img {
                position: absolute; */
                /* top: 0; */
                /* top: 13.2rem; */
                /* left: 0;
                right: 0;
                bottom: 0;
                margin: auto; */
                /* z-index: -1; */
              /* } */
            }
          }
        }
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
              background-color: ${props => props.theme.yellow};
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
            }
          }
        }
      }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
      .main-view__wrapper {
        &--1 {
          height: 56.2rem;

          img {
            &.logo {
              &.desktop {
                display: none;
              }
              &.mobile {
                display: block;
                /* width: 28rem; */
                width: 100%;
                height: 13.3rem;
              }
            }

            &.hashed {
              position: absolute;
              left: 0;
              width: 18.5rem;
              height: 17.7rem;
            }

            &.shoestring {
              position: absolute;
              right: 0;
              width: 17.2rem;
              height: 18.4rem;
            }

            &.discord {
              width: 5.6rem;
              height: 5.6rem;
            }

            &.speech-bubble-up {
              top: 7.2rem;
              display: none;
            }

            &.speech-bubble-down {
              display: block;
              position: absolute;
              top: 7.2rem;
            }
          }
          /* background-color: #FFF7DA;
          height: 66.4rem; */
          .hashed-discord-shoestring-wrapper {
            flex-direction: column;
            margin-top: 1.9rem;
            /* border: 1px solid red; */

            .hashed-shoestring {
              position: static;
              overflow: hidden;
              /* width: 100%; */
            }

            .discord-speech-bubble-wrapper {
              &__text {
                margin-top: 4.5rem;
              }
            }

            /* img. */
          }
        }

        &--2 {
          border-top: 2px solid ${props => props.theme.dark};
          /* display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4rem; */

          .speech-bubble {
            &--left, &--right {
              img {
                display: none;
              }
              background-color: #FED85A;
              border-radius: 2.5rem;
              border: 2px solid ${props => props.theme.dark};
              white-space: pre-line;
              width: unset;
              width: ${props => props.theme.widthContainerMobileScreen};
              height: 28.5rem;
              position: relative;

              &:after {
                content: '';
                width: 100%;
                height: 4rem;
                background-color: ${props => props.theme.dark};
                position: absolute;
                left: 0;
                bottom: -0.5rem;
                border-bottom-left-radius: 2.5rem;
                border-bottom-right-radius: 2.5rem;
                z-index: -1;
              }
            }

            &--left {
              margin-top: 7.6rem;
              padding: 3.9rem 3.2rem;
              /* padding-top: 3.5rem;
              padding-bottom: 3.8rem;
              padding-left: 8.8rem;
              height: 20rem; */
              width: unset;
              height: unset;

              img {
                /* height: 20rem; */
              }
            }

            &--right {
              margin-top: 8.4rem;
              padding: 3.9rem 3.2rem;
              width: unset;
              height: unset;
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
              margin-top: 12.4rem;
              /* width: ${props => props.theme.widthContainerMobileScreen}; */
              flex-direction: column;
              align-items: flex-end;
              gap: 1.6rem;
              /* width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 3.5rem; */
              /* border: 1px solid red; */

              &__title {
                /* font-size: 3.6rem;
                font-weight: 700; */
                /* border: 1px solid red; */
                width: 100%;
                font-size: 2.4rem;
                text-align: center;
                border-radius: 7px;
              }
            }

            &__content {
              display: flex;
              flex-direction: column;
              gap: 2.4rem;
              margin-bottom: 10.2rem;
              height: unset;

              .event-card {
                flex-direction: column;
                height: 100%;

                &__image {
                  width: 100%;
                  height: 18rem;
                  border-bottom: 2px solid ${props => props.theme.dark};

                  img {
                    /* width: 100%;
                    height: 100%; */
                  }
                }

                &__content {
                  width: unset;
                  height: 100%;
                  /* height: unset; */
                  /* border: 1 */
                  /* overflow: hidden; */
                  /* width: ${props => props.theme.widthContainerMobileScreen}; */
                  padding: 1.6rem 3.2rem;
                }

                &:nth-child(1) {
                  /* height: 31.3rem; */

                  /* img { 
                    width: 110%;
                    margin: -5rem 0 0 -5rem;
                  } */
                }

                &:nth-child(2) {
                  /* img {
                    width: 110%;
                    margin: -5rem 0 0 -4rem;
                  } */
                }

                &:nth-child(3) {
                  /* img {
                    width: 100%;
                    margin: -4rem 0 0 0;
                  } */
                }
              }
            }
          }
        }
    }
    }
  `
  
  export default MainView
  