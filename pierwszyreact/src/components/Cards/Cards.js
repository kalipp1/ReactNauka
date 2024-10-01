import styles from './Cards.module.scss';
import CardForm from '../CardForm/CardForm';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Cards = props => {
    const dispatch = useDispatch();
    const changeFavorite = (cardId) => {
        dispatch(toggleFavorite(cardId));
    } ;
    const removeClick = (cardId) => {
        dispatch(removeCard(cardId));
    } ;
    return(
    <ul className={styles.list}>
        {props.cards.map(card => <li className={styles.card} key={card.id}>{card.title}<div><button onClick={() => changeFavorite(card.id)} className={clsx(styles.icon, 'fa fa-star-o', card.isFavorite && styles.isFavorite)}></button><button onClick={() => removeClick(card.id)} className={clsx(styles.icon, 'fa fa-trash')}></button></div></li>)}
        {props.columnId && <CardForm columnId={props.columnId} />}
    </ul>
    )
}

export default Cards;