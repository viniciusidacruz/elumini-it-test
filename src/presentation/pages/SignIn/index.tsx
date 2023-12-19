import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../configs/routes/routes';
import { useAuthStore } from '../../stores';
import { SignIn } from './sign-in';
import { initialValues, schema, TData } from './sign-in.utils';

export function SignInContainer() {
  const navigate = useNavigate();
  const { signIn } = useAuthStore();

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
    const { username, password } = data;

    await signIn(username, password);

    navigate(ROUTES.dashboard.path);
  }, []);

  return (
    <SignIn
      errors={errors}
      onSubmit={onSubmit}
      register={register}
      isLoading={isSubmitting}
      handleSubmit={handleSubmit}
    />
  );
}
