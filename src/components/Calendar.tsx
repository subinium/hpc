import { FC } from "react";
import { styled } from "styled-components";

type CalendarProps = {
    month: string;
    date: string;
}

const Calendar: FC<CalendarProps> = ({ month, date }) => (
    <StyledCalendar className="calendar">
        <div className="calendar__month">{`${month}월`}</div>
        <div className="calendar__date page-title">{date}</div>
    </StyledCalendar>
)

const StyledCalendar = styled.div`
    border-radius: 1.6rem;
    border: 1px solid ${props => props.theme.dark};
    width: 8rem;
    height: 9rem;
    overflow: hidden;

    .calendar {
        &__month {
            text-align: center;
            border-bottom: 1px solid ${props => props.theme.dark};
            font-size: 1.8rem;
            font-weight: 700;
            background-color: #F3F3F3;
            height: 3.6rem;
            line-height: 3.6rem;
        }

        &__date {
            text-align: center;
            background-color: #FFE99A;
            color: ${props => props.theme.orange};
            height: 5.4rem;
            line-height: 5.4rem;
        }  
    }         

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        border: none;
        /* height: 4.2rem; */
        height: unset;
        border-radius: 0.8rem;
        /* min-width: 4rem; */
        /* width: 40px; */

        .calendar {
            &__month {
                font-size: 1.2rem;
                height: 1.8rem;
                line-height: 1.8rem;
                border-bottom: none;
            }

            &__date {
                font-size: 1.8rem;
                height: 2.4rem;
                line-height: 2.4rem;

            }
        }
    }
` 

export default Calendar;