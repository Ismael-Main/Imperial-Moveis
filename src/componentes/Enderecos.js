import React from 'react';
import styles from './Enderecos.module.css';

const Enderecos = () => {
  return (
    <section id="enderecos">
      <div className={styles.enderecosCtn}>
        <h1 className="titulo">Venha conhecer nossas lojas</h1>
        <div className={styles.boxCtn}>
          <div className={styles.box}>
            <h1 className={styles.titulo}>São Paulo - SP</h1>
            <p>- Rua Principal - Centro</p>
            <p>- N° 146 </p>
            <p>- (21) 1234-4321</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.titulo}>Franca - SP</h1>
            <p>- Rua Aquiperto - Esquina</p>
            <p>- N°234</p>
            <p>- (21) 9999-9999</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.titulo}>Passos - MG</h1>
            <p>- Rua Aliperto - 2° andar</p>
            <p>- N° 754</p>
            <p>- (35) 1111-1111</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enderecos;
