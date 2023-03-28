import styles from './Sidebar.module.css'
import CapaFoto from '../assets/capa.png'
import yangFoto from '../assets/yang.jpg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
           <img className={styles.cover}  
           src={CapaFoto}
           />

           <div className={styles.profile}>
              <Avatar src={yangFoto} />
            <strong>Yang Wom Viera</strong>
            <span>Web Developer</span>
           </div> 
           <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
           </footer>
        </aside>
     
    )
}