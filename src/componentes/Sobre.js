import React from 'react';
import styles from './Sobre.module.css';
import imagem from '../img/sobreImg.png';

const Sobre = () => {
  return (
    <section id="sobre">
      <div className={styles.sobreContainer}>
        <img
          src={imagem}
          alt="imagem de uma cadeira"
          className={styles.imagem}
        />
        <div className={styles.sobreArea}>
          <h1 className={styles.titulo}>Sobre nós</h1>
          <div className={styles.paragrafos}>
            <p>
              Somos uma empresa fictícia que está no mercado desde 1999, a
              qualidade e sofisticação são alguns dos nossos diferencias.
            </p>
            <p>
              Pensando nisso trabalhamos para criar a melhor experiência
              possível para os nossos clientes já que cada móvel leva consigo
              uma nova história.
            </p>
          </div>
          <svg
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.5V35.5M1 77V56.25M1 77H20.5M1 77L10.75 66.625M79 77H40M40 77L30.25 66.625M40 77H30.25M1 35.5L10.75 45.875M1 35.5V45.875M20.5 56.25L10.75 66.625M20.5 56.25L30.25 66.625M20.5 56.25L10.75 45.875M20.5 56.25H10.75M20.5 56.25V66.625M1 56.25H2M1 56.25V55.5M20.5 77L10.75 66.625M20.5 77L30.25 66.625M20.5 77H30.25M20.5 77V66.625M10.75 66.625L2 56.25M10.75 66.625V56.25M10.75 66.625V76.5M10.75 66.625H20.5M10.75 66.625H1.5M2 56.25H10.75M30.25 66.625V77M30.25 66.625H20.5M1 55.5L10.75 45.875M1 55.5V45.875M10.75 45.875H1M10.75 45.875V56.25"
              stroke="#4B2E00"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
