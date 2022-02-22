import type { NextPage } from 'next'

import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Timeline from '../components/Timeline'

const Home: NextPage = () => {
	return <>
		<Head>
			<title>Jacob Juul Larsen - work</title>
			<meta name="description" content="Personal website" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.container}>
			Work
			<Timeline />
		</div>
	</>
}

export default Home
