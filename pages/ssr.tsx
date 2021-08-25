import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import dayjs from 'dayjs';
import axios from 'axios'
import Link from 'next/link'

type Response = {
  name: string
}

type Props = { 
  timestamp: string, 
}


export default function SSR(props: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SSRページ</h1>
        <p> time: {props.timestamp}</p>
      </main>

      <main className={styles.main}>
        <Link href={'/'}>
          <a>TOPページへ</a>
        </Link>
      </main>

    </div>
  )
}


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  return {
    props: {
      timestamp: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
  }
}