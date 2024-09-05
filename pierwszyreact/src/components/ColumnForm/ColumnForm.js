import styles from "./ColumnForm.module.scss";
import { useState } from 'react';
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.inputs}><span className={styles.b4inputs}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} /></span>   
            <span className={styles.inputs}><span className={styles.b4inputs}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} /></span>
            <Button>Add Column</Button>
        </form>
	);
};

export default ColumnForm;