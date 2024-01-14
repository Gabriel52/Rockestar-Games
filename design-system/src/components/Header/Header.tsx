import Image from 'next/image'
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import { ContainerStyled, GroupButtonStyled, HeaderStyled, ItemStyled, ListStyled } from './styled';
import { PrimaryButton } from '../PrimaryButton';
import { SecondaryButton } from '../SecondaryButton';


export function Header() {
    return (
      <HeaderStyled>
        <ContainerStyled >
          <Image src="./assets/Logo.svg" alt='Logo' width={53} height={53}/>
          <ListStyled>
            <ItemStyled >
              Jogos
            </ItemStyled>
            <ItemStyled >
              Loja
            </ItemStyled>
            <ItemStyled >
              Ajuda
            </ItemStyled>
          </ListStyled>
        </ContainerStyled>
        
        <GroupButtonStyled >
          <div>
            <PrimaryButton text='Baixar o Launcher' type="button"/>
          </div>
          <div className='flex items-center gap-x-6'> 
            <SecondaryButton icon={<IoSearchSharp color='#FFF'/>} /> 
            <SecondaryButton icon={<FaRegUser color='#FFF'/>} /> 
          </div>
        </GroupButtonStyled>
      </HeaderStyled>
    );
}