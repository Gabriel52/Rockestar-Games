import COLORS from "@src/colors/colors";
import styled from "styled-components";

export const PrimaryButtonStyled = styled.button`
    color: ${COLORS.black_900};
    padding: 0.75rem 1rem 0.75rem 1rem;

    background-color: ${COLORS.yellow_500};
    border-radius: 0.5rem;
    transition: all 0.5s ease-out allow-discrete;

    &:hover{
        filter: brightness(0.5)
    }
`