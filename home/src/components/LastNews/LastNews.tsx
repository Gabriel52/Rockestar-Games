import Image from "next/image"
import { ContentStyled } from "./styled"

export const LastNews = ():JSX.Element => {
    return (
        <section >
            <div style={{marginBottom: '40px', marginTop: '40px'}}>
                <h1>Últimas Notícias</h1>
            </div>
            <ContentStyled>
                <div>
                    <Image
                        alt="last new picture"
                        src="/assets/lastNews.svg" 
                        width={100} 
                        height={100} 
                        style={{width: '100%', height: '100%'}}
                    />
                </div>
            </ContentStyled>

        </section>
    )
}