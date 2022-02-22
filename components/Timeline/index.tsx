import { motion } from 'framer-motion'

import styles from './styles.module.css'

const Timeline: React.FC = () => {
    const events = [
        {
            present: true,
            year: '2020',
            title: 'Ambition',
            text:  'Tech Lead; Laravel, javascript, react, GCP, kubernetes'
        },
        {
            year: '2015 - 2019',
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

	return (
        <div className={styles.timeline}>
            {events.map(event => (
                <div key={event.title} className={styles.item}>
                    <div className={styles.heading}>
                        {/* present classname if present true */}
                        <span className={`${styles.circle} ${event.present && styles.present}`}>&bull;</span>
                        { event.year }
                    </div>

                    <motion.div whileHover={{ scale: 1.1}} className={styles.body}>
                        <h2>{ event.title }</h2>
                        <p>{ event.text }</p>
                    </motion.div>
                </div>            
            ))}
        </div>
    )
}

export default Timeline
