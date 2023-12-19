import { Spinner } from '../Spinner';
import styles from './button.module.scss';
import { IButton } from './button.types';

/**
 * @description Componente de botão para ações
 *
 * @param props propriedades nativas de um botão HTML
 * @param isLoading propriedades para estado de loading
 */

export function Button({ isLoading = false, children, disabled = false, ...props }: IButton) {
  function renderChildrenElement() {
    if (isLoading) {
      return <Spinner />;
    }

    return children;
  }

  return (
    <button
      data-testid="button"
      className={styles.container}
      disabled={disabled || isLoading}
      {...props}
    >
      {renderChildrenElement()}
    </button>
  );
}
