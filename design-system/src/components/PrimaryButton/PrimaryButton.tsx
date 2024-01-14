import React, { ReactElement } from 'react'
import { PrimaryButtonStyled } from './styled'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string
    icon?: ReactElement 
}

export const PrimaryButton = ({text,icon, ...props}: Props) => {
    return (
        <PrimaryButtonStyled>
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </PrimaryButtonStyled>
    )
}