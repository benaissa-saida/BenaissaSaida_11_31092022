import { useState } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import '../styles/carrousel.css';

function Carrousel({ pictures }) {
   const length = pictures.length;
   const [isCurrentPicture, setIsCurrentPicture] = useState(0);

   const slidePrev = () => {
      setIsCurrentPicture(
         isCurrentPicture !== 0 ? isCurrentPicture - 1 : length - 1
      );
   };

   const slideNext = () => {
      setIsCurrentPicture(
         isCurrentPicture !== length - 1 ? isCurrentPicture + 1 : 0
      );
   };

   return (
      <div className="ks-carrousel">
         <BsChevronLeft className="ks-left-arrow" onClick={slidePrev} />
         <BsChevronRight className="ks-right-arrow" onClick={slideNext} />

         <img
            className="ks-cover-image-locations"
            src={pictures[isCurrentPicture]}
            alt="gallery"
         />
         <span className="ks-counter">
            {isCurrentPicture + 1}/{length}
         </span>
      </div>
   );
}

export default Carrousel;
