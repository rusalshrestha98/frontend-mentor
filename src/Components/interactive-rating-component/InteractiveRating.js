import RatingButton from './Components/RatingButton/RatingButton';
import SubmitButton from './Components/SubmitButton/SubmitButton';

const InteractiveRating = () => {
  return (
    <div className='modal'>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <RatingButton />
      <SubmitButton />
    </div>
  )
}

export default InteractiveRating;