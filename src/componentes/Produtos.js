import React from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import img1 from '../img/mesas.png';
import img2 from '../img/rack.png';
import img3 from '../img/decorativos.png';
import img4 from '../img/cadeirapraia.png';

const Produtos = () => {
  return (
    <section id="produtos">
      <div className={styles.produtosContainer}>
        <h1 className="titulo">Produtos</h1>
        <div className={styles.produtos}>
          <div className={styles.produto}>
            <Link to="/produtos/mesa">
              <h1 className={styles.titulos}>Mesas</h1>
              <img
                src={img1}
                alt="imagem de uma mesa"
                className={styles.imagemProduto}
              />
            </Link>
          </div>
          <div className={styles.produto}>
            <Link to="/produtos/racks">
              <h1 className={styles.titulos}>Racks</h1>
              <img
                src={img2}
                alt="imagem de um rack"
                className={styles.imagemProduto}
              />
            </Link>
          </div>
          <div className={styles.produto}>
            <Link to="/produtos/decorativos">
              <h1 className={styles.titulos}>Decorativos</h1>
              <img
                src={img3}
                alt="imagem de objetos de decoração"
                className={styles.imagemProduto}
              />
            </Link>
          </div>

          <div className={styles.produto}>
            <Link to="/produtos/cadeiras">
              <h1 className={styles.titulos}>Cadeiras de praia</h1>
              <img
                src={img4}
                alt="imagem de uma cadeira de praia"
                className={styles.imagemProduto}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
