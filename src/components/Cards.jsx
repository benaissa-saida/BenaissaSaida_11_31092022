import Card from './Card';
import '../styles/Cards.css';

function Cards({ data }) {
   return (
      <main className="card-container">
         {data.map((card) => (
            <div key={card.id} className="location-elt">
               <Card title={card.title} src={card.cover} id={card.id} />
            </div>
         ))}
      </main>
   );
}

export default Cards;
