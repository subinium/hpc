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
`

export default SeeAllEventsButton