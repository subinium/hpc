import styled from 'styled-components'
import { type FC } from 'react'
import logoReversed from '../assets/img/logo_reversed.png'
import discordWhite from '../assets/icon/discord_white.svg'
import indexFinger from '../assets/icon/index_finger.svg'
import circularText from '../assets/icon/circular_text.svg'

const Footer: FC = () => (
    <StyledFooter className="footer">
        <div className="container">
            <div className="footer__img">
                <img src={logoReversed} className="logo"/>
                <img src={discordWhite} className="discord"/>
            </div>
            <div className="footer__contact">
                20F, 374, Gangnam-daero Gangnam-gu,<br></br>
                SEOUL Republic of Korea<br></br>
                contact@hashed.com
            </div>
            <div className="footer__misc">
                <div>© 2023 Hashed.Inc</div>
                <a>Privacy Policy</a>
            </div>
        </div>
        <div className="footer__icon">
            <img src={indexFinger} />
            <img src={circularText} className="text"/>
        </div>
    </StyledFooter>
)

const StyledFooter = styled.div`
    padding: 6rem 0;
    display: flex;
    justify-content: center;
    background-color: black;
    color: white;
    font-size: 1.6rem;
    position: relative;
    
    .footer {
        &__img {
            display: flex;
            justify-content: space-between;
        }

        &__contact {
            padding: 3.2rem 0;
            border-bottom: 1px solid white;
        }

        &__misc {
            display: flex;
            gap: 4rem;
            padding-top: 5rem;

            a {
                border-bottom: 1px solid white;
            }
        }

        &__icon {
            width: 10rem;
            height: 10rem;
            border-radius: 100%;
            position: absolute;
            /* background-color: ${props => props.theme.yellowDeep}; */
            top: -14rem;
            right: 4rem;
            /* position: relative; */

            img {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 10rem;
                height: 10rem;
                margin: auto;

                &.text {
                    width: 9rem;
                    height: 9rem;

                    animation: rotate-circle;
                    animation-duration: 20s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            }
        }
    }

    @keyframes rotate-circle {
        to {
            transform: rotate(1turn);
        }
    }

    
    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        /* padding: 6rem 0;
        display: flex;
        justify-content: center;
        background-color: black;
        color: white;
        font-size: 1.6rem;
        position: relative; */
        /* height: 38.9re */
    
        .footer {
            &__img {
                /* display: flex;
                justify-content: space-between; */
                align-items: center;
                img {
                    &.logo {
                        width: 19.4rem;
                        height: 2.7rem;
                    }

                    &.discord {
                        width: 3.7rem;
                        height: 3.7rem;
                    }
                }
            }

            &__contact {
                /* padding: 3.2rem 0;
                border-bottom: 1px solid white; */
            }

            &__misc {
                /* display: flex;
                gap: 4rem;
                padding-top: 5rem; */
                padding-top: 4rem;
                flex-direction: column;
                align-items: center;
                gap: 1.2rem;
            }

            &__icon {
                width: 5.8rem;
                height: 5.8rem;
                top: -7.8rem;
                /* right: 2rem; */
                right: calc((100vw - ${props => props.theme.widthContainerMobileScreen}) / 2);
                /* width: 10rem;
                height: 10rem;
                border-radius: 100%;
                position: absolute;
                top: -14rem;
                right: 4rem; */
                /* position: relative; */
/* 
                img {
                    width: 5.8rem;
                    height: 5.8rem;
                } */

                img {
                    width: 5.8rem;
                    height: 5.8rem;
                    &.text {
                        width: 5.22rem;
                        height: 5.22rem;
                    }
                }
            }
        }   
    }
`

export default Footer
