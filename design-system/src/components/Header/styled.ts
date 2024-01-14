import COLORS from '@src/colors/colors';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    color: ${COLORS.white};
    font-size: 16px;
    background-color: ${COLORS.black_700};

    padding: 1rem 8rem 1rem 8rem;
`

export const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
`


export const ListStyled = styled.ul`
    column-gap: 1.5rem;
    display:flex;
    margin-left: 2.5rem;
`

export const ItemStyled = styled.li`
    transition: all 200ms outside;
    cursor: pointer;
    &:hover{
        color: ${COLORS.yellow_500};
    }
`

export const GroupButtonStyled = styled.div`
    display: flex;
    justify-content: center;

    column-gap: 2.5rem;
`

