import styles from '../../styles/Menu.module.css'

const Menu  = ({show, setShowMenu}: {show: boolean, setShowMenu: Function}) => {
	return <>
		{show && <div className={styles.container}>
			<button onClick={() => setShowMenu(false)}>close</button>

			<ul>
				<li>nav 1</li>
				<li>nav 2</li>
				<li>nav 3</li>
			</ul>
		</div>}
	</>
}

export default Menu
