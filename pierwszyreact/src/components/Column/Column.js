import styles from './Column.module.scss';
import Cards from '../Cards/Cards';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = props => {
    const cards = useSelector(state => getFilteredCards(state, props.id));
    console.log('Column render');
    
    return(
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h1>
                <Cards columnId={props.id} cards ={[...cards]} />  
        </article>
    )
    
};

export default Column;