import { BsStarFill, BsStar } from 'react-icons/bs';
import '../styles/Ratings.css';

function Ratings({ content }) {
   const starsArray = [];

   for (let i = 0; i < 5; i++) {
      i < content ? starsArray.push('full') : starsArray.push('empty');
   }

   return (
      <div className="ks-stars-container">
         {starsArray.map((star, i) =>
            star === 'full' ? (
               <span key={i}>
                  <BsStarFill></BsStarFill>
               </span>
            ) : (
               <span key={i}>
                  <BsStar></BsStar>
               </span>
            )
         )}
      </div>
   );
}

export default Ratings;
