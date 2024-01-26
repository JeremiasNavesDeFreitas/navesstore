import Produto from '../Produto';
import styles from './BoxProdutos.module.scss';


export default function BoxProdutos(){
  return(
    <section>
      <div className={styles.boxBotoes}>
        <button className={styles.boxBotoes__botao}>Ordenar</button>
        <button className={styles.boxBotoes__botao}>Exibir</button>
      </div>

      <div className={styles.boxProdutos}>
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
      </div>
      </section>
  )
}