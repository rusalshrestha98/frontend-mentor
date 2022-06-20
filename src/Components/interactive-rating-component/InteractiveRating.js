import { useState } from 'react';
import Modal from './Components/Modal/Modal';
import SelectRating from './Components/SelectRating/SelectRating';


const InteractiveRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <Modal>
      <SelectRating />
    </Modal>
  )
}

export default InteractiveRating;