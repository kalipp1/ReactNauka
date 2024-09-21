import styles from './Card.module.scss';
import CardForm from '../CardForm/CardForm';

const Card = props => {
    return(
    <div>
        {props.cards.map(card => <li className={styles.card} key={card.id}>{card.title}</li>)}  
        {/* <ul className={styles.card}> */}
            {/* {props.cards.map(card => <li key={card.id}>{card.title}</li>)} */}
        {/* </ul> */}
        <CardForm columnId={props.columnId} />
    </div>
    )
}

export default Card;