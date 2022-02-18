import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	return <>
		<Menu show={showMenu} setShowMenu={setShowMenu} />

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

			<button className={styles.button} onClick={() => setShowMenu(true)}>Lets get started</button>
		</div>
	</>
}

export default Home
