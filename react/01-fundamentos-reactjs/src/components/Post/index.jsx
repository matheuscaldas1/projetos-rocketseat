import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/matheuscaldas1.png" />
                    <div className={styles.authorInfo}>
                        <strong>Matheus Caldas Lima</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>

                <time title="05 de julho as 08h13" dateTime="2023-05-07 08:13:10">Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>
        </article>
    )
}