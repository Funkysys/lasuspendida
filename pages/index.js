import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Suspendida</title>
        <meta name="description" content="La Suspendida is an opera in jazz and heavy metal. In telling its story of a relationship that extends beyond death, it extends what we mean by opera, jazz, and metal, even while honoring and reveling in those traditions. The drama is based on a notorious incident in history: a doctor whose obsession with a beautiful young patient of his was so great that he kept her body as his lover after her untimely death (with some collusion on the part of her mother, who was likewise unable to let go). The originality of La Suspendida is in seeing this gruesome tale from a more sympathetic  point of view – it is told from the perspective of the woman, María Elena, and dares to speculate on her journey after death not as a victim but as an expression of self-determination. What if María Elena wanted it all this way? To explore this, the opera is composed for a remarkable ensemble: a female soloist (ANDROMEDA ANARCHIA) capable of the daunting demands of the jazz, metal, and operatic traditions (discretely and also at times in combination); a noted jazz/metal instrumental trio (KILTER); a string quartet (SEVEN)SUNS), a choral ensemble similarly versed in classical and non-traditional genres (THE GROWLERS CHOIR) and a guitar player (MATT HOLLENBERG).The emerging project is proving to be a symbiotic composite of traditional and trailblazing that is traversing linguistic, artistic, political, and even existential boundaries." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" />
      </Head>

      <main className={styles.main}>
      <div>
        <h1 className={styles.title}>LA SUSPENDIDA</h1>
        <h2 className={styles.subTitle}>The Suspended Woman <br />
          A Jazz Metal Opera</h2>
      </div>
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
