import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
      <div className={styles.navbar}>
       <span className={styles.icon}><a href='/'><i className={'fa fa-tasks'}></i></a></span>
       <ul className={styles.list}>
        <li><a href='/'>Home</a></li>
        <li><a href='/favorite'>Favorite</a></li>
        <li><a href='/about'>About</a></li>
       </ul>
      </div>
    );
  };

  export default NavBar;