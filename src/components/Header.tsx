import styles from './Header.module.css'
import igniteSimbol from '../assets/Ignite-simbol.png'
export function Header() {
    return(
    <header className={styles.header}>
         <img src={igniteSimbol}  />
        <strong>Ignite Feed</strong>
    </header>
    )
}