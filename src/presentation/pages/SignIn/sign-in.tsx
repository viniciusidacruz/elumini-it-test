import { Button, TextField } from '../../components';
import styles from './sign-in.module.scss';
import { ISignIn } from './sign-in.types';

export const SignIn = ({ handleSubmit, onSubmit, register, errors, isLoading }: ISignIn) => (
  <main className={styles.wrapper}>
    <section className={styles.flex_col_gap}>
      <h1 className={styles.title}>Bem vindo de volta!</h1>
      <p className={styles.description}>Entre com suas credenciais corretas</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.flex_col_gap}>
        <TextField
          {...register('username')}
          placeholder="Insira seu usuário..."
          message={errors?.username?.message}
        />

        <TextField
          {...register('password')}
          placeholder="Insira sua senha..."
          message={errors?.password?.message}
        />

        <Button isLoading={isLoading}>Entrar</Button>
      </form>
    </section>
  </main>
);
