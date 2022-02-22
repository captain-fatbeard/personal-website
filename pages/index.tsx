import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'

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

			<div className={styles.contact}>
				<a target="_blank" href="mailto:jacoblarsen86@live.com" rel="noopener noreferrer">
					<Image alt="email me" src='/icon-envelope.svg' width="56" height="40"/>
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/larsenjacob/" rel="noopener noreferrer">
					<Image alt="linkedin" src='/icon-linkedin.svg' width="43.2" height="40"/>
				</a>
			</div>		
		</div>
	</>
}

export default Home
