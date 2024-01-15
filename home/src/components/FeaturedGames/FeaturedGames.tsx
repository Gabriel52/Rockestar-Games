import { PictureCard } from "../PictureCard/PictureCard"
import { cardList } from "./configuration"
import { ContentStyled } from "./styled"

export const FeaturedGames = ():JSX.Element => {
    return (
        <section >
            <div style={{marginBottom: '40px'}}>
                <h1>Jogos em Destaque</h1>
                {/*TODO: put the secondary button here */}
            </div>
            <ContentStyled>
                {cardList.map((card)=>(
                    <PictureCard 
                        key={card.id} 
                        alt={card.name} 
                        height={card.height} 
                        path={card.path} 
                        width={card.width}
                    />
                ))}
                {/*TODO: put the primary button here */}
            </ContentStyled>

        </section>
    )
}