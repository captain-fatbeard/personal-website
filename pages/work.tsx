import type { NextPage } from 'next'

import Head from 'next/head'

import styles from '../styles/Work.module.css'

import UnderlinedTitle from '../components/UnderlinedTitle'
import Timeline from '../components/Timeline'

const Home: NextPage = () => {
    const events: {present?: boolean, year: string, title: string, text: string}[] = [
        {
            present: true,
            year: '2022',
            title: 'NoA Ignite',
            text:  'Backend Developer; typescript, nodeJS, express'
        },
        {
            year: '2020 - 2022',
            title: 'Ambition',
            text:  'Tech Lead; Laravel, javascript, react, GCP, kubernetes'
        },
        {
            year: '2015 - 2020',
            title: 'Netbooster / Artefact',
            text:  'Team lead; PHP, javascript, vuejs'
        },
        {
            year: '2013 - 2015',
            title: 'Designheroes',
            text:  'PHP Frameworks, webshops'
        },
        {
            year: '2012',
            title: 'Rete-Moto / Heroes & Generals',
            text:  'Web-dev & forum maintenance. Started as 2 month internship.'
        },
        {
            year: '2011',
            title: 'AmPd',
            text:  'Freelance Web development, design and programming in HTML5/CSS3.'
        },
    ]

	return <>
		<Head>
			<title>Jacob Juul Larsen - work</title>
			<meta name="description" content="Personal website" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.container}>
			<UnderlinedTitle title="work"/>
			<Timeline events={events} />
		</div>
	</>
}

export default Home
