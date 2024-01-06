import Image from 'next/image'
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';


export function Header() {
    return (
      <header className="h-28 bg-black_700 flex items-center justify-between px-32">
        <div className='flex items-center'>
          <Image src="./assets/Logo.svg" alt='Logo' width={53} height={53}/>
          <ul className='flex gap-x-6 ml-10'>
            <li className="hover:cursor-pointer hover:text-yellow_500 ease-in duration-200">
              Jogos
            </li>
            <li className="hover:cursor-pointer hover:text-yellow_500 ease-in duration-200">
              Loja
            </li>
            <li className="hover:cursor-pointer hover:text-yellow_500 ease-in duration-200">
              Ajuda
            </li>
          </ul>
        </div>
        
        <div className='flex items-center gap-x-10'>
          <div>
            <PrimaryButton text='Baixar o Launcher' type="button"/>
          </div>
          <div className='flex items-center gap-x-6'> 
            <SecondaryButton icon={<IoSearchSharp color='#FFF'/>} /> 
            <SecondaryButton icon={<FaRegUser color='#FFF'/>} /> 
          </div>
        </div>
      </header>
    );
}