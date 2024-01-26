import styled from 'styled-components'
import { type FC, useState } from 'react'
import plus from '../assets/icon/plus.svg'
import minus from '../assets/icon/minus.svg'

type AccordionProps = {
    image: string
    title: string
    description: string
}

const Accordion: FC<AccordionProps> = ({ image, title, description }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <StyledAccordion className="accordion">
        <div className="accordion__header">
            <div className="accordion__header__title-wrapper">
                <img
                    className="accordion__header__icon" 
                    src={image}
                />
                <div className="accordion__header__title">{title}</div>
            </div>
            <img 
                src={!isExpanded ? plus : minus} 
                className="accordion__header__button"  
                onClick={() => { setIsExpanded(!isExpanded)}} 
            />
        </div>
        {isExpanded && <div className="accordion__description">
            {description}
        </div>}
    </StyledAccordion>
  )
}

const StyledAccordion = styled.div`
    padding: 1.6rem 6.6rem;
    border: 1px solid ${props => props.theme.dark};
    border-radius: 2.5rem;

    &:hover {
        background-color: rgba(255, 200, 0, 0.64);
    }

    .accordion {
        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 12rem;

            &__title-wrapper {
                display: flex;
                align-items: center;
                gap: 4rem;
            }

            &__title {
                font-size: 2.4rem;
                font-weight: 700;
            }

            &__button {
                width: 5.8rem;
                height: 5.8rem;
                cursor: pointer;
            }
        }

        &__description {
            border-top: 2px solid ${props => props.theme.dark};
            padding: 4rem 0;
        }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        /* border: 1px solid red !important; */
        /* width: 100%; */
        /* max-width: 100%; */
        /* padding: 1.6rem 6.6rem;
        border: 1px solid ${props => props.theme.dark};
        border-radius: 2.5rem; */
        padding: 2rem 4rem;
        /* max-width: ${props => props.theme.widthContainerMobileScreen}; */


    &:hover {
        /* background-color: rgba(255, 200, 0, 0.64); */
    }

    .accordion {
        &__header {
            /* display: flex;
            justify-content: space-between;
            align-items: center;
            height: 12rem; */
            align-items: flex-end;

            &__title-wrapper {
                flex-direction: column;
                align-items: flex-start;
                /* display: flex;
                align-items: center;
                gap: 4rem; */
                gap: 1.1rem;
            }

            &__icon {
                width: 6.9rem;    
            }

            &__title {
                /* font-size: 2.4rem;
                font-weight: 700; */
            }

            &__button {
                width: 3rem;
                height: 3rem;
                /* width: 5.8rem;
                height: 5.8rem;
                cursor: pointer; */
            }
        }

        &__description {
            /* width: 38rem; */
            width: 100%;
            overflow: hidden;
            margin-top: 2rem;
            /* border-top: 2px solid ${props => props.theme.dark};
            padding: 4rem 0; */
            padding: 2rem 0;
        }
    }
    }
`

export default Accordion
