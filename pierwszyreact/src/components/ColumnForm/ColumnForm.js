import styles from "./ColumnForm.module.scss";
import { useState } from 'react';
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from 'react-redux';
import { addColumn } from "../../redux/columnsRedux";
import { useParams } from 'react-router';

const ColumnForm = props => {
    const { listId } = useParams();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
     };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.inputs}><span className={styles.b4inputs}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} /></span>   
            <span className={styles.inputs}><span className={styles.b4inputs}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} /></span>
            <Button>Add Column</Button>
        </form>
	);
};

export default ColumnForm;