import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {

  const [showText, setShowText] = React.useState(false)

  function handleClick() {
    setShowText(!showText)
  }

  return (
    <footer className={styles.container}>
      <button onClick={handleClick} className={styles.item}>Game Rules</button>
      {showText && <div className={styles.text}>
        Basic rules: given a signal, each player presents an element. Rock loses to paper (the paper wraps the rock); paper loses to scissors (the latter cuts the first); and finally, the scissors lose to the rock, which breaks the former.
        </div>}
    </footer>
  )
}

export default Footer