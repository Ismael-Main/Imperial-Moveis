import React from 'react';

import styles from './ProdutosContainer.module.css';
import Enderecos from '../componentes/Enderecos';
import Footer from './Footer';

const ProdutosContainer = ({ produtos }) => {
  const itens = produtos.produtos;

  return (
    <>
      <section id="produtosArea">
        <div className={styles.produtosContainer}>
          <div className={styles.boxCtn}>
            <div className={styles.box}>
              <div>
                <img src={itens.produto1.imagem} alt="foto de um produto" />
                <div className={styles.preco}>
                  <p>Apartir de apenas</p>
                  <span>
                    R${itens.produto1.preco}
                    <sup>.99</sup>
                  </span>
                </div>
              </div>
              <div className={styles.boxInfos}>
                <h1 className={styles.nomeProduto}>{itens.produto1.nome}</h1>
                <h3 className={styles.classeProduto}>
                  {itens.produto1.classe}
                </h3>
                <p className={styles.textoProduto}>{itens.produto1.texto}</p>
                <button className={styles.botao}>entrar em contato</button>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <img src={itens.produto2.imagem} alt="foto de um produto" />
                <div className={styles.preco}>
                  <p>Apartir de apenas</p>
                  <span>
                    R${itens.produto2.preco}
                    <sup>.99</sup>
                  </span>
                </div>
              </div>
              <div className={styles.boxInfos}>
                <h1 className={styles.nomeProduto}>{itens.produto2.nome}</h1>
                <h3 className={styles.classeProduto}>
                  {itens.produto2.classe}
                </h3>
                <p className={styles.textoProduto}>{itens.produto2.texto}</p>
                <button className={styles.botao}>entrar em contato</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Enderecos />
      <Footer />
    </>
  );
};

export default ProdutosContainer;
