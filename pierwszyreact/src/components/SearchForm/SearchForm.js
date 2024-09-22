import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: { value } });
        setValue('');
     };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={value} onChange={e => setValue(e.target.value)} placeholder='Search...'/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;