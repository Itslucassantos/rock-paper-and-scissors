import React from 'react';
import Header from './Components/Header/Header';
import Play from './Components/Play/Play';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [playerScore, setPlayerScore] = React.useState(0);
  const [machineScore, setMachineScore] = React.useState(0);

  return (
    <>
      <Header playerScore={playerScore} machineScore={machineScore} />

      <Play
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
        machineScore={machineScore}
        setMachineScore={setMachineScore}
      />

      <Footer />
    </>
  );
};

export default App;