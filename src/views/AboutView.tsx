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

const AboutView: FC = () => {

  return (
      <StyledAboutView>
        <div className="about-view__wrapper--1">
          <div className="container">
            <div className="about-view__about">
              <div className="page-title about">About</div>
              <div className="page-title">Introduction to Hashed Potato Club</div>
              <div className="about-view__about__description">HPC is an exclusive online & offline social community for Hashed portfolio founders, employees, and partners. Its ultimate objective is to build a strong bond and create virtuous synergies between the members. This article will go through on why & how we will run this community, what to expect for the members and how to onboard HPC.</div>
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
                <div className="page-title">
                  What to expect from HPC?
                </div>
                <div className="about-view__hpc__description">
                  Members of the Hashed Potato Club can expect a rich and diverse array of opportunities, both online and offline, rooted in our core values.<br></br><br></br>
                  Such engagements are designed in consideration of geographic dispersion of Hashed portfolios and we anticipate this combination can maximize the engagement and experience of the community.
                </div>
            </div>

            <div className="about-view__onboard">
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
}

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
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 8rem 0;

    .page-title {
      margin-bottom: 3.2rem;
    }
  }

  .about-view {
    &__wrapper {
      &--1 {
      }

      &--2 {
        background-color: ${props => props.theme.yellowLight};

        .container {
          /* display: flex;
          flex-direction: column; */
          align-items: center;
        }
      }

      &--3 {
      }
    }

    
    &__about {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      .page-title.about {
        background-color: ${props => props.theme.yellow};
        align-self: flex-start;
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
          /* flex-grow: 1; */
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          width: calc(100% - 38rem - 5.6rem);
          position: relative;
          z-index: 2;
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

    }

    &__onboard {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;

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
    // padding-top: 0;
    padding-top: ${props => props.theme.heightMobileHeader};

    .container {
    /* display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 8rem 0; */
     /* padding: 6rem 0; */
     padding: 3.2rem 0 10rem;

      .page-title {
        margin-bottom: 0;

        .about {
          text-align: center;
        }
      }
    }

    .page-title:first-of-type {
      text-align: center;
      border-radius: 7px;
      align-self: stretch;
    }

    .about-view {
      &__wrapper {
        &--1 {
        }

        &--2 {
          /* background-color: ${props => props.theme.yellowLight}; */

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
      /* gap: 1.6rem; */
      /* gap: 0; */
      /* padding-bottom: 6rem; */
      padding-bottom: 4.4rem;
    }

    &__community {
      flex-direction: column;
      gap: 3.2rem;
      /* overflow: hidden; */
      /* white-space: pre-wrap; */
      /* line-break: auto; */
      /* display: flex;
      gap: 5.6rem; */
      /* border: 1px solid red; */
      align-items: center;
      /* border-top: 1px solid ${props => props.theme.dark};
      margin: 0 calc((100vw - ${props => props.theme.widthContainerMobileScreen}) / 2 * -1); */
      border-top: 1px solid ${props => props.theme.dark};
      margin: 0 calc((100vw - ${props => props.theme.widthContainerMobileScreen}) / 2 * -1);

      &__body {
        padding-top: 6rem;
        width: ${props => props.theme.widthContainerMobileScreen};
        /* margin: 0 calc((100vw - ${props => props.theme.widthContainerMobileScreen}) / 2 * -1); */
        /* width: 100%; */
        /* border-top: 1px solid ${props => props.theme.dark};
        padding: 0 calc((100vw - ${props => props.theme.widthContainerMobileScreen}) / 2 * -1); */
        /* display: flex;
        flex-direction: column;
        gap: 3.2rem;
        width: 38rem; */
        /* border: 1px solid blue; */
      }

      &__motivations {
        /* border: 1px solid green; */
        /* width: 100%; */
        width: ${props => props.theme.widthContainerMobileScreen};
        overflow: hidden;
          /* display: flex;
          flex-direction: column;
          gap: 1.6rem;
          width: calc(100% - 38rem - 5.6rem); */
          /* width: 100%; */
          /* width: unset; */
          /* width:  */
      }
    }

    &__programs {
        &__cards {
          flex-wrap: nowrap;
          flex-direction: column;
          /* display: flex;
          flex-wrap: wrap;
          gap: 2.4rem; */
        }
    }

    &__hpc {
      .page-title {
        margin-bottom: 1.6rem;
      }
    }

    &__onboard {
      border-top: 1px solid ${props => props.theme.dark};
      /* display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem; */
      /* padding: 2rem 0; */
      padding: 8rem 0;
      margin: 0 calc((100vw - ${props => props.theme.widthContainerMobileScreen}) / 2 * -1);

      &__description {
        /* border: 1px solid red; */
        width: 100%;
        
        /* width: 60rem;
        text-align: center; */
      }

      &__email {
        /* font-size: 2.4rem;
        font-weight: 700; */
      }
    }
        
    } 
  }
`
  
export default AboutView
  