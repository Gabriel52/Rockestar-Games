import Image from 'next/image'
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';


export function Header() {
    return (
      <header className="h-28 bg-black_700 flex items-center justify-around">
        <div className='flex items-center'>
          <Image src="./assets/Logo.svg" alt='Logo' width={53} height={53}/>
          <ul className='flex gap-x-6 ml-10'>
            <li>
              Jogos
            </li>
            <li>
              Loja
            </li>
            <li>
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