import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Skills.module.css'

import UnderlinedTitle from '../components/UnderlinedTitle'
import Graph from '../components/Graph'

const Skills: NextPage = () => {
    interface Skillset {
        title: string,
        level: number  
    }  

    const frontend: Skillset[] = [
        {title: 'html5, css, scss', level: 90},
        {title: 'javscript', level: 90},
        {title: 'typescipt', level: 55},
        {title: 'jQuery', level: 90},
        {title: 'react', level: 90},
        {title: 'nextjs', level: 80},
        {title: 'vue', level: 70},
        {title: 'webpack', level: 80},
        {title: 'bootstrap', level: 70},
        {title: 'material ui', level: 50},
        {title: 'tailwind', level: 50},
	]
    
    const backend: Skillset[] = [
        {title: 'nodeJS', level: 80},
        {title: 'fastify', level: 50},
        {title: 'express', level: 70},
        {title: 'laravel', level: 90},
        {title: 'yii', level: 80},
        {title: 'SQL', level: 90},
        {title: 'php', level: 95},
	]
    
    const devops: Skillset[] = [
        {title: 'docker', level: 80},
        {title: 'nginx', level: 80},
        {title: 'kubernetes', level: 70},
        {title: 'gcp', level: 65},
        {title: 'aws', level: 40},
	]

    const [activeSkillset, setActiveSkillset] = useState<Array<Skillset>>(frontend)   

    return <>
		<Head>
			<title>Jacob Juul Larsen - Skills</title>
			<meta name="description" content="Personal website" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.container}>
			<UnderlinedTitle title="Skills"/>

            <button className={`${styles.button} ${activeSkillset[0].title === frontend[0].title && styles.active}`} onClick={() => setActiveSkillset(frontend)}>frontend</button>
            <button className={`${styles.button} ${activeSkillset[0].title === backend[0].title && styles.active}`} onClick={() => setActiveSkillset(backend)}>backend</button>
            <button className={`${styles.button} ${activeSkillset[0].title === devops[0].title && styles.active}`} onClick={() => setActiveSkillset(devops)}>devops</button>

            <Graph skillset={activeSkillset} />
		</div>
	</>
}

export default Skills
