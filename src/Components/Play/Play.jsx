import React, { useEffect, useRef } from 'react';
import styles from './Play.module.css';
import Game from '../../Components/Game/Game';

const Play = ({
  playerScore,
  setPlayerScore,
  machineScore,
  setMachineScore,
}) => {
  const [player, setPlayer] = React.useState(null);
  const [machine, setMachine] = React.useState(null);
  const [showComponent, setShowComponent] = React.useState(false);
  const [stateChange, setStateChange] = React.useState(0);
  const [hideComponent, setHideComponent] = React.useState(null)

  const randomIds = ['rock', 'scissors', 'paper'];

  function handleMachine() {
    const randomIndex = Math.floor(Math.random() * randomIds.length);
    const randomId = randomIds[randomIndex];
    setMachine(randomId);
  }

  const gameRef = useRef(null);

  function handleClick(event) {
    event.preventDefault();
    setStateChange(stateChange + 1);
    setPlayer(event.target.id);
    handleMachine();
    setShowComponent(true);
    setHideComponent(false)
    scrollToGame();
  }

  const scrollToGame = () => {
    // Verifica se a referência do componente Game existe
    if (gameRef.current) {
      // Rola a página até o topo do componente Game
      gameRef.current.scrollIntoView({ behavior: 'smooth' }); // "smooth" para rolagem suave
    }
  };

  useEffect(() => {
    if(showComponent) {
      scrollToGame();
    }
  }, [showComponent]);

  return (
    <div className={styles.container} style={{ marginTop: '4rem' }}>
      <div className={styles.items}>
        <button
          id="rock"
          onClick={handleClick}
          className={`${styles.image1} ${styles.btn}`}
        ></button>
        <button
          id="scissors"
          onClick={handleClick}
          className={`${styles.image2} ${styles.btn}`}
        ></button>
      </div>
      <div className={styles.item}>
        <button
          id="paper"
          onClick={handleClick}
          className={`${styles.image3} ${styles.btn}`}
        ></button>
      </div>

      {showComponent && (
        <Game
          mainPlayer={player}
          machinePlayer={machine}
          playerScore={playerScore}
          setPlayerScore={setPlayerScore}
          stateChange={stateChange}
          machineScore={machineScore}
          setMachineScore={setMachineScore}
          hideComponent={hideComponent}
          setHideComponent={setHideComponent}
          ref={gameRef}
        />
      )}
    </div>
  );
};

export default Play;