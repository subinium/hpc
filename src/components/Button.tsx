import { FC, ReactNode } from "react";
import { styled } from "styled-components";

type ButtonProps ={
    children: ReactNode;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
)

const StyledButton = styled.button`
    box-sizing: border-box;
    border-radius: 1.4rem;
    border: 2px solid ${props => props.theme.dark};
    background-color: black;
    color: white;
    width: 19rem;
    font-size: 2.1rem;
    padding: 1.6rem 3.2rem;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.yellowDeep};
        color: ${props => props.theme.dark};
    }
`

export default Button