import styles from './RatingButtons.module.css';
import CircleButton from '../CircleButton/CircleButton';

const RatingButtons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <CircleButton>1</CircleButton>
      <CircleButton>2</CircleButton>
      <CircleButton>3</CircleButton>
      <CircleButton>4</CircleButton>
      <CircleButton>5</CircleButton>
    </div>
  )
}

export default RatingButtons;