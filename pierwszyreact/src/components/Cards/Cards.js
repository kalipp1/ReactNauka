import styles from './Cards.module.scss';
import CardForm from '../CardForm/CardForm';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsRedux';

const Cards = props => {
    const dispatch = useDispatch();
    const changeFavorite = (cardId) => {
        dispatch(toggleFavorite(cardId));
    } ;
    // <span className={clsx(styles.icon, isFavorite && styles.isFavorite)} />
    return(
    <ul className={styles.list}>
        {props.cards.map(card => <li className={styles.card} key={card.id}>{card.title}<button onClick={() => changeFavorite(card.id)} className={clsx(styles.icon, 'fa fa-star-o', card.isFavorite && styles.isFavorite)}></button></li>)}  
        {/* <ul className={styles.card}> */}
            {/* {props.cards.map(card => <li key={card.id}>{card.title}</li>)} */}
        {/* </ul> */}
        {props.columnId && <CardForm columnId={props.columnId} />}
    </ul>
    )
}

export default Cards;