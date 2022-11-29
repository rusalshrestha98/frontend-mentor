import styles from './CircleButton.module.css';

const RatingButton = (props) => {
  return (
      <button className={styles.button} style={props.style}>{props.children}</button>
  )
}

export default RatingButton;