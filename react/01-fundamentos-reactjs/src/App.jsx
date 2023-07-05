import { useState } from 'react'
import { Header, Sidebar, Post } from './components'

import './global.css'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post />
        <Post />
      </main>
    </div>
    </>
  )
}

export default App
