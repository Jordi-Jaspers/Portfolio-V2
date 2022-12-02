import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jordi's Portfolio</title>
            </Head>
            <h1 className="text-3xl font-bold underline">Hello world! Let's build an AWESOME portfolio.</h1>
        </div>
    )
}

export default Home;
