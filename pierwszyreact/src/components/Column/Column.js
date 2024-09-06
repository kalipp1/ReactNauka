import styles from './Column.module.scss';
import Card from '../Card/Card';

const Column = props => {
    return(
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h1>
            <Card cards = {props.cards} id={props.id} action={props.addCard} />
        </article>
    )
    
};

export default Column;