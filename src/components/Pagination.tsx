import styled from 'styled-components'
import { type FC } from 'react'
import arrowLeft from '../assets/icon/arrow_left.svg'

type PaginationProps = {
    currPage: number
    setCurrPage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ currPage, setCurrPage }: PaginationProps) => {

  return (
    <StyledPagination className="pagination">
        <img 
            src={arrowLeft} 
            // className="pagination__arrow"
        />
        {Array.from(Array(5)).map((_item, index) => (
            <div 
                className={`pagination__page-button ${((currPage === index) && 'curr-page') ?? ''}`}
                onClick={() => { setCurrPage(index) }}
            >
                {index + 1}
            </div>
        ))}
        <img src={arrowLeft} />
    </StyledPagination>
  )
}

const StyledPagination = styled.div`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    justify-content: center;

    img {
        height: 4rem;
        height: 4rem;
        cursor: pointer;

        &:nth-of-type(2) {
            transform: rotate(180deg);
        }
    }

    .pagination {        
        &__page-button {
            height: 4rem;
            width: 4rem;
            font-size: 2.1rem;
            line-height: 4.2rem;
            font-weight: 500;
            text-align: center;
            cursor: pointer;

            &.curr-page {
                background-color: ${props => props.theme.yellowDeep};
                border-radius: 100%;
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        /* display: flex;
        gap: 1.6rem;
        align-items: center;
        justify-content: center; */
        /* gap: 0; */
        /* border: 1px solid red; */
        justify-content: space-between;
        /* margin-top: 0; */

        img {
            height: 3.5rem;
            width: 3.5rem;
            /* height: 4rem;
            height: 4rem;
            cursor: pointer; */

            &:nth-of-type(2) {
                /* transform: rotate(180deg); */
            }
        }

        .pagination {        
            &__page-button {
                font-size: 1.8rem;
                height: 3.5rem;
                width: 3.5rem;
                line-height: 3.5rem;
                /* height: 4rem;
                width: 4rem;
                font-size: 2.1rem;
                line-height: 4.2rem;
                font-weight: 500;
                text-align: center;
                cursor: pointer; */

                &.curr-page {
                    /* background-color: ${props => props.theme.yellowDeep};
                    border-radius: 100%; */
                }
            }
        }
    }
`

export default Pagination
