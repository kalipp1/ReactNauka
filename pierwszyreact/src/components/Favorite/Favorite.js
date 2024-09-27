import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Cards from '../Cards/Cards';

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCards);

    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <Cards cards ={favoriteCards} />
        {!favoriteCards.length && <span>No cards found ...</span>} 
      </div>
    );
  };

  export default Favorite;