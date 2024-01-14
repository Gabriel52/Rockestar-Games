import COLORS from "@src/colors/colors";
import styled from "styled-components";

export const SecondaryButtonStyled = styled.button`
    border-radius: 999px;
    width: 3rem;
    height: 3rem;
    
    align-items: center;
    display: inline-flex;
    justify-content: center;

    background-color: ${COLORS.grey_500};
    transition: all 0.5s ease-out allow-discrete;

    &:hover{
        filter: brightness(0.5)
    }
`