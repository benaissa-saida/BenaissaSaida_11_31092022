import Layout from '../components/Layout';
import Banner from '../components/Banner';
import coverAbout from '../assets/coverAbout.png';
import { useEffect } from 'react';

function About() {
   useEffect(() => {
      document.title = 'Kasa | À propos';
   }, []);
   return (
      <Layout>
         <Banner className="banner-container">
            <img className="ks-cover-img" src={coverAbout} alt="background" />
         </Banner>
      </Layout>
   );
}

export default About;
