import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaUsers, FaChartBar, FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import styles from '../style/Sidebar.module.css';  

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo no topo */}
      <div className={styles.logoContainer}>
        <img src="/assets/logo.svg"  alt="Logo" className={styles.logo} />
      </div>

      {/* Menu de navegação */}
      <nav className={styles.navMenu}>
        <ul>
          <li>
            <Link to="/" className={styles.navItem}>
              <FaHome className={styles.icon} /> Tela Inicial
            </Link>
          </li>
          <li>
            <Link to="/modelo" className={styles.navItem}>
              <FaCog className={styles.icon} /> Modelo
            </Link>
          </li>
          <li>
            <Link to="/clientes" className={styles.navItem}>
              <FaUsers className={styles.icon} /> Clientes
            </Link>
          </li>
          <li>
            <Link to="/estatisticas" className={styles.navItem}>
              <FaChartBar className={styles.icon} /> Estatísticas
            </Link>
          </li>
        </ul>
      </nav>

      {/* Rodapé com Redes Sociais */}
      <div className={styles.footer}>
        <div className={styles.socialLinks}>
          <ul className={styles.socialList}>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="mailto:email@example.com">
                <FaEnvelope className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>
          © NesPeD Lab
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
