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

    const basics: Skillset[] = [
        {title: 'html5, css, scss', level: 90},
        {title: 'php', level: 95},
        {title: 'javscript', level: 90},
	]
    
    const javscript: Skillset[] = [
        {title: 'typescipt', level: 30},
        {title: 'jQuery', level: 90},
        {title: 'react', level: 90},
        {title: 'vue', level: 70},
        {title: 'nodeJS', level: 80},
	]
    
    const frameworks: Skillset[] = [
        {title: 'nextjs', level: 80},
        {title: 'fastify', level: 50},
        {title: 'express', level: 70},
        {title: 'laravel', level: 90},
	]
    
    const devops: Skillset[] = [
        {title: 'docker', level: 80},
        {title: 'kubernetes', level: 70},
        {title: 'gcp', level: 65},
        {title: 'aws', level: 40},
	]

    const [activeSkillset, setActiveSkillset] = useState<Array<Skillset>>(basics)   

    return <>
		<Head>
			<title>Jacob Juul Larsen - Skills</title>
			<meta name="description" content="Personal website" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.container}>
			<UnderlinedTitle title="Skills"/>

            <button className={`${styles.button} ${activeSkillset[0].title === basics[0].title && styles.active}`} onClick={() => setActiveSkillset(basics)}>basics</button>
            <button className={`${styles.button} ${activeSkillset[0].title === javscript[0].title && styles.active}`} onClick={() => setActiveSkillset(javscript)}>javscript and more</button>
            <button className={`${styles.button} ${activeSkillset[0].title === frameworks[0].title && styles.active}`} onClick={() => setActiveSkillset(frameworks)}>frameworks</button>
            <button className={`${styles.button} ${activeSkillset[0].title === devops[0].title && styles.active}`} onClick={() => setActiveSkillset(devops)}>devops</button>

            <Graph skillset={activeSkillset} />
		</div>
	</>
}

export default Skills
