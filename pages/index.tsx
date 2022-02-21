import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return <>
		<Head>
			<title>Jacob Juul Larsen</title>
			<meta name="description" content="Personal website" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.container}>

			<div className={styles.headlines}>
				<h1>Jacob Juul Larsen</h1>
				<h2>Web developer</h2>
			</div>

			
		</div>
	</>
}

export default Home
