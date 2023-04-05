import styles from './styles.module.css';

interface Props {
  title: string;
}

export function UnderlinedTitle({ title }: Props) {
  return <h2 className={styles.title}>{title}</h2>;
}
