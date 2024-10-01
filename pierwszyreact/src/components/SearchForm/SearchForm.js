import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        return() => {
            dispatch(updateSearchString(value))
        }
    }, []);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(value));
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