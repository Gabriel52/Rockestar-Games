import Image from 'next/image'
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

export function Header() {
    return (
      <header className="h-28 bg-black_700">
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
        
        <div>
          <PrimaryButton text='Baixar o Launcher' type="button"/>
          {/* <SecondaryButton icon={} > */}
        </div>
      </header>
    );
}