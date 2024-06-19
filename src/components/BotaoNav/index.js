import styles from "./BotaoNav.module.css";

function BotaoNav({ texto }){
    return(
        <>
            <button className={styles.botao}>{texto}</button>
        </>
    )
}

export default BotaoNav;