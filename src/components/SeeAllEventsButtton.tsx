import { FC } from "react";
import arrow from '../assets/img/arrow.png'
import { styled } from "styled-components";

const SeeAllEventsButton: FC = () => (
    <StyledSeeAllEventsButton href="/events">
        <div>See All Events</div>  
        <img src={arrow} />
    </StyledSeeAllEventsButton>
)

const StyledSeeAllEventsButton = styled.a`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-size: 2.1rem;
    font-weight: 500;

    &, &:hover, &:focus, &:active, &:visited, &:-webkit-any-link {
        color: ${props => props.theme.dark};
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        font-size: 1.8rem;
    }
`

export default SeeAllEventsButton