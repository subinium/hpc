import styled from 'styled-components'
import { type FC } from 'react'

type CardProps = {
    image: string
    title: string
    description: string
}

const Card: FC<CardProps> = ({ image, title, description }: CardProps) => (
    <StyledCard className="card">
        <div className="card__icon">
            <img src={image} />
        </div>
        <div className="card__content">
            <div className="card__content__title">{title}</div>
            <div className="card__content__description">{description}</div>
        </div>
    </StyledCard>
)

const StyledCard = styled.div`
    border: 2px solid ${props => props.theme.dark};
    border-radius: 2.5rem;
    display: flex;
    gap: 2.4rem;
    height: 28rem;
    padding: 0 4.8rem;
    align-items: center;
    box-sizing: border-box;
    width: calc((100% - 2.4rem) / 2);
    position: relative;
    /* z-index: 3; */

    &:after {
        content: '';
        height: 4rem;
        border-bottom-left-radius: 2.5rem;
        border-bottom-right-radius: 2.5rem;
        background-color: ${props => props.theme.dark};
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.8rem;
        z-index: -1;
    }

    &:nth-of-type(1), &:nth-of-type(4) {
        background-color: white;
    }

    &:nth-of-type(2), &:nth-of-type(3) {
        background-color: ${props => props.theme.yellowDeep};
    }

    .card {
        &__icon {
            display: flex;
            img {
                width: 13rem;
                height: 13rem;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            &__title {
                font-size: 2.4rem;
            }

            &__description {
                font-size: 1.6rem;
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 3.2rem 2.4rem;
        /* border: 2px solid ${props => props.theme.dark}; */
        /* border-radius: 2.5rem;
        display: flex;
        gap: 2.4rem;
        height: 28rem;
        padding: 0 4.8rem;
        align-items: center;
        box-sizing: border-box;
        width: calc((100% - 2.4rem) / 2); */

        &:nth-of-type(1), &:nth-of-type(4) {
            /* background-color: white; */
        }

        &:nth-of-type(2), &:nth-of-type(3) {
            /* background-color: ${props => props.theme.yellowDeep}; */
        }

        .card {
            &__icon {
                width: 100%;
                img {
                    width: 8rem;
                    height: 8rem;
                }

                /* width: 13rem;
                height: 13rem; */
            }

            &__content {
                /* display: flex;
                flex-direction: column;
                gap: 2rem; */

                &__title {
                    /* font-size: 2.4rem; */
                }

                &__description {
                    /* font-size: 1.6rem; */
                }
            }
        }   
    }
`

export default Card
