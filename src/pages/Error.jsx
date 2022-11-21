import { useRouteError } from 'react-router-dom';
import '../styles/Error.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ErrorPage() {
   const error = useRouteError();
   return (
      <div className="container-error">
         <Header />
         <div id="error-page">
            <h1 className="ks-status-error">{error.status}</h1>
            <h2 className="ks-message-error">
               Oups! La page que vous demandez n'existe pas.
            </h2>
            <Link to="/" className="ks-return-link">
               Retourner sur la page d’accueil
            </Link>
         </div>
      </div>
   );
}

export default ErrorPage;
