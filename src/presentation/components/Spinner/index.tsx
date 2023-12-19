import styles from './spinner.module.scss';

/**
 * @description Componente de loading para solicitações de requisições
 */
export const Spinner = () => <div data-testid="spinner" className={styles.container}></div>;
