import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './Logo.png';
import CabecalhoLink from 'components/CabecalhoLink';

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt='Logo Xflix' />
            </Link>
            <nav>
                <CabecalhoLink url='./'>
                    home
                </CabecalhoLink>
                <CabecalhoLink url='./NovoVideo'>
                    novo vídeo
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;