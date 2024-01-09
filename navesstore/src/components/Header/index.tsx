import styles from './Header.module.scss';
import Logo from '../../assets/homepage/Naves logo White 1.png';
import Carrinho from '../../assets/homepage/Design sem nome 1.png';

export default function Header(){
    return(
        <header>
            <div className={styles.box}>
                <img className={styles.box__logo} src={Logo} alt='imagem logo'/>
                <ul className={styles.box__lista}>
                    <li className={styles.box__lista}> PEÇAS </li>
                    <div className={styles.circulo__box}>
                        <li className={styles.box__lista}> MINIATURAS </li>
                        <div className={styles.circulo}></div>
                        <div className={styles.circulo}></div>
                        <div className={styles.circulo}></div>
                    </div>
                    <li className={styles.box__lista}> PROTESES </li>
                </ul>
                <img className={styles.box__carrinho} src={Carrinho} alt='imagem carrinho'/>
            </div>
        </header>
    )
}