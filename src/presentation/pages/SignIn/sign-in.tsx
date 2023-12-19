import { Button, TextField } from '../../components';
import styles from './sign-in.module.scss';
import { ISignIn } from './sign-in.types';

/**
 * @description Componente final da página de sign in
 *
 * @param handleSubmit propriedade nativa da lib react-hook-form para enviar dados
 * @param onSubmit propriedade função callback para pegar os dados enviados no formulário
 * @param register propriedade nativa da lib react-hook-form para setar os inputs
 * @param errors propriedade nativa da lib react-hook-form para trabalhar com os erros setados no schema
 * @param isLoading propriedade para exibir que está sendo solicitado uma requisição
 */

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
          isPassword
        />

        <Button isLoading={isLoading}>Entrar</Button>
      </form>
    </section>
  </main>
);
