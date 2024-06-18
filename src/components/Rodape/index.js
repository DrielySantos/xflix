import styles from './Rodape.module.css';
import logo from './Logo.png';


function Rodape(){
    return(
        <footer className={styles.rodape}>
            <img src={logo} alt='Logo Xflix' />
        </footer>
    )
}

export default Rodape;