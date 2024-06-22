import styles from "./Card.module.css";
import iconeDeletar from "./delete.png";
import iconeEditar from "./editar.png";


function Card({ id, capa, titulo, link }) {
  const buttons = [
    { icon: iconeDeletar, alt: "Deletar vídeo", text: "Deletar" },
    { icon: iconeEditar, alt: "Editar vídeo", text: "Editar" },
  ];

  return (
    <section className={styles.card}>
        <a href={link} rel="noreferrer noopener" target="_blank">
            <img src={capa} alt={titulo} className={styles.capa} />
        </a>

      <div className={styles.config}>
        {buttons.map((button, index) => (
          <div key={index} className={styles.button}>
            <img src={button.icon} alt={button.alt} />
            <span>{button.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;