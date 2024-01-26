import styles from './Produto.module.scss';

export default function Produto(){
    return(
        <section>
            <div className={styles.boxGeral}>
                <div className={styles.boxItem}>
                    <img />
                </div>

                <div className={styles.boxItem__conteudo}>
                    <div className={styles.boxItem__info}>
                        <h2 className={styles.boxItem__titulo}>Name</h2>
                        <button className={styles.boxItem__botao}>Comprar</button>
                    </div>
                    <p className={styles.boxItem__texto}>Price$</p>
                </div>
            </div>
        </section>
    )
}
