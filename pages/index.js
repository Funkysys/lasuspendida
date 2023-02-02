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
        <iframe className={styles.video} src="https://www.youtube.com/embed/YnXe9FLNYd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className={styles.paragraph}>Creating an opera is not an easy thing. <br /> Even less when it comes to a Jazz Metal Opera! <br />If you want to help us go through all the stages of this creation,<br />do not hesitate to click on one of the links below!</p>
        <button className={styles.button}>
          <Link href={"https://www.gofundme.com/f/la-suspendida-opera-album-production/widget/large/"}>
            Donate new
          </Link>
        </button>

        <h2 className={styles.subTitlePart}>SYNOPSIS</h2>
        <p className={styles.paragraph2}>
          María Elena Milagro de Hoyos, a beautiful 22-year-old divorcee from Cuba, dies of tuberculosis in Key West and find herself in Limbo. From behind a large wall, Shades of the Realm of Death take note of the hours on Earth: It is sunrise along the Atlantic Coast of the Western Hemisphere, where the souls of all who died in The Americas the previous day gather for their journey. The Shades call forth the newly dead by name to enter their gates. When they call María Elena, she thanks them for their invitation, but tells them she prefers to remain outside the gates, suspended between the realms of the Living and the Dead. They tell her this is impossible, but she says they're wrong: she utilizes the fresh infusions of seed the still-living Tanzler, the doctor who treated her condition. Tanzler's sexual obsession with her didn't die when she did, and now she's using his acts of necrophilia to keep herself suspended between the realms of Life and Death. The Shades are shocked and confused by this aberration. María Elena explains that it&aposs actually even stranger than it appears. She tells them that Tanzler had, long before, had a dream-visitation from his grandmother, a Countess who died before he was born. The Countess promised to give him something never before given to anyone – an ideal woman who didn&apost even yet exist. When Tanzler met María Elena years after that vision, he instantly recognized her as the Promised Ideal. As he loved her before she was born, now he loves her after she died. Unseen, he infuses María Elena once again with seed, to the indignant disgust of the Shades. They demand she submit to the eternal laws. Their arrogance triggers her rage, recalling a lifetime of being ordered about by authorities, familial and official. She makes a bold demonstration of her newfound power and dares the Dead to watch as she dominates Tanzler and commands more of his seed from him. This extraordinary encounter is too much for Tanzler, and his climax proves fatal. María Elena is deflated to hear his name called in the next roll call of the newly dead. What can she do now, abandoned, once again, by a man? She grows weak without the seminal infusion from a living man, and soon she hears her own name called once again to the Gates of Death. She laments her loss of power and uniqueness, but she is consoled by the Dead: She has had her moment of complete self-determination, and there is no shame or regret now in joining the others. Feeling the truth of their words, she moves toward the Gates, having come to a point where it is acceptable to die like everyone else.
        </p>
        <h2 className={styles.subTitlePart}>THE CREATORS:</h2>
        <ul>
          <li>
            <h3 className={styles.credentialsTitle}>KILTER</h3>
            <ul>
              <li className={styles.credentialsParagraph}>Laurent David, bass, composition, production</li>
              <li className={styles.credentialsParagraph}>Ed RosenBerg III, bass saxophone, composition, arranging</li>
              <li className={styles.credentialsParagraph}>Kenny Grohowski, drums, composition</li>
            </ul>
          </li>
          <li>
            <h3 className={styles.credentialsTitle}>Maria Elena</h3>
            <ul>
              <li className={styles.credentialsParagraph}>Andromeda Anarchia, vocals</li>
            </ul>
          </li>
          <li>
            <h3 className={styles.credentialsTitle}>The Choir Of The Dead:</h3>
            <h4 className={styles.credentialsSubTitle}>GROWLERS CHOIR</h4>
            <ul>
              <li className={styles.credentialsParagraph}>created and led by composer Pierre-Luc Senécal</li>
            </ul>
            <h6 className={styles.credentialsSubTitle}>Chorists:</h6>
            <ul>
              <li className={styles.credentialsParagraph}>Marie Claude Fleury</li>
              <li className={styles.credentialsParagraph}>Maude Theberge</li>
              <li className={styles.credentialsParagraph}>Jeff Mott</li>
              <li className={styles.credentialsParagraph}>Samuel Arseneau-Roy</li>
              <li className={styles.credentialsParagraph}>Laurent Bellemare</li>
            </ul>
          </li>
          <li>
            <h3 className={styles.credentialsTitle}>SEVEN)SUNS</h3>
            <ul>
              <li className={styles.credentialsParagraph}>Earl Maneein, violin</li>
              <li className={styles.credentialsParagraph}>Blanca González, violinn</li>
              <li className={styles.credentialsParagraph}>Fung Chern Hwei, viola</li>
              <li className={styles.credentialsParagraph}>Jenny DeVore, cello</li>
            </ul>
          </li>
          <li>
            <h3 className={styles.credentialsTitle}>LIBRETTO</h3>
            <ul>
              <li className={styles.credentialsParagraph}>William Berger</li>
            </ul>
          </li>
          <li>
            <h3 className={styles.credentialsTitle}>DANCERS</h3>
            <ul>
              <li className={styles.credentialsParagraph}>Fanny Coulm</li>
              <li className={styles.credentialsParagraph}>Yutaka Nakata</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className={styles.credentialsParagraph}>Antoine Delecroix, sound design</li>
              <li className={styles.credentialsParagraph}>Elodie Letaeron, video</li>
            </ul>
          </li>
          <li>
            <h3 className={styles.credentialsTitle}>Filmed and recorded at</h3>
            <h4 className={styles.credentialsTitle}>CULTURE LAB LIC</h4>
            <h5 className={styles.credentialsTitle}>Thanks to Tana, Tess and Edjo for your help!</h5>
          </li>
        </ul>
      </main>


    </div>
  )
}
