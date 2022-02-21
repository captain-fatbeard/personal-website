import { useState } from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'

import styles from './styles.module.css'

const Menu  = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const items = [
		{name: 'Back to home', ref: '/'},
		{name: 'Bio', ref: '/bio'},
		{name: 'Work', ref: '/work'},
	]

	return (<>
		<button onClick={() => setShowMenu(!showMenu)} className={styles.closeButton}>
			<svg width="23" height="23" viewBox="0 0 23 23">
				<motion.path
					animate={showMenu ? 'open' : 'closed'}
					fill="transparent"
					strokeWidth="3"
					stroke="hsl(0, 0%, 18%)"
					strokeLinecap="round"
					variants={{ 
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" }
					}}
					
				></motion.path>

				<motion.path
					animate={showMenu ? 'open' : 'closed'}
					fill="transparent"
					strokeWidth="3"
					stroke="hsl(0, 0%, 18%)"
					strokeLinecap="round"
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 }
					}}
					transition={{ duration: 0.1 }}
					
				></motion.path>

				<motion.path
					animate={showMenu ? 'open' : 'closed'}
					fill="transparent"
					strokeWidth="3"
					stroke="hsl(0, 0%, 18%)"
					strokeLinecap="round"
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" }
					}}
					
				></motion.path>
			</svg>
		</button>

		<motion.div 
			animate={showMenu ? 'open' : 'closed'}
			variants={{
				open: { opacity: 1, x: 0 },
				closed: { opacity: 0, x: "-100%" },
			}}
			className={styles.container}
		>

			{items.map(item => (
				<motion.div 
					key={item.name}
					whileHover={{ scale: 1.3 }}
					className={styles.link}
					onClick={() => setShowMenu(false)}
				>
					<Link href={item.ref}>
						{item.name}
					</Link>
				</motion.div>
			))}

		</motion.div>
	</>)
}

export default Menu
