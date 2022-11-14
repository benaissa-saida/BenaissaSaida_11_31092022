import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.css';

function Layout({ children }) {
   return (
      <div className="container">
         <div className="hero">
            <Header />

            {children}
         </div>

         <Footer />
      </div>
   );
}

export default Layout;
