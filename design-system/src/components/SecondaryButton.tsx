import React, { ReactElement } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string
    icon?: ReactElement 
}

export const SecondaryButton = ({text,icon, ...props}: Props) => {
    return (
        <button className='px-4 py-3 bg-yellow_500 rounded-r-full text-black' {...props}>
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    )
}