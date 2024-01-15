import { FeaturedGames } from "@src/components/FeaturedGames";
import Image from "next/image";
import { ContainerStyled } from "./styled";
import { LastNews } from "@src/components/LastNews";

export function HomeScreen() {
    return (
      <>
        <Image
          src="/assets/gta-5.jpg"
          alt="banner"
          width={0}
          height={0}
          sizes="80vw"
          style={{ width: '100%', height: '80vh' }} // optional
        />
        <ContainerStyled>
          <FeaturedGames />
          <LastNews />
        </ContainerStyled>
      </>
    );
}