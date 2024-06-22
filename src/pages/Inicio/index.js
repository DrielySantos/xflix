import Banner from 'components/Banner';
import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import Card from 'components/Card';
import Categorias, { categorias, filtrarCategorias } from 'components/Categorias';
import Container from 'components/Container';

function Inicio(){
    return(
       <>
        <Cabecalho />
        <Banner imagem="play" />
        <Container>

            {
                categorias.map((categoria, index) =>
                    <Categorias categoria={categoria}>
                    {filtrarCategorias(index).map((video) => {
                        return <Card id={video.id} key={video.id} capa={video.capa} link={video.link}/>
                        })}
                    </Categorias>
                )
            }


        </Container>
            
        <Rodape />
       </>
    )
}

export default Inicio;