import React, { ReactElement } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string
    icon?: ReactElement 
}

export const PrimaryButton = ({text,icon, ...props}: Props) => {
    return (
        <button className='px-4 py-3 bg-yellow_500 rounded-lg text-black hover:brightness-50 ease-in duration-200' {...props}>
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    )
}