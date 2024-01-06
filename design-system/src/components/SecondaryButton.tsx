import React, { ReactElement } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string
    icon?: ReactElement 
}

export const SecondaryButton = ({text,icon, ...props}: Props) => {
    return (
        <button 
            className='bg-grey_500 text-black w-12 h-12 flex items-center justify-center inline-flex rounded-full hover:brightness-50 ease-in duration-200'
            {...props}
        >
            {icon && <span className="mr-2 contents text-2xl">{icon}</span>}
            {text}
        </button>
    )
}