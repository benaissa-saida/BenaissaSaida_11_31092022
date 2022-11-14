import Card from './Card';
import '../styles/Cards.css';

function Cards({ data }) {
   return (
      <main className="card-container">
         {data.map((elt) => (
            <div key={elt.id} className="location-elt">
               <Card title={elt.title} src={elt.cover} id={elt.id} />
            </div>
         ))}
      </main>
   );
}

export default Cards;
