import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.tituloCtn}>
        <h1 className={styles.titulo}>Entre em contato</h1>
      </div>
      <div className={styles.infoCtn}>
        <div className={styles.contatos} id="contatos">
          <h1 className={styles.subTitulo}>Contatos</h1>
          <span>
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6 0.800049H3.40001C1.86001 0.800049 0.600006 1.99005 0.600006 3.44449V10.0556C0.600006 11.51 1.86001 12.7 3.40001 12.7H14.6C16.14 12.7 17.4 11.51 17.4 10.0556V3.44449C17.4 1.99005 16.14 0.800049 14.6 0.800049ZM15.72 4.63449L10.19 8.13838C9.84001 8.33672 9.42001 8.46894 9.00001 8.46894C8.58001 8.46894 8.16001 8.33672 7.81001 8.13838L2.28001 4.63449C2.00001 4.43616 1.93001 4.03949 2.14001 3.70894C2.35001 3.44449 2.77001 3.37838 3.12001 3.57672L8.65001 7.0806C8.86001 7.21283 9.21001 7.21283 9.42001 7.0806L14.95 3.57672C15.3 3.37838 15.72 3.44449 15.93 3.77505C16.07 4.03949 16 4.43616 15.72 4.63449Z"
                fill="#4B2E00"
              />
            </svg>
            <p>emperialmoveisfake123@hotmail.com</p>
          </span>
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.125 10.625H14.75C13.625 10.625 12.75 9.6875 12.75 8.5625C12.75 8.375 12.75 8.125 12.0625 8.125H7.9375C7.25 8.125 7.25 8.375 7.25 8.5625C7.25 9.6875 6.375 10.625 5.25 10.625H1.875C1.5 10.625 1.25 10.375 1.25 10C1.25 6.875 3.6875 4.375 6.625 4.375H13.375C16.3125 4.375 18.75 6.875 18.75 10C18.75 10.375 18.5 10.625 18.125 10.625Z"
                fill="#412800"
              />
              <path
                d="M14.75 11.875C13.25 11.875 11.9375 10.8125 11.5625 9.375H8.3125C7.9375 10.8125 6.6875 11.875 5.125 11.875H4.5C3.8125 13.375 3.125 15.25 3.125 16.875C3.125 17.25 3.375 17.5 3.75 17.5H16.25C16.625 17.5 16.875 17.25 16.875 16.875C16.875 15.25 16.1875 13.375 15.4375 11.875H14.75ZM10 15.625C8.625 15.625 7.5 14.5 7.5 13.125C7.5 11.75 8.625 10.625 10 10.625C11.375 10.625 12.5 11.75 12.5 13.125C12.5 14.5 11.375 15.625 10 15.625Z"
                fill="#412800"
              />
              <path
                d="M14.375 18.75C14 18.75 13.75 18.5 13.75 18.125V16.875C13.75 16.5 14 16.25 14.375 16.25C14.75 16.25 15 16.5 15 16.875V18.125C15 18.5 14.75 18.75 14.375 18.75Z"
                fill="#412800"
              />
              <path
                d="M5.625 18.75C5.25 18.75 5 18.5 5 18.125V16.875C5 16.5 5.25 16.25 5.625 16.25C6 16.25 6.25 16.5 6.25 16.875V18.125C6.25 18.5 6 18.75 5.625 18.75Z"
                fill="#412800"
              />
            </svg>
            <p>(35) 9999-9999</p>
          </span>
        </div>

        <div className={styles.redes}>
          <h1 className={styles.subTitulo}>Redes Sociais</h1>
          <span>
            <a
              href="https://www.facebook.com/ismael.borges.507"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.7238 0C33.084 0 35 1.89599 35 4.23126V30.4013C35 32.7365 33.0838 34.6326 30.7238 34.6326H23.4458V21.5834H27.9985L28.8648 15.9948H23.4458V12.3681C23.4458 10.8392 24.2026 9.34883 26.63 9.34883H29.0938V4.59091C29.0938 4.59091 26.8577 4.21334 24.7199 4.21334C20.2569 4.21334 17.3398 6.88985 17.3398 11.7354V15.9948H12.3789V21.5834H17.3398V34.6326H4.27615C1.91611 34.6326 0 32.7365 0 30.4013V4.23126C0 1.89599 1.91604 0 4.27615 0H30.7238Z"
                  fill="#4B2E00"
                />
              </svg>
            </a>
          </span>
          <span>
            <a
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5535984381361"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10_23)" filter="url(#filter0_i_10_23)">
                  <path
                    d="M30.625 0H4.375C1.95875 0 0 1.95875 0 4.375V30.625C0 33.0412 1.95875 35 4.375 35H30.625C33.0412 35 35 33.0412 35 30.625V4.375C35 1.95875 33.0412 0 30.625 0Z"
                    fill="#4B2E00"
                  />
                  <g filter="url(#filter1_d_10_23)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.1719 17.1481C31.1719 24.5042 25.1622 30.4676 17.7486 30.4676C15.3949 30.4676 13.1837 29.8659 11.2599 28.8104L3.82812 31.1719L6.25063 24.0253C5.0285 22.0178 4.32476 19.6639 4.32476 17.148C4.32476 9.79147 10.3346 3.82812 17.7485 3.82812C25.1622 3.82819 31.1719 9.79156 31.1719 17.1481ZM17.7486 5.94945C11.5251 5.94945 6.46284 10.9734 6.46284 17.1481C6.46284 19.5982 7.26151 21.8678 8.61247 23.7137L7.20278 27.8721L11.5397 26.4937C13.3219 27.6636 15.4561 28.3461 17.7485 28.3461C23.9712 28.3461 29.0342 23.3227 29.0342 17.148C29.0342 10.9734 23.9713 5.94945 17.7486 5.94945ZM24.5268 20.2153C24.444 20.0794 24.2247 19.9976 23.8962 19.8345C23.5669 19.6713 21.9487 18.8812 21.6476 18.7726C21.3455 18.6637 21.1259 18.609 20.9067 18.9356C20.6876 19.2631 20.0571 19.9976 19.8647 20.2153C19.6727 20.4335 19.4813 20.4608 19.152 20.2974C18.8235 20.1342 17.7628 19.7896 16.5059 18.6771C15.5279 17.8118 14.8674 16.7435 14.6754 16.4164C14.4834 16.0897 14.6551 15.9131 14.8196 15.7506C14.9677 15.6037 15.1487 15.369 15.3134 15.1788C15.478 14.9878 15.5327 14.852 15.6422 14.6341C15.7524 14.4161 15.6968 14.2256 15.6149 14.0618C15.5327 13.8989 14.8744 12.2921 14.6002 11.6386C14.326 10.9851 14.0525 11.094 13.8601 11.094C13.668 11.094 13.4489 11.0666 13.2292 11.0666C13.0098 11.0666 12.6531 11.1486 12.3518 11.475C12.0503 11.802 11.2005 12.5915 11.2005 14.198C11.2005 15.8048 12.3792 17.357 12.5439 17.5747C12.7083 17.7919 14.8195 21.1958 18.1643 22.5035C21.5104 23.8101 21.5104 23.3747 22.1137 23.3195C22.7162 23.2657 24.0599 22.5304 24.3346 21.7677C24.6086 21.0056 24.6086 20.3514 24.5268 20.2153Z"
                      fill="#E7DCCC"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_i_10_23"
                    x="0"
                    y="0"
                    width="35"
                    height="39"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_10_23"
                    />
                  </filter>
                  <filter
                    id="filter1_d_10_23"
                    x="1.82812"
                    y="3.82812"
                    width="35.3438"
                    height="35.3438"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_10_23"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10_23"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_10_23">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </span>
          <span>
            <a
              href="http://www.linkedin.com/in/ismael-borges-207402204"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10_21)" filter="url(#filter0_i_10_21)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.7238 0C33.084 0 35 1.91611 35 4.27615V30.7238C35 33.0839 33.0839 35 30.7238 35H4.27615C1.91611 35 0 33.0839 0 30.7238V4.27615C0 1.91611 1.91604 0 4.27615 0H30.7238V0ZM10.969 28.935V13.5051H5.83933V28.935H10.969ZM29.4629 28.935V20.0866C29.4629 15.3471 26.9324 13.1423 23.5579 13.1423C20.837 13.1423 19.6181 14.6388 18.9357 15.6898V13.5051H13.8073C13.8753 14.9531 13.8073 28.935 13.8073 28.935H18.9356V20.3179C18.9356 19.8566 18.9688 19.3956 19.1047 19.0659C19.4748 18.1448 20.3193 17.1905 21.7362 17.1905C23.5911 17.1905 24.3343 18.6061 24.3343 20.6794V28.935H29.4629ZM8.43883 6.06498C6.68377 6.06498 5.53711 7.21882 5.53711 8.73113C5.53711 10.2117 6.64891 11.3973 8.37095 11.3973H8.40403C10.1927 11.3973 11.306 10.2117 11.306 8.73113C11.2729 7.22094 10.1958 6.06826 8.43883 6.06498Z"
                    fill="#4B2E00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_10_21"
                    x="0"
                    y="0"
                    width="35"
                    height="39"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_10_21"
                    />
                  </filter>
                  <clipPath id="clip0_10_21">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className={styles.arte}>
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arte}
        >
          <path
            d="M65 65L56.75 56.875M65 65V56.875M65 65H56.75M65 0V32.5M0 65H32M32 65H32.5H40.25M32 65L40.25 56.875M65 32.5L56.75 40.625M65 32.5V40.625M48.5 48.75L48.75 65M48.5 48.75H64.7671M48.5 48.75L56.75 40.625M48.5 48.75L40.25 56.875M48.5 48.75L56.75 56.875M48.75 65L40.25 56.875M48.75 65L56.75 56.875M48.75 65H56.75M48.75 65H40.25M64.7671 48.75L56.75 40.625M64.7671 48.75L56.75 56.875M56.75 40.625H65M56.75 40.625V65M40.25 56.875H56.75M40.25 56.875V65M56.75 56.875H65M65 40.625V56.875"
            stroke="#412800"
          />
        </svg>
      </div>
      <div className={styles.copyright}>
        <p>Empério Móveis 2021 - By Ismael Borges - Site não comercial</p>
      </div>
    </footer>
  );
};

export default Footer;
