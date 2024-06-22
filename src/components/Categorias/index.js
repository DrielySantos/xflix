import styles from "./Categorias.module.css";
import videos from "../../json/db.json"

export const categorias = [
    "Front End",
    "Back End",
    "Mobile",
    "Inovação"
]

export function filtrarCategorias(id){
    return videos.filter( video => video.categoria === categorias[id])
}

function Categorias({ categoria, children }){
    return(
        <section className={styles.categoria}>
            <h2 className={styles.titulo}>{categoria}</h2>

            <div className={styles.listaCard}>
                <div className={styles.scrollContainer}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Categorias;