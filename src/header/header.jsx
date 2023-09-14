import styles from './header.module.css'

function Header() {
    const changeText = () => {
        document.getElementById('header').innerHTML = 'Madhav';
      };

  return (
  <div className={styles.header}>

    <p id="header">Click here to see my name.</p>
    <button type="button" onClick={changeText}>Click Me!</button>
  </div>
);
}
export default Header
