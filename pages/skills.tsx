import type { NextPage } from 'next'

import Head from 'next/head'

import styles from '../styles/Skills.module.css'

import UnderlinedTitle from '../components/UnderlinedTitle'

const Home: NextPage = () => {

    interface SkillSet {
        skill: string,
        level: number  
    }

    const languages: SkillSet[] = [
        {skill: 'html5', level: 99},
        {skill: 'css, scss', level: 99},
        {skill: 'php', level: 99},
        {skill: 'javscript', level: 90},
        {skill: 'typescipt', level: 35},
	]

    return <>
		<Head>
			<title>Jacob Juul Larsen - Skills</title>
			<meta name="description" content="Personal website" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.container}>
			<UnderlinedTitle title="Skills"/>
		</div>
	</>
}

export default Home
