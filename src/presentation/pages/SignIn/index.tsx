import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { Button, TextField } from '../../components';
import styles from './sign-in.module.scss';
import { initialValues, schema, TData } from './sign-in.utils';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  const onSubmit = useCallback(async (data: TData) => {
    console.log(data);
  }, []);

  return (
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

          <Button isLoading={isSubmitting}>Entrar</Button>
        </form>
      </section>
    </main>
  );
};
