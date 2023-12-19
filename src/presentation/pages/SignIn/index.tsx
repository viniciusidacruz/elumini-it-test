import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { SignIn } from './sign-in';
import { initialValues, schema, TData } from './sign-in.utils';

export function SignInContainer() {
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
    <SignIn
      errors={errors}
      onSubmit={onSubmit}
      register={register}
      isLoading={isSubmitting}
      handleSubmit={handleSubmit}
    />
  );
}
