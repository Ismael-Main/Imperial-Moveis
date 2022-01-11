import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section id="banner">
      <div className={styles.banner}>
        <div className={styles.bannerArea}>
          <h1 className={styles.titulo}>Móveis de qualidade</h1>
          <div className={styles.paragrafos}>
            <p>
              Nossos produtos são feitos em alto padrão de qualidade, excelente
              acabamento e um visual inconfundível.
            </p>
            <p>
              Combinam com praticamente qualquer ambiente e mudam totalmente o
              estilo da sua casa, agregando estilo e classe na medida certa.
            </p>
            <p>
              Se você procura por algo que seja resistente e que dure por muito
              tempo com certeza precisa conhecer nossos produtos.
            </p>
          </div>
          <a href="#produtos" className={styles.botao}>
            CONHEÇA NOSSOS PRODUTOS
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 9C21.9063 9.09296 21.8319 9.20356 21.7811 9.32542C21.7304 9.44728 21.7042 9.57799 21.7042 9.71C21.7042 9.84201 21.7304 9.97272 21.7811 10.0946C21.8319 10.2164 21.9063 10.327 22 10.42L26.6 15.02H3.06001C2.7948 15.02 2.5 15 2 15C2 15.5 2 15.7348 2 16C2 16.2652 2.00002 17 2.00002 17C2.00002 17 2.73478 17 3 17L26.58 17.02L22 21.59C21.8138 21.7774 21.7092 22.0308 21.7092 22.295C21.7092 22.5592 21.8138 22.8126 22 23C22.1874 23.1862 22.4408 23.2908 22.705 23.2908C22.9692 23.2908 23.2227 23.1862 23.41 23L29.77 16.64C29.8556 16.5579 29.9237 16.4593 29.9703 16.3502C30.0168 16.241 30.0408 16.1236 30.0408 16.005C30.0408 15.8864 30.0168 15.769 29.9703 15.6598C29.9237 15.5507 29.8556 15.4521 29.77 15.37L23.42 9C23.3271 8.90627 23.2164 8.83188 23.0946 8.78111C22.9727 8.73034 22.842 8.7042 22.71 8.7042C22.578 8.7042 22.4473 8.73034 22.3254 8.78111C22.2036 8.83188 22.093 8.90627 22 9Z"
                fill="#E7DCCC"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
