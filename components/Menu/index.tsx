import Link from 'next/link'

import { motion } from 'framer-motion'

import styles from './Menu.module.css'

const Menu  = ({show, setShowMenu}: {show: boolean, setShowMenu: Function}) => {

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	}

	return (
		<motion.div 
			animate={show ? 'open' : 'closed'}
			variants={variants}
			className={styles.container}
		>
			<Link href="/">Back to home</Link>
			<Link href="/bio">Bio</Link>
			<Link href="/work">Work</Link>

			<button onClick={() => setShowMenu(false)}>close</button>

		</motion.div>
	)
}

export default Menu
