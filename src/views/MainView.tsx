import styled from 'styled-components'
import EventCard from '../components/EventCard'
import events from '../assets/variable/events'
import SeeAllEventsButton from '../components/SeeAllEventsButtton'
import speechBubbleLeft from '../assets/icon/speech_bubble_left.svg'
import speechBubbleRight from '../assets/icon/speech_bubble_right.svg'
import logo from '../assets/icon/logo.svg'
import logoMobile from '../assets/icon/logo_mobile.svg'
// import discord from '../assets/icon/discord.svg'
import medium from '../assets/icon/medium.svg'
import hashed from '../assets/gif/hashed.gif'
import shoestring from '../assets/gif/shoestring.gif'
import speechBubbleUp from '../assets/icon/speech_bubble_up.svg'
import speechBubbleDown from '../assets/icon/speech_bubble_down.svg'
import shoestringLaptop from '../assets/gif/shoestring_laptop.gif'
import hashedHat from '../assets/gif/hashed_hat.gif'
import orbit from '../assets/icon/orbit.svg'
import star from '../assets/icon/star.svg'
import circleOrange from '../assets/icon/circle_orange.svg'
import circleYellow from '../assets/icon/circle_yellow.svg'
import spikeOrange from '../assets/icon/spike_orange.svg'
import spikeYellow from '../assets/icon/spike_yellow.svg'
import { useIntersectionObserver } from '@uidotdev/usehooks'

function MainView() {
  const [logoRef] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const [bubbleLeftRef, bubbleLeftEntry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });


  const [bubbleRightRef, bubbleRightEntry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const [discordSpeechBubbleRef, discordSpeechBubbleEntry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <StyledMainView>
      <div className="main-view__wrapper--1">
        <img src={orbit} className="orbit left" />
        <img src={circleYellow} className="circle top" />
        <img src={circleOrange} className="circle bottom" />
        <img src={star} className="star" />
        <div className="container">
          <img ref={logoRef} src={logo} className="logo desktop" />
          <img src={logoMobile} className="logo mobile" />
          <div className="hashed-discord-shoestring-wrapper">
            <div ref={discordSpeechBubbleRef} className={`discord-speech-bubble-wrapper ${discordSpeechBubbleEntry?.isIntersecting ? 'in-viewport' : ''}`}>
              <img src={medium} className="discord" />
              <img src={speechBubbleUp} className="speech-bubble-up" />
              <img src={speechBubbleDown} className="speech-bubble-down" />
              <div className="discord-speech-bubble-wrapper__text">
                Explore Hashed's Medium channel <br></br>
                for a variety of Thesis & Research<br></br>
              </div>
            </div>
            <div className="hashed-shoestring">
              <img src={hashed} className="hashed" />
              <img src={shoestring} className="shoestring" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-view__wrapper--2">
        <div className="container">
          <div className="main-view__wrapper--2__shoestring-speech-bubble--left-wrapper">
            <img src={shoestringLaptop} className="shoestring-laptop" />
            <div ref={bubbleLeftRef} className={`speech-bubble--left ${bubbleLeftEntry?.isIntersecting ? 'in-viewport' : ''}`}>
              <img src={speechBubbleLeft} className="speech-bubble-left" />
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
          </div>
          <div className="main-view__wrapper--2__hashed-speech-bubble--right-wrapper">
            <div ref={bubbleRightRef} className={`speech-bubble--right ${bubbleRightEntry?.isIntersecting ? 'in-viewport' : ''}`}>
              <img src={speechBubbleRight} className="speech-bubble-right" />
              <div className="speech-bubble__title">
                <div className="speech-bubble__content__text">
                  {'Let’s make\nthings happen'}
                </div>
              </div>
              <div className="speech-bubble__content">
                <div className="speech-bubble__content__text">
                  Get to know Hashed's partners through various events<br></br>
                  and create positive synergy at the Hashed Potato Club!
                </div>
              </div>
            </div>
            <img src={hashedHat} className="hashed-hat" />
            <img src={spikeOrange} className="spike orange" />
            <img src={spikeYellow} className="spike yellow" />
          </div>
          <div className="events__header">
            <div className="events__header__title page-title">Upcoming Events</div>
            <SeeAllEventsButton />
          </div>
          <div className="events__content">
            {events.slice(0, 3).map(({ id, image, title, description }) => (
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
        position: relative;

        img {
          &.star {
            position: absolute;
            left: 12rem;
            bottom: -13rem;
            z-index: 2;
            &:hover {
	            transform: rotate(240deg);
              transition: 0.3s;
            }
          }

          &.circle {
            position: absolute;
            z-index: 2;
            animation: float 2s linear infinite;

            &.top {
              width: 8rem;
              height: 8rem;
              left: -4rem;
              top: 26rem;
            }

            &.bottom {
              width: 2.5rem;
              height: 2.5rem;
              bottom: -8rem;
              left: 20rem;
            }
          }

          &.orbit {
            position: absolute;
            z-index: 2;
            animation: float 2s linear infinite;
            width: 50rem;

            &.left {
              left: -10rem;
              top: 33rem;
            }

            &.right {
              top: -20rem;
              right: -10rem;
              transform: scaleX(-1);
            }
          }

          &.logo {
            &.desktop {
              height: 16.7rem;
            }

            &.mobile {
              display: none;
            }
          }

          &.hashed {
            z-index: 3;
            width: 38.8rem;
            height: 37rem;
          }

          &.shoestring {
            z-index: 3;
            width: 35.1rem;
            height: 37.6rem;
          }

          &.discord {
            width: 10rem;
            height: 10rem;
            border-radius: 100%;
            background-color: ${props => props.theme.yellowLight};
            z-index: 2;

            &:hover {
              animation: rotate 0.4s linear; // infinite;
            }
          }

          &.speech-bubble-up {
            width: 30.3rem;
            height: 13rem;
            position: absolute;
            top: 13.2rem;
            /* animation: speech-bubble-up 2s infinite; */
            transform-origin: top;
          }

          @keyframes speech-bubble-up {
            from {
              transform: scale(0) translateY(-10rem);
            }

            to {
              transform: scale(1) translateY(0);
            }
          }

          &.speech-bubble-down {
            display: none;
          }
        }

        .hashed-discord-shoestring-wrapper {
          margin-top: 3.2rem;
          position: relative;
          
          .hashed-shoestring {
            display: flex;
            justify-content: center;
            gap: 21.3rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }

          .discord-speech-bubble-wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;

            &__text {
              text-align: center;
              font-size: 1.6rem;
              margin-top: 8.1rem;
              z-index: 9;
            }

            &.in-viewport {
              .discord-speech-bubble-wrapper__text {
                animation: fade-in 2.4s;
              }

              img.speech-bubble-up {
                animation: speech-bubble-up 2s;
              }
            }
          }
        }
      }

      &--2 {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 4rem;
        padding: 17.9rem 0 8.3rem;

        .container {
          display: flex;
          flex-direction: column;
        }

        &__shoestring-speech-bubble--left-wrapper, &__hashed-speech-bubble--right-wrapper {
          display: flex;
        }

        &__shoestring-speech-bubble--left-wrapper {
          img.shoestring-laptop {
            width: 29rem;
            height: 30.6rem;
          }
        }

        &__hashed-speech-bubble--right-wrapper {
          padding-left: 21.4rem;
          margin-top: -7rem;
          z-index: 2;
          gap: 2.7rem;
          position: relative;

          img {
            &.hashed-hat {
              width: 27.4rem;
              height: 27rem;
              margin-top: -3rem;
            }

            &.spike {
              position: absolute;
              animation: float 2s linear infinite;

              &.orange {
                width: 15.5rem;
                height: 15.5rem;
                top: 8rem;
                right: 25.4rem;

                z-index: -1;
                
              }

              &.yellow {
                width: 27.3rem;
                height: 27.3rem;
                top: -18rem;
                right: -9rem;
                z-index: -1;
              }
            }
          }
        }

        .speech-bubble {
          &--left, &--right {
            color: #191A23;
            position: relative;
            width: 59rem;

            img {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              margin: 0;
              z-index: -1;
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

            &.in-viewport {
              img.speech-bubble-left {
                animation: grow 2s;
              }

              & > div {
                animation: fade-in 3s;
              }
            }
          }

          @keyframes grow {
            from {
              transform: scale(1, 0.1);
            }

            to {
              transform: scale(1, 1);
            }
          }

          &--right {
            padding-top: 3.8rem;
            padding-bottom: 5.5rem;
            padding-left: 8rem;
            height: 18rem;
            z-index: 2;

            img.speech-bubble-right {
              height: 18rem;
            }

            &.in-viewport {
              img.speech-bubble-right {
                animation: grow 2s;
              }

              .speech-bubble__content__text {
                animation: fade-in 2.4s;
              }
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
            /* border: 1px solid blue; */

            .event-card {
              width: 100%;
              height: 29rem;
            }

            &.in-viewport {
              .event-card {
                animation: fade-in 2.4s, go-up 2.4s;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
      .main-view__wrapper {
        &--1 {
          height: 53rem;

          img {
            &.star {
              width: 2.4rem;
              bottom: 1rem;
              left: 2rem;
            }

            &.logo {
              &.desktop {
                display: none;
              }
              &.mobile {
                display: block;
                width: 100%;
                height: 13.3rem;
              }
            }

            &.circle {
                display: none;
                
            }

            &.orbit {
              width: 30rem;

              &.left {
                top: 44rem;
              }
            }

            &.hashed {
              width: 18.5rem;
              height: 17.7rem;
              margin-right: -1rem;
            }

            &.shoestring {
              width: 17.2rem;
              height: 18.4rem;
              margin-left: -1rem
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

          .hashed-discord-shoestring-wrapper {
            flex-direction: column;
            margin-top: 1.9rem;

            .hashed-shoestring {
              position: absolute;
              top: 21.9rem;
              gap: 0;
              align-items: baseline;
            }

            .discord-speech-bubble-wrapper {
              &__text {
                margin-top: 4.5rem;
              }
            }
          }
        }

        &--2 {
          border-top: 2px solid ${props => props.theme.dark};
          padding-top: 0;
          padding-bottom: 0;

          &__shoestring-speech-bubble--left-wrapper, &__hashed-speech-bubble--right-wrapper {
            flex-direction: column;
            align-items: flex-end;
          }

          &__shoestring-speech-bubble--left-wrapper {
            img.shoestring-laptop {
              order: 2;
              width: 11.7rem;
              height: 12.4rem;
              z-index: 2;
              margin-top: -8rem;
              transform: scaleX(-1);
            }
          }

          &__hashed-speech-bubble--right-wrapper {
            padding-left: 0;

            img {
              &.hashed-hat {
                width: 13.8rem;
                height: 13.5rem;
                margin-top: -13rem;
                z-index: 2;
                margin-right: -1rem;
              }

              &.spike {
                &.yellow {
                  width: 20rem;
                  top: 16rem;
                }

                &.orange {
                  z-index: 2;
                  width: 7rem;
                  right: 0;
                  left: -2rem;
                  top: 25rem;
                }
              }
            }
          }

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
              padding: 3.9rem 3.2rem 7.9rem;
              width: unset;
              height: unset;
              z-index: unset;
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
              margin-top: 8.2rem;
              flex-direction: column;
              align-items: flex-end;
              gap: 1.6rem;

              &__title {
                font-weight: 700;
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
