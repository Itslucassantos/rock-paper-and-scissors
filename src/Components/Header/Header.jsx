import React from 'react';
import styles from './Header.module.css';

const Header = ({ playerScore, machineScore }) => {
  return (
    <header className={styles.principal}>
      <div className={styles.container}>
        <div className={`${styles.sizeWord} ${styles.mobile}`}>
          <h3>Rock</h3>
          <h3>Paper</h3>
          <h3>Scissors</h3>
        </div>
        <div className={styles.score}>
          <h2 className={styles.sizeWord}>score</h2>
          <div className={styles.liningUp}>
            <div>
              <h3>Player</h3>
              <p className={styles.sizeNumber}>{playerScore}</p>
            </div>
            <div>
              <h3>Machine</h3>
              <p className={styles.sizeNumber}>{machineScore}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
