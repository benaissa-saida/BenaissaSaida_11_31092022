import Layout from '../components/Layout';
import Carrousel from '../components/Carrousel';
import HostProfile from '../components/HostProfile';
import Ratings from '../components/Ratings';
import Tags from '../components/Tags';
import Dropdown from '../components/Dropdown';
import { useLoaderData } from 'react-router-dom';
import '../styles/Logement.css';

function Logement() {
   //récupère la data créer à partir du loader dans la route
   const data = useLoaderData();
   const {
      description,
      equipments,
      host,
      location,
      tags,
      rating,
      pictures,
      title,
   } = data.logement;

   return (
      <Layout>
         <main className="container-locations">
            <Carrousel pictures={pictures} />
            <h1 className="title-of-location">{title}</h1>
            <h2 className="place-of-location"> {location}</h2>

            <div className="rating">
               <div className="profileAndRating">
                  <HostProfile name={host.name} picture={host.picture} />
                  <Ratings content={parseInt(rating)} />
               </div>
               <Tags tags={tags} />
            </div>

            <section className="details-container">
               <Dropdown title="Description" content={description} />
               <Dropdown title="Équipements" content={equipments} />
            </section>
         </main>
      </Layout>
   );
}

export default Logement;
