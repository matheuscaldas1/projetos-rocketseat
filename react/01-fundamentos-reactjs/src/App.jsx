import { useState } from 'react'
import { Header, Sidebar, Post } from './components'

import './global.css'
import styles from './App.module.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/matheuscaldas1.png',
      name: 'Matheus Lima',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
    ],
    publishedAt: new Date('2023-07-08 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
    ],
    publishedAt: new Date('2023-07-06 10:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/verossim.png',
      name: 'Matheus Lima',
      role: 'Gamer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
    ],
    publishedAt: new Date('2023-07-08 10:00:00'),
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
              key={post.id}
              content={post.content}
              author={post.author}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </>
  )
}

export default App
