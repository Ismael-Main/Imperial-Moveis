import React from 'react';
import styles from './Header.module.css';
import logo from '../icones/LogoImperial.svg';
import { Link, useLocation } from 'react-router-dom';
import MenuMobile from './MenuMobile';

const Header = () => {
  //função scroll suave
  const menuItens = document.querySelectorAll('header a[href^="#"]');
  const menuItensMobile = document.querySelectorAll('.menuMobile a[href^="#"]');
  function scrollToId(event) {
    event.preventDefault();
    const elemento = event.currentTarget; //pega o link do menu em que estamos clicando
    const id = elemento.getAttribute('href'); //pega o atributo 'href' desse elemento
    const sectionDestino = document.querySelector(id).offsetTop; //busca a section onde o id é igual o href do link do menu que foi clicado e checa a distancia do scroll até ele
    window.scrollTo(smoothScrollTo(0, sectionDestino, 1300));
  }
  menuItens.forEach((item) => {
    item.addEventListener('click', scrollToId);
  });
  menuItensMobile.forEach((item) => {
    item.addEventListener('click', scrollToId);
  });

  //função para ter compatibilidade browsers antigos

  /**
   * Smooth scroll animation
   * @param {int} endX: destination x coordinate
   * @param {int} endY: destination y coordinate
   * @param {int} duration: animation duration in ms
   */
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }

  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <p className={styles.conheca}>
        {pathname !== '/' ? (
          <Link to="/">
            <svg
              width="40"
              height="25"
              viewBox="0 0 29 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.04076 0.295798C8.13448 0.388761 8.20888 0.499362 8.25965 0.621222C8.31042 0.743081 8.33656 0.873786 8.33656 1.0058C8.33656 1.13781 8.31042 1.26852 8.25965 1.39038C8.20888 1.51223 8.13448 1.62284 8.04076 1.7158L3.44076 6.3158H26.9808C27.246 6.3158 27.5408 6.2958 28.0408 6.2958C28.0408 6.7958 28.0408 7.03058 28.0408 7.2958C28.0408 7.56102 28.0407 8.2958 28.0407 8.2958C28.0407 8.2958 27.306 8.2958 27.0408 8.2958L3.46076 8.3158L8.04076 12.8858C8.22701 13.0732 8.33155 13.3266 8.33155 13.5908C8.33155 13.855 8.22701 14.1084 8.04076 14.2958C7.85339 14.482 7.59994 14.5866 7.33576 14.5866C7.07157 14.5866 6.81812 14.482 6.63076 14.2958L0.270756 7.9358C0.185154 7.85367 0.117042 7.75508 0.0705128 7.64596C0.0239834 7.53683 -1.90735e-06 7.41943 -1.90735e-06 7.3008C-1.90735e-06 7.18217 0.0239834 7.06476 0.0705128 6.95564C0.117042 6.84652 0.185154 6.74793 0.270756 6.6658L6.62076 0.295798C6.71372 0.20207 6.82432 0.127676 6.94618 0.0769072C7.06804 0.0261385 7.19875 0 7.33076 0C7.46277 0 7.59347 0.0261385 7.71533 0.0769072C7.83719 0.127676 7.94779 0.20207 8.04076 0.295798Z"
                fill="#905C08"
              />
            </svg>
          </Link>
        ) : (
          <a href="#produtos">Nossos Móveis</a>
        )}
      </p>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <ul className={styles.lista}>
        <a href="#enderecos">
          <li>Lojas</li>
        </a>
        <a href="#contatos">
          <li>Contatos</li>
        </a>
        {pathname === '/' ? (
          <a href="#sobre">
            <li>Sobre</li>
          </a>
        ) : (
          <Link to="/">Sobre</Link>
        )}
      </ul>
      <MenuMobile />
    </header>
  );
};

export default Header;
