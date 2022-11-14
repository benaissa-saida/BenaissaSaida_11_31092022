import { Link } from 'react-router-dom';
import '../styles/Card.css';

function Card({ id, title, src }) {
   return (
      <div className="card">
         <Link to={`/logement/${id}`} title={title} className="card-link">
            <img className="card-cover" src={src} alt="location" />
            <p className="title">{title}</p>
         </Link>
      </div>
   );
}

export default Card;
