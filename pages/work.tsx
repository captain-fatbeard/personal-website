import type { NextPage } from 'next'

import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return <>
		<Head>
			<title>Jacob Juul Larsen - work</title>
			<meta name="description" content="Personal website" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.container}>
			Work
		</div>
	</>
}

export default Home
