import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

export function Sidebar () {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src='https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50' />

            <div className={styles.profile}>
                <img src='https://pbs.twimg.com/profile_images/1548732654295588864/yFVxwpb4_400x400.jpg'/>

                <strong>Matheus Lima</strong>
                <span>Software Engineer</span>

                <footer>
                    <a href='#'>
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}