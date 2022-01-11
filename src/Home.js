import React from 'react';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Sobre from './componentes/Sobre';
import Produtos from './componentes/Produtos';
import Enderecos from './componentes/Enderecos';
import Footer from './componentes/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Sobre />
      <Produtos />
      <Enderecos />
      <Footer />
    </div>
  );
};

export default Home;
