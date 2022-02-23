import { motion } from 'framer-motion'

import styles from './styles.module.css'

interface Skill {
    title: string
    level: number
}

interface Props {
    skillset: Array<Skill>
}

const Graph: React.FC<Props> = ({ skillset }) => {
	return (
        <div className={styles.container}>
            {skillset.map(skill => (
                <motion.div
                    key={skill.title}
                    className={styles.bar}
                    animate={{ height: `${skill.level}%` }}
                    initial={ {height: '0%'} } 
                    transition={{ ease: 'easeOut', duration: Math.random() * (2 - 0.3) + 0.3 }}
                >
                    {skill.title}
                </motion.div>         
            ))}
        </div>
    )
}

export default Graph
