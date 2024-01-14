import React, { ReactElement } from 'react'
import { SecondaryButtonStyled } from './styled'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string
    icon?: ReactElement 
}

export const SecondaryButton = ({text,icon, ...props}: Props) => {
    return (
        <SecondaryButtonStyled 
            {...props}
        >
            {icon && <span className="mr-2 contents text-2xl">{icon}</span>}
            {text}
        </SecondaryButtonStyled>
    )
}