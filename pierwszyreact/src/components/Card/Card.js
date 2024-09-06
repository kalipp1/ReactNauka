import styles from './Card.module.scss';
import CardForm from '../CardForm/CardForm';

const Card = props => {
    return(
    <div>
        <ul className={styles.cards}>
            {props.cards.map(card => <li key={card.id}>{card.title}</li>)}
        </ul>
        <CardForm columnId={props.id} action ={props.action} />
    </div>
    )
}

export default Card;