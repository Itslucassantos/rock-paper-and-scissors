import React, { forwardRef } from 'react';
import styles from './Game.module.css';

const Game = forwardRef ((
  {
  mainPlayer,
  machinePlayer,
  playerScore,
  setPlayerScore,
  stateChange,
  machineScore,
  setMachineScore,
  hideComponent,
  setHideComponent
},
ref
) => {
  const [result, setResult] = React.useState('');

  function handleMachineScore() {
    setMachineScore(machineScore + 1);
    setResult('Lose');
  }

  function handlePlayerScore() {
    setPlayerScore(playerScore + 1);
    setResult('Win');
  }

  React.useEffect(() => {
    if (mainPlayer === 'rock' && machinePlayer === 'scissors') {
      handlePlayerScore();
    } else if (mainPlayer === 'paper' && machinePlayer === 'rock') {
      handlePlayerScore();
    } else if (mainPlayer === 'scissors' && machinePlayer === 'paper') {
      handlePlayerScore();
    } else if (mainPlayer === machinePlayer) {
      setResult('Draw');
    } else {
      handleMachineScore();
    }
  }, [stateChange]);

  const images = [
    { id: 'rock', url: '/src/Assets/punho.png' },
    { id: 'paper', url: '/src/Assets/palma-da-mao.png' },
    { id: 'scissors', url: '/src/Assets/tesouras.png' },
  ];

  const findMainPlayerImage = (mainPlayer) => {
    const image = images.find((image) => image.id === mainPlayer);
    return image ? image.url : null;
  };

  const mainPlayerUrl = findMainPlayerImage(mainPlayer);

  const findMachinePlayerImage = (machinePlayer) => {
    const image = images.find((image) => image.id === machinePlayer);
    return image ? image.url : null;
  };

  const machinePlayerUrl = findMachinePlayerImage(machinePlayer);

  const containerRef = React.useRef(null); // Ref para o container do jogo

  React.useEffect(() => {
    // Verifica se o componente deve ser rolado para a exibição
    if (!hideComponent && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hideComponent]);

  function handleClickRestart() {
    setPlayerScore(0)
    setMachineScore(0)
    setHideComponent(true)
  }

  if (hideComponent) return null
  return (
    <div ref={ref} className={styles.space}>
      <div ref={containerRef} className={` ${styles.container} ${styles.containerStyle}`}>
        <div>
          <h2>Player</h2>
          <img
            className={`
          ${styles.principal}  
          ${mainPlayer === 'rock' ? styles.image1 : ''}
          ${mainPlayer === 'scissors' ? styles.image2 : ''}
          ${mainPlayer === 'paper' ? styles.image3 : ''}
          `}
            src={mainPlayerUrl}
          />
        </div>

        <div>
          <h2>{result}</h2>
          <button onClick={handleClickRestart} className={`${styles.tryAgain}`}>Restart</button>
        </div>

        <div>
          <h2>Machine</h2>
          <img
            className={`
          ${styles.principal}  
          ${machinePlayer === 'rock' ? styles.image1 : ''}
          ${machinePlayer === 'scissors' ? styles.image2 : ''}
          ${machinePlayer === 'paper' ? styles.image3 : ''}
          `}
            src={machinePlayerUrl}
          />
        </div>
      </div>
    </div>
  );
});

export default Game;