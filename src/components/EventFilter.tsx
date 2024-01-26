import { Dispatch, FC, SetStateAction } from "react";
import { styled } from "styled-components";

const filters = ['In progress', 'Upcoming', 'Past']

type EventFilterProps = {
    currFilter: string
    setCurrFilter: Dispatch<SetStateAction<string>>
}

const EventFilter: FC<EventFilterProps> = ({ currFilter, setCurrFilter }: EventFilterProps) => {
    return (
        <StyledEventFilter>
            {filters.map((filter) => (
                <div 
                    className={`event-filter__tab ${(currFilter === filter && 'curr-filter') ?? ''}`}
                    onClick={() => { 
                        setCurrFilter(filter)
                    }}
                >
                    {filter}
                </div>
            ))}
        </StyledEventFilter>
    )
}

const StyledEventFilter = styled.div`
    display: flex;
    border-bottom: 1px solid ${props => props.theme.dark};
    cursor: pointer;

    .event-filter {
        &__tab {
            font-size: 1.6rem;
            width: 11.1rem;
            text-align: center;
            line-height: 3.2rem;
            height: 3.2rem;

            &.curr-filter {
                background-color: ${props => props.theme.yellowDeep};
                border-top-left-radius: 0.7rem;
                border-top-right-radius: 0.7rem;
            }
        }
    }
`

export default EventFilter