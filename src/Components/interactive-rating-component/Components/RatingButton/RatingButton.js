import styles from './RatingButton.module.css';

const RatingButton = () => {
  return (
    <div>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>5</button>
    </div>
  )
}

export default RatingButton;