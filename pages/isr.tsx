import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import dayjs from 'dayjs';

type Props = { timestamp: string }


export default function ISR(props: Props) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ISRページ</h1>
        <p> time: {props.timestamp}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  return {
    props: {
      timestamp: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
    revalidate: 5, //5秒キャッシュ
  }
}