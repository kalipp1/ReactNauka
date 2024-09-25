import styles from './PageNotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const PageNotFound = () => {
    return (
      <div className={styles.pnf}>
        <PageTitle>404 Page not found</PageTitle>
      </div>
    );
  };

  export default PageNotFound;