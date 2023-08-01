import styles from './pagelayout.module.css';

export default function PageLayout({ children }) {
  return <main className={styles.main}>{children}</main>;
}
