import styles from './styles.module.css'

interface Props {
    title: string
}

const UnderlinedTitle: React.FC<Props> = ({ title }) => {
	return (
        <h2 className={styles.title}>
            {title}
        </h2>
    )
}

export default UnderlinedTitle
