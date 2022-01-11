import React from 'react';
import styles from './MenuMobile.module.css';

const MenuMobile = () => {
  function ativarMenuMobile() {
    document
      .getElementById('menuMobileLista')
      .classList.toggle(`${styles.ativo}`);
    document.getElementById('botaoMobile').classList.toggle(`${styles.ativo}`);
  }
  const linksMobile = document.getElementById('menuMobileLista');

  linksMobile && linksMobile.addEventListener('click', ativarMenuMobile);

  return (
    <div className={styles.botaoMobileCtn}>
      <button
        className={styles.botaoMenuMobile}
        onClick={ativarMenuMobile}
        id="botaoMobile"
      >
        <span></span>
      </button>
      <div className={styles.menuMobileLista} id="menuMobileLista">
        <ul>
          <a href="#enderecos">
            <li>Lojas</li>
          </a>
          <a href="#contatos">
            <li>Contatos</li>
          </a>
          <a href="#sobre">
            <li>Sobre</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
