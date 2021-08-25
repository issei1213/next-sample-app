import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        genarated by <a href="#">SSG!</a>
      </h1>

      <p className={styles.description}>
        Get started by <code className={styles.code}>pages/index.js</code>
      </p>
    </main>
  )
}