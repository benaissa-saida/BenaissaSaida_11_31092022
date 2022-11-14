import { useState } from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import '../styles/Dropdown.css';

function Dropdown({ title, content }) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="dropdown">
         <div className="dropdown-menu" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="dropdown-title">{title}</h3>
            <span className="chevron">
               {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            </span>
         </div>

         {isOpen && (
            <div className="details-items">
               {typeof content === 'string' ? (
                  <span className="description">{content}</span>
               ) : (
                  content.map((elt, index) => <li key={index}>{elt}</li>)
               )}
            </div>
         )}
      </div>
   );
}

export default Dropdown;
