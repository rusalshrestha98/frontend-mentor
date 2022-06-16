import styles from './InteractiveRating.module.css';
import RatingButton from './Components/RatingButton/RatingButton';
import SubmitButton from './Components/SubmitButton/SubmitButton';


const InteractiveRating = () => {
  return (
    <div className={styles.modal}>
      <p>Star Icon</p>
      <h1 className={styles.header}>How did we do?</h1>
      <p className={styles.body}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <RatingButton />
      <SubmitButton />
    </div>
  )
}

export default InteractiveRating;