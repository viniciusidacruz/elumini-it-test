import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useId, useState } from 'react';

import styles from './text-field.module.scss';
import { ITextField } from './text-field.types';

/**
 * @description Componente de input para formulários
 *
 * @param props propriedades nativas de um input HTML
 * @param label propriedade para título de um campo (input)
 * @param message propriedade para exibir mensagem de erro
 * @param isPassword propriedade para exibir o botão de visualizar a senha
 */

// eslint-disable-next-line react/display-name
const TextFieldComponent = forwardRef<HTMLInputElement, ITextField>(
  ({ required, label = '', message = '', type, isPassword = false, ...props }, ref) => {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const id = useId();
    const hasLabel = !!label.length;
    const hasMessage = !!message.length;
    const typeOfField = isPassword ? (isVisiblePassword ? 'text' : 'password') : type;

    const changeVisibilityPassword = () => setIsVisiblePassword((prevState) => !prevState);

    return (
      <div className={styles.container}>
        {hasLabel && (
          <label htmlFor={id} className={`${styles.label} ${styles.small_text}`}>
            {label}

            {required && <strong className={`${styles.required} ${styles.alert_color}`}>*</strong>}
          </label>
        )}

        <div className={styles.field}>
          <input id={id} ref={ref} type={typeOfField} className={styles.field} {...props} />

          {isPassword && (
            <button
              type="button"
              data-testid="icons-password"
              onClick={changeVisibilityPassword}
              aria-label="Botão para visualizar ou não a senha"
            >
              {isVisiblePassword ? <EyeOff data-testid="eye-off" /> : <Eye data-testid="eye" />}
            </button>
          )}
        </div>

        {hasMessage && (
          <small className={`${styles.small_text} ${styles.alert_color}`}>{message}</small>
        )}
      </div>
    );
  },
);

export default TextFieldComponent;
