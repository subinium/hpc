import { FC } from 'react'
import styled from 'styled-components'
import Accordion from '../components/Accordion'
import puzzle from '../assets/icon/puzzle.svg'
import umbrella from '../assets/icon/umbrella.svg'
import socialNetwork from '../assets/icon/social_network.svg'
import arrowUp from '../assets/icon/arrow_up.svg'
import cloud from '../assets/icon/cloud.svg'
import lightBulb from '../assets/icon/light_bulb.svg'
import magnifier from '../assets/icon/magnifier.svg'
import Card from '../components/Card'
import shoestringSunglass from '../assets/icon/shoestring_sunglass.svg'
import hasehdShoestringBalloon from '../assets/icon/hashed_shoestring_balloon.svg'
import orbit from '../assets/icon/orbit.svg'
import starBlack from '../assets/icon/star_black.svg'
import starOrange from '../assets/icon/star_orange.svg'
import circleOrange from '../assets/icon/circle_orange.svg'
import circleYellow from '../assets/icon/circle_yellow.svg'

const communityMotivations = [
  {
      image: puzzle,
      title: 'Bonding',
      description: 'HPC nurtures a strong sense of community, providing founders with a supportive environment during challenging periods. It offers a safe haven for them during uncertain times and encourages a sense of belonging, resilience, and active participation within the community through a variety of activities.'
  },
  {
      image: socialNetwork,
      title: 'Frictionless Communication',
      description: 'HPC nurtures a strong sense of community, providing founders with a supportive environment during challenging periods. It offers a safe haven for them during uncertain times and encourages a sense of belonging, resilience, and active participation within the community through a variety of activities.'
  },
  {
    image: umbrella,
    title: 'Bonding',
    description: 'HPC nurtures a strong sense of community, providing founders with a supportive environment during challenging periods. It offers a safe haven for them during uncertain times and encourages a sense of belonging, resilience, and active participation within the community through a variety of activities.'
  },
]

const programs = [
  {
    image: arrowUp,
    title: 'Growth',
    description: 'HPC nurtures a strong sense of community, providing founders with a supportive environment during challenging periods. It offers a safe haven for them during uncertain times and encourages a sense of belonging, resilience, and active participation within the community through a variety of activities.'
  },
  {
      image: cloud,
      title: 'Openness',
      description: 'Hashed Potato Club is dedicated to facilitating the growth of its members by curating invaluable sessions that encompass business networking, casual activities, and knowledge sharing.'
  },
  {
    image: lightBulb,
    title: 'Adaptability',
    description: 'Hashed Potato Club is dedicated to facilitating the growth of its members by curating invaluable sessions that encompass business networking, casual activities, and knowledge sharing.'
  },
  {
    image: magnifier,
    title: 'Transparency',
    description: 'Hashed Potato Club is dedicated to facilitating the growth of its members by curating invaluable sessions that encompass business networking, casual activities, and knowledge sharing.'
  },
]

const AboutView: FC = () => (
      <StyledAboutView>
        <div className="about-view__wrapper--1">
          <div className="container">
            <div className="about-view__about">
              <div className="about-view__about__content">
                <div className="page-title about">About</div>
                <img src={shoestringSunglass} />
                <div className="page-title">Introduction to Hashed Potato Club</div>
                <div className="about-view__about__content__description">HPC is an exclusive online & offline social community for Hashed portfolio founders, employees, and partners. Its ultimate objective is to build a strong bond and create virtuous synergies between the members. This article will go through on why & how we will run this community, what to expect for the members and how to onboard HPC.</div>
              </div>
              <img src={shoestringSunglass} />
            </div>
            <div className="about-view__community">
              
              <div className="about-view__community__body">
                <div className="page-title">What makes Hashed run a community?</div>
                <div className="about-view__community__body__description">
                  Hashed is committed to providing comprehensive support to its portfolios, going beyond mere financial backing. In pursuit of this objective, we offer a range of services to empower our community members in their growth journey.<br></br><br></br>
                  HPC plays a pivotal role in strengthening this commitment, as we envision it as a crucial enabler that streamlines value-add activities and fosters organic engagement among our members.<br></br><br></br>
                  Our approach to HPC centers on two core aspects: 1) a social community and 2) a value-add platform. This combination of approaches holds the potential to achieve the following goals:
                </div>

              </div>

              <div className="about-view__community__motivations">
                {communityMotivations.map(({ image, title, description}) => (
                  <Accordion 
                    image={image}
                    title={title}
                    description={description}
                  />
                ))}
              </div>
              </div>
          </div>
        </div>
        <div className="about-view__wrapper--2">
          <div className="container">
            <div className="page-title">
              Our Core Values & Programs
            </div>
            <div className="about-view__programs__description">
              To promote our vision and well-being as web3 builders, we have set core values as below:
            </div>
            <div className="about-view__programs__cards">
              {programs.map(({ image, title, description}) => (
                <Card
                  image={image}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="about-view__wrapper--3">
          <div className="container">
            <div className="about-view__hpc">
              <div className="about-view__hpc__content">
                <div className="page-title">
                  What to expect from HPC?
                </div>
                <div className="about-view__hpc__description">
                  Members of the Hashed Potato Club can expect a rich and diverse array of opportunities, both online and offline, rooted in our core values.<br></br><br></br>
                  Such engagements are designed in consideration of geographic dispersion of Hashed portfolios and we anticipate this combination can maximize the engagement and experience of the community.
                </div>
              </div>
              <img src={hasehdShoestringBalloon} />
            </div>

            <div className="about-view__onboard">
              <img src={orbit} className="orbit left"/>
              <img src={orbit} className="orbit right"/>
              <img src={starBlack} className="star black left" />
              <img src={starBlack} className="star black right" />
              <img src={starOrange} className="star orange" />
              <img src={circleOrange} className="circle orange left top"/>
              <img src={circleOrange} className="circle orange right"/>
              <img src={circleYellow} className="circle yellow"/>
              <img src={circleOrange} className="circle orange left bottom"/>
              <div className="page-title">
                How to Onboard
              </div>
              <div className="about-view__onboard__description">
                To join HPC during its initial trial, you must be a founder or an employee of a Hashed portfolio company. If you meet this criteria, our team will proactively contact you and provide comprehensive instructions on how to onboard. For any inquiries or assistance, please don't hesitate to reach out to us at 
              </div>
              <div className="about-view__onboard__email">
                platform@hashed.com
              </div>
            </div>
          </div>
        </div>
      </StyledAboutView>
)

const StyledAboutView = styled.div`
  padding-top: 9.2rem;

  [class*='about-view__wrapper'] {
      display: flex;
      justify-content: center;
  }

  [class$='__description'] {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 8rem 0;
  }

  .about-view {
    &__wrapper {
      &--1 {
      }

      &--2 {
        background-color: ${props => props.theme.yellowLight};

        .container {
          align-items: center;
        }
      }

      &--3 {
        position: relative;
      }
    }

    
    &__about {
      display: flex;

      &__content {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        img {
          display: none;
        }
      }

      .page-title.about {
        background-color: ${props => props.theme.yellow};
        align-self: flex-start;
      }

      img {
        width: 38.5rem;
        height: 30.6rem;
      }

    }

    &__community {
      display: flex;
      gap: 5.6rem;

      &__body {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        width: 38rem;
      }

      &__motivations {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          width: calc(100% - 38rem - 5.6rem);
          position: relative;
          z-index: 2;
          padding-bottom: 0.8rem;
      }
    }

    &__programs {
        &__cards {
          display: flex;
          flex-wrap: wrap;
          gap: 2.4rem;
          position: relative;
          z-index: 2;
        }
    }

    &__hpc {
      display: flex;
      align-items: center;
      gap: 5.6rem;

      &__content {
        .page-title {
        margin-bottom: 3.2rem;
      }
      }

      img {
        width: 58.8rem;
        height: 52.7rem;
      }
    }

    &__onboard {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;

      img {
        &.circle {
          position: absolute;
          animation: float 2s linear infinite;
          &.yellow {
            width: 2.8rem;
            bottom: 1rem;
            left: 16rem;
          }

          &.orange {
            &.right {
              width: 1.7rem;
              height: 1.7rem;
              bottom: 8rem;
              right: 28rem;
            }
            &.left {
              &.top {
                left: 2rem;
                width: 1.8rem;
              }
              
              &.bottom {
                width: 4.2rem;
                bottom: -2.1rem;
                left: 42rem;
              }
              
            }
          }
        }

        &.orbit {
          position: absolute;
          width: 51.7rem;

          &.left {
            left: -20rem;
            bottom: -2rem;
            animation: float 2s linear infinite;
          }

          &.right {
            right: -10rem;
            bottom: 2rem;
            z-index: -1;
            animation: orbit-right-desktop 5s linear infinite;
          }

          @keyframes orbit-right-desktop {
            0% {
              transform: scaleX(-1);
            }
            50% {
              transform: scaleX(-1) translateY(-4rem);
            }
            to {
              transform: scaleX(-1)
            }
          }
        }

        &.star {
          position: absolute;
          z-index: -1;

          &.black {
            animation: rotate 12s linear infinite;
            &.left{
              width: 3.2rem;
              height: 3.2rem;
              left: 10rem;
              bottom: 30rem;
            }
            
            &.right {
              right: 12rem;
              bottom: 10rem;
            }
            
          }

          &.orange {
            left: 24rem;
            bottom: 16rem;
            width: 6.4rem;
            height: 6.4rem;
            animation: rotate 8s linear infinite;
          }
        }
      }

      &__description {
        width: 60rem;
        text-align: center;
      }

      &__email {
        font-size: 2.4rem;
        font-weight: 700;
      }
    }
        
  }
  
  @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
    padding-top: ${props => props.theme.heightMobileHeader};

    .container {
     padding: 3.2rem 0 10rem;

      .page-title {
        margin-bottom: 0;
        

        .about {
          text-align: center;
        }
      }
    }

    .page-title:first-of-type {
      width: 100%;
      text-align: center;
      border-radius: 7px;
      align-self: stretch;
    }

    .about-view {
      &__wrapper {
        &--1 {
          .container {
            padding-bottom: 6rem;
          }
        }

        &--2 {
          .container {
            /* align-items: center; */
          }
        }

        &--3 {
          .container {
            /* padding: 8rem 0; */
          }
        }
      }

    
    &__about {
      padding-bottom: 4.4rem;
      flex-direction: column;
      align-items: center;

      &__content {
        img {
          display: block;
          width: 22.4rem;
          height: 24rem;
          align-self: center;
        }
      }

      & > img {
        display: none;
      }
      
    }

    &__community {
      flex-direction: column;
      gap: 3.2rem;
      align-items: center;
      border-top: 1px solid ${props => props.theme.dark};
      margin: 0 calc((100vw - ${props => props.theme.widthContainerMobileScreen}) / 2 * -1);

      &__body {
        padding-top: 6rem;
        width: ${props => props.theme.widthContainerMobileScreen};
      }

      &__motivations {
        width: ${props => props.theme.widthContainerMobileScreen};
        overflow: hidden;
      }
    }

    &__programs {
        &__cards {
          flex-wrap: nowrap;
          flex-direction: column;
        }
    }

    &__hpc {
      flex-direction: column;
      gap: 3.2rem;

      &__content {
        order: 2;

        .page-title {
          margin-bottom: 1.6rem;
          text-align: left;
        }
      }

      img {
        width: 29.9rem;
        height: 26.8rem;
      }
    }

    &__onboard {
      border-top: 1px solid ${props => props.theme.dark};
      padding: 8rem 0 0;
      margin: 0 calc((100vw - ${props => props.theme.widthContainerMobileScreen}) / 2 * -1);

      &__description {
        width: 100%;
      }

      img {

        &.circle {
          &.yellow {
            width: 1.1rem;
            left: 12rem;
          }

          &.orange {
            &.left {
              &.top {
                width: 0.7rem;
                height: 0.7rem;
                bottom: 10rem;
                left: -0.2rem;
              }
              &.bottom {
                left: 14rem;
                bottom: -1rem;
                width: 1.7rem;
                height: 1.7rem;
              }
            }
            &.right {
                right: 0;
                bottom: 32rem;
                right: 8rem;
                width: 1.3rem;
            }
          }
        }
        
        &.orbit {
          width: 20rem;
          &.left {
            left: -2rem;
            bottom: 0;
          }
          &.right {
            bottom: 24rem;
            animation: float 5s linear infinite;
          }
        }

        &.star {
          &.black {
            &.left {
              left: 4rem;
              bottom: 14rem;
              width: 1.3rem;
              height: 1.3rem;
            }
            &.right {
              display: none;
            }
          }

          &.orange {
            width: 2.5rem;
            height: 2.5rem;
            left: 10rem;
            bottom: 11rem; 
          }
        }

        
      }
    }
        
    } 
  }
`
  
export default AboutView
  