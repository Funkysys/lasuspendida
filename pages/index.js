import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Suspendida</title>
        <meta name="La Suspendida" content="La Suspendida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <iframe className={styles.video} src="https://www.youtube.com/embed/bUEwCbePivY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button className={styles.button}>
          <Link href={"https://www.eventbrite.com/e/la-suspendida-a-jazz-metal-opera-tickets-470614228827"}>
            Buy Tickets
          </Link>
        </button>
      </main>


    </div>
  )
}
