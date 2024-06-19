import styles from "./Banner.module.css";
import imgPlay from "./banner-play.png"

function Banner({ imagem }){
    return(
        <div className={styles.banner}>
            
            <div className={styles.capa}
                style={{backgroundImage: `url('imagens/banner-${imagem}.png')`,
                filter: 'brightness(0.5)'}} 
            />
            <div className={styles.descricao}>
                <div>
                    <span>front end</span>
                    <h1>SEO com React</h1>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
                </div>
                <img src={imgPlay} alt="Imagem do vídeo"/>

            </div>
        
        
        </div>
    )
}

export default Banner;